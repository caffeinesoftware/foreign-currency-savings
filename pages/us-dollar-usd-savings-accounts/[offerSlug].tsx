import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { getOffersByCurrency, Offer } from "@/src/offers";
import Layout from "./../layout";
import USDAccountTypesMenu from "@/src/components/USDAccountTypesMenu";
import { presentAccountType } from "@/src/utils";
import OfferBox from "@/src/components/OfferBox";

interface IPageProps {
  offer: Offer;
}

export default function UsDollarIndividualOfferPage({ offer }: IPageProps) {
  return (
    <Layout>
      <Head>
        <title>{`🇺🇸 ${offer.account.institution.name} ${offer.account.name}`}</title>
        <meta
          name="description"
          content={`Learn about the ${offer.account.name} ${presentAccountType(
            offer,
          ).toLowerCase()} savings account from ${
            offer.account.institution.name
          }.`}
        />
      </Head>
      <div className="width-full bg-green-600 p-3">
        <h2 className="text-white font-bold text-3xl text-center py-3">
          {offer.account.institution.name} {offer.account.name}
        </h2>
      </div>
      <USDAccountTypesMenu />
      <div className="container p-6 mx-auto">
        <div className="container p-6 mx-auto">
          <OfferBox offer={offer} showLearnMoreLink={false} />
          <div style={{ height: "200px" }}>&nbsp;</div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const offers = getOffersByCurrency("USD");
  const paths = offers.map((offer) => ({ params: { offerSlug: offer.slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw "Params not found";
  }

  const offers = getOffersByCurrency("USD");
  const offer = offers.find((offer) => offer.slug === params.offerSlug);

  if (!offer) {
    throw "Offer not found";
  }

  return { props: { offer } };
};
