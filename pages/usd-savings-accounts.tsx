import { GetStaticProps } from 'next'
import Link from 'next/link';
import Head from 'next/head';

import { getOffersByCurrency, Offer } from '@/src/offers';
import OfferBox from '@/src/components/OfferBox';
import Layout from './layout';

interface IPageProps {
  offers: Offer[];
}

export default function Currency({ offers }: IPageProps) {
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
      <div className="width-full bg-green-500 columns-3 text-center text-white">
        <Link href="/usd-savings-accounts" className="p-3 hover:bg-green-600 active:bg-green-700 block">All</Link>
        <Link href="/usd-savings-accounts/instant-access" className="p-3 hover:bg-green-600 active:bg-green-700 block">Instant access</Link>
        <Link href="/usd-savings-accounts/fixed-rate" className="p-3 hover:bg-green-600 active:bg-green-700 block">Fixed rate</Link>
      </div>
      <div className="container p-6 mx-auto">
        {offers.map((offer) => (
          <OfferBox offer={offer} key={offer.account.name} />
        ))}
      </div>
      <div style={{ height: '200px' }}>&nbsp;</div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const offers = getOffersByCurrency('USD');
 
  return { props: { offers } }
}