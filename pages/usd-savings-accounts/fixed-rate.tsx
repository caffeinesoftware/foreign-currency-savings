import { GetStaticProps } from 'next'
import Link from 'next/link';
import Head from 'next/head';

import { getOffersByAccountTypeAndCurrency, Offer } from '@/src/offers';
import { AccountType } from '@/src/accounts';
import OfferBox from '@/src/components/OfferBox';
import Layout from './../layout';
import USDAccountTypesMenu from '@/src/components/USDAccountTypesMenu';

interface IPageProps {
  offers: Offer[];
}

export default function Currency({ offers }: IPageProps) {
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
      <div className="container p-6 mx-auto">
        {offers.map((offer) => (
          <OfferBox offer={offer} key={offer.account.name} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const offers = getOffersByAccountTypeAndCurrency(AccountType.FIXED_TERM, 'USD');
 
  return { props: { offers } }
}