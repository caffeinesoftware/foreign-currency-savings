import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import { getOffersByCurrency, Offer } from "@/src/offers";
import Layout from "./layout";
import USDAccountTypesMenu from "@/src/components/USDAccountTypesMenu";
import OfferList from "@/src/components/OfferList";
import AmountFilter from "@/src/components/AmountFilter";
import { dropBlankValues } from "@/src/utils";

interface IPageProps {
  offers: Offer[];
}

export default function Currency({ offers }: IPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialDepositFromQueryString = searchParams?.get("initial_deposit");

  const [initialDeposit, setInitialDeposit] = useState<number | null>(null);

  useEffect(() => {
    setInitialDeposit(
      initialDepositFromQueryString
        ? parseInt(initialDepositFromQueryString)
        : null,
    );
  }, [initialDepositFromQueryString]);

  const filteredOffers = offers.filter((offer) => {
    if (!initialDeposit) return offer;
    return offer.interestRate.minimumDepositAmount <= initialDeposit;
  });

  const onChangeInitialDeposit = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    router.push({
      pathname: router.pathname,
      query: dropBlankValues({
        ...router.query,
        initial_deposit: event.target.value,
      }),
    });
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
