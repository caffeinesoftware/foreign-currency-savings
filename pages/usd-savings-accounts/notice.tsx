import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import { getOffersByAccountTypeAndCurrency, Offer } from "@/src/offers";
import { AccountType } from "@/src/accounts";
import Layout from "./../layout";
import USDAccountTypesMenu from "@/src/components/USDAccountTypesMenu";
import OfferList from "@/src/components/OfferList";
import AmountFilter from "@/src/components/AmountFilter";
import TermFilter from "@/src/components/TermFilter";
import { dropBlankValues } from "@/src/utils";

interface IPageProps {
  noticePeriodOptions: number[];
  offers: Offer[];
}

export default function Currency({ noticePeriodOptions, offers }: IPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialDepositFromQueryString = searchParams?.get("initial_deposit");
  const noticePeriodFromQueryString = searchParams?.get("notice_period");

  const [noticePeriod, setNoticePeriod] = useState<number | null>(null);
  const [initialDeposit, setInitialDeposit] = useState<number | null>(null);

  useEffect(() => {
    setInitialDeposit(
      initialDepositFromQueryString
        ? parseInt(initialDepositFromQueryString)
        : null,
    );
  }, [initialDepositFromQueryString]);

  useEffect(() => {
    setNoticePeriod(
      noticePeriodFromQueryString
        ? parseInt(noticePeriodFromQueryString)
        : null,
    );
  }, [noticePeriodFromQueryString]);

  const filteredOffers = offers
    .filter((offer) => {
      if (!noticePeriod) return offer;
      const noticePeriodInDays = offer.interestRate.termInDays as number;
      return noticePeriodInDays === noticePeriod;
    })
    .filter((offer) => {
      if (!initialDeposit) return offer;
      return offer.interestRate.minimumDepositAmount <= initialDeposit;
    });

  const onChangeNoticePeriod = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const notice_period =
      event.target.value === "All" ? null : event.target.value;

    router.push({
      pathname: router.pathname,
      query: dropBlankValues({ ...router.query, notice_period }),
    });
  };

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
        <title>US Dollar notice savings accounts 🇺🇸</title>
      </Head>
      <div className="width-full bg-green-600 p-3">
        <h2 className="text-white font-bold text-3xl text-center py-3">
          US Dollar notice savings accounts available to UK residents 🇺🇸
        </h2>
      </div>
      <USDAccountTypesMenu />
      <div className="w-full bg-green-600 p-3 md:flex">
        <h3 className="text-white text-lg text-center font-bold py-2 uppercase">
          Filters
        </h3>

        <TermFilter
          availableTerms={noticePeriodOptions}
          label="Notice"
          name="noticePeriod"
          onChange={onChangeNoticePeriod}
          value={noticePeriod}
        />

        <AmountFilter
          onChange={onChangeInitialDeposit}
          value={initialDeposit}
        />

        <div className="clear-both"></div>
      </div>
      <div className="container p-6 mx-auto">
        <div className="container p-6 mx-auto">
          <OfferList offers={filteredOffers} totalCount={offers.length} />
          <div style={{ height: "200px" }}>&nbsp;</div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const offers = getOffersByAccountTypeAndCurrency(AccountType.NOTICE, "USD");

  const noticePeriodsInDays = offers.map(
    (offer) => offer.interestRate.termInDays,
  ) as number[];
  const noticePeriodOptions = [...new Set(noticePeriodsInDays)].sort(
    (a, b) => a - b,
  );

  return { props: { noticePeriodOptions, offers } };
};
