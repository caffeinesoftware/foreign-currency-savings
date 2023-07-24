import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";

import { getOffersByAccountTypeAndCurrency, Offer } from "@/src/offers";
import { AccountType } from "@/src/accounts";
import OfferBox from "@/src/components/OfferBox";
import Layout from "./../layout";
import USDAccountTypesMenu from "@/src/components/USDAccountTypesMenu";
import { presentTerm } from "@/src/utils";

interface IPageProps {
  offers: Offer[];
  termOptions: number[];
}

export default function Currency({ offers, termOptions }: IPageProps) {
  const [term, setTerm] = useState<number | null>(null);
  const [initialDeposit, setInitialDeposit] = useState<number | null>(null);

  const filteredOffers = offers
    .filter((offer) => {
      if (!term) return offer;
      const termInDays = offer.interestRate.termInDays as number;
      return termInDays === term;
    })
    .filter((offer) => {
      if (!initialDeposit) return offer;
      return offer.interestRate.minimumDepositAmount <= initialDeposit;
    });

  const onChangeTerm = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTerm(parseInt(event.target.value));
  };

  const onChangeInitialDeposit = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInitialDeposit(parseInt(event.target.value));
  };

  return (
    <Layout>
      <Head>
        <title>US Dollar fixed rate savings accounts 🇺🇸</title>
      </Head>
      <div className="width-full bg-green-600 p-3">
        <h2 className="text-white font-bold text-3xl text-center py-3">
          US Dollar fixed rate savings accounts available to UK residents 🇺🇸
        </h2>
      </div>
      <USDAccountTypesMenu />
      <div className="w-full bg-green-600 p-3 md:flex">
        <h3 className="text-white text-lg text-center font-bold py-2 uppercase">
          Filters
        </h3>

        <label htmlFor="term" className="text-white my-2 block md:ml-4">
          Term
        </label>

        <select
          name="term"
          className="block my-2 w-full text-lg md:float-left md:ml-4 md:grow"
          onChange={onChangeTerm}
        >
          <option>All</option>
          {termOptions.map((term) => (
            <option key={term} value={term}>
              {presentTerm(term)}
            </option>
          ))}
        </select>

        <label
          htmlFor="initialDeposit"
          className="text-white my-2 block md:ml-4"
        >
          Amount
        </label>

        <input
          name="initialDeposit"
          className="block my-2 w-full text-lg ld:float-left md:ml-4 md:grow pl-5"
          onChange={onChangeInitialDeposit}
          type="number"
          min="1"
          step="1"
          placeholder="Any"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='16px' width='85px'><text x='2' y='13' fill='gray' font-size='12' font-family='arial'>$</text></svg>",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5px 2px",
            backgroundSize: "auto 75%",
          }}
        />

        <div className="clear-both"></div>
      </div>
      <div className="container p-6 mx-auto">
        <p className="text-center text-md mt-1 text-gray-600">
          Displaying {filteredOffers.length} of {offers.length} results
        </p>

        {filteredOffers.map((offer) => (
          <OfferBox offer={offer} key={offer.key} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const offers = getOffersByAccountTypeAndCurrency(
    AccountType.FIXED_TERM,
    "USD",
  );

  const termsInDays = offers.map(
    (offer) => offer.interestRate.termInDays,
  ) as number[];
  const termOptions = [...new Set(termsInDays)].sort((a, b) => a - b);

  return { props: { offers, termOptions } };
};
