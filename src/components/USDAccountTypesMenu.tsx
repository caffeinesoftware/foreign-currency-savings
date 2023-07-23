import Link from "next/link";

const USDAccountTypesMenu = () => {
  return (
    <div className="width-full bg-green-500 md:columns-4 text-center text-white">
      <Link
        href="/usd-savings-accounts"
        className="p-3 hover:bg-green-700 border-b active:bg-green-700 block"
      >
        All
      </Link>
      <Link
        href="/usd-savings-accounts/instant-access"
        className="p-3 border-b hover:bg-green-700 active:bg-green-700 block"
      >
        Instant access
      </Link>
      <Link
        href="/usd-savings-accounts/notice"
        className="p-3 hover:bg-green-700 border-b active:bg-green-700 block"
      >
        Notice
      </Link>
      <Link
        href="/usd-savings-accounts/fixed-rate"
        className="p-3 hover:bg-green-700 border-b active:bg-green-700 block"
      >
        Fixed rate
      </Link>
    </div>
  );
};

export default USDAccountTypesMenu;
