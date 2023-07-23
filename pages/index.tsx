import Link from 'next/link';

import Layout from './layout';
import Image from 'next/image';
import usaFlag from '../public/usa-flag.svg';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Foreign Currency Savings</title>
      </Head>
      <div className="width-full bg-green-600 p-3">
        <h2 className="text-white font-bold text-3xl text-center py-3">
          Discover foreign currency savings accounts available to UK residents 🇬🇧
        </h2>
      </div>
      <div className="width-full bg-white text-black p-3 py-5">
        <Image src={usaFlag} alt="USA flag" width={320} height={168} className="mx-auto" />
        <Link href="/usd-savings-accounts"><h3 className="text-2xl font-bold text-center py-3 underline">US Dollar savings accounts</h3></Link>
      </div>
    </Layout>
  );
}