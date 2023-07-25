import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

const USDAccountTypesMenu = () => {
  const router = useRouter();

  const classesForLink = (pathname: string) => {
    return classnames({
      ["py-3"]: true,
      "hover:bg-green-700": true,
      "border-b": true,
      block: true,
      "bg-green-700": router.pathname === pathname,
    });
  };

  return (
    <div className="width-full bg-green-500 md:columns-4 text-center text-white gap-0">
      <Link
        href="/us-dollar-usd-savings-accounts"
        className={classesForLink("/us-dollar-usd-savings-accounts")}
      >
        All
      </Link>
      <Link
        href="/us-dollar-usd-savings-accounts/instant-access"
        className={classesForLink(
          "/us-dollar-usd-savings-accounts/instant-access",
        )}
      >
        Instant access
      </Link>
      <Link
        href="/us-dollar-usd-savings-accounts/notice"
        className={classesForLink("/us-dollar-usd-savings-accounts/notice")}
      >
        Notice
      </Link>
      <Link
        href="/us-dollar-usd-savings-accounts/fixed-rate"
        className={classesForLink("/us-dollar-usd-savings-accounts/fixed-rate")}
      >
        Fixed rate
      </Link>
    </div>
  );
};

export default USDAccountTypesMenu;
