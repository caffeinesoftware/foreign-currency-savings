import Link from "next/link";

import Layout from "./layout";
import Image from "next/image";
import usaFlag from "../public/usa-flag.svg";
import Head from "next/head";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Foreign Currency Savings</title>
      </Head>
      <div className="width-full bg-green-600 p-3 text-white">
        <h2 className="font-bold text-3xl text-center py-3">
          Compare foreign currency savings accounts for UK residents 🇬🇧
        </h2>

        <p className="text-white md:text-center">
          We compare the best foreign currency savings accounts available to UK
          residents, including US Dollar (USD) and Euro (EUR) accounts.
        </p>
      </div>
      <div className="width-full bg-white text-black p-3 py-5 mb-10">
        <Link href="/usd-savings-accounts">
          <Image
            src={usaFlag}
            alt="USA flag"
            width={320}
            height={168}
            className="mx-auto"
          />
          <h3 className="text-2xl font-bold text-center py-3 underline">
            US Dollar savings accounts
          </h3>
        </Link>
      </div>
    </Layout>
  );
}
