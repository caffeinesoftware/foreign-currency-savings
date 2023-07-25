import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";

import { getOffersByCurrency, Offer } from "@/src/offers";
import OfferBox from "@/src/components/OfferBox";
import Layout from "./layout";
import USDAccountTypesMenu from "@/src/components/USDAccountTypesMenu";
import OfferList from "@/src/components/OfferList";
import AmountFilter from "@/src/components/AmountFilter";

interface IPageProps {
  offers: Offer[];
}

export default function Currency({ offers }: IPageProps) {
  const [initialDeposit, setInitialDeposit] = useState<number | null>(null);

  const filteredOffers = offers.filter((offer) => {
    if (!initialDeposit) return offer;
    return offer.interestRate.minimumDepositAmount <= initialDeposit;
  });

  const onChangeInitialDeposit = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInitialDeposit(parseInt(event.target.value));
  };

  return (
    <Layout>
      <Head>
        <title>US Dollar savings accounts 🇺🇸</title>
      </Head>
      <div className="width-full bg-green-600 p-3">
        <h2 className="text-white font-bold text-3xl text-center py-3">
          US Dollar savings accounts available to UK residents 🇺🇸
        </h2>
      </div>
      <USDAccountTypesMenu />
      <div className="w-full bg-green-600 p-3 md:flex">
        <h3 className="text-white text-lg text-center font-bold py-2 uppercase">
          Filters
        </h3>

        <AmountFilter
          onChange={onChangeInitialDeposit}
          value={initialDeposit}
        />

        <div className="clear-both"></div>
      </div>
      <div className="container p-6 mx-auto">
        <OfferList offers={filteredOffers} totalCount={offers.length} />
        <div style={{ height: "200px" }}>&nbsp;</div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const offers = getOffersByCurrency("USD");

  return { props: { offers } };
};
