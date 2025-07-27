import Image from "next/image";
import Link from "next/link";
import Linkify from "linkify-react";

import { Offer } from "../offers";
import infoIcon from "./../../public/info-icon.svg";
import { AccountType } from "../accounts";
import { presentAccountType, presentTerm } from "../utils";

const getAmountDescription = (offer: Offer): string => {
  if (
    !offer.interestRate.minimumDepositAmount &&
    !offer.interestRate.maximumDepositAmount
  ) {
    return "Any amount";
  } else if (
    offer.interestRate.minimumDepositAmount &&
    !offer.interestRate.maximumDepositAmount
  ) {
    return `From ${formatCurrency(
      offer.interestRate.minimumDepositAmount,
      offer.account.currencyCode,
    )}`;
  } else if (
    offer.interestRate.maximumDepositAmount &&
    !offer.interestRate.minimumDepositAmount
  ) {
    return `Up to ${formatCurrency(
      offer.interestRate.maximumDepositAmount,
      offer.account.currencyCode,
    )}`;
  } else {
    const maximumDepositAmount = offer.interestRate
      .maximumDepositAmount as number;
    return `From ${formatCurrency(
      offer.interestRate.minimumDepositAmount,
      offer.account.currencyCode,
    )} to ${formatCurrency(maximumDepositAmount, offer.account.currencyCode)}`;
  }
};

const formatCurrency = (amount: number, currencyCode: string): string => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};

const OfferBox = ({
  offer,
  showLearnMoreLink,
}: {
  offer: Offer;
  showLearnMoreLink: boolean;
}) => (
  <div className="min-w-full bg-white rounded py-4 px-3 my-5 shadow-sm">
    <div className="mb-3 p-3">
      <Link href={offer.account.url}>
        <Image
          src={offer.account.marketingInstitution.logoImage}
          width={100}
          height={50}
          className="inline-block"
          alt={offer.account.marketingInstitution.name + " logo"}
          title={offer.account.marketingInstitution.name}
          style={{ marginRight: "0.5em" }}
        />
        <h2 className="font-bold inline-block text-lg">
          {offer.account.marketingInstitution.name} {offer.account.name}
        </h2>
      </Link>
    </div>

    <div className="px-3">
      <div className="border-slate-500 rounded border">
        <div className="bg-green-600 text-white p-3 lg:border-r border-r-slate-800 lg:inline-block">
          <span>
            Interest Rate (AER)
            <br />
          </span>
          <span className="font-bold">
            {offer.interestRate.grossAnnualRatePercentage.toFixed(2)}%
          </span>
        </div>
        <div className="h-full lg:inline-block p-3 lg:border-r border-r-slate-800">
          <span>
            Type
            <br />
          </span>
          <span className="font-bold">{presentAccountType(offer)}</span>
        </div>
        <div className="lg:inline-block p-3 lg:border-r border-r-slate-800">
          <span>
            Amount
            <br />
          </span>
          <span className="font-bold">{getAmountDescription(offer)}</span>
        </div>
        <div className="lg:inline-block p-3">
          <span>
            Deposit Protection
            <br />
          </span>
          {offer.account.institution.includesDepositProtection && (
            <span className="font-bold">
              Up to{" "}
              {formatCurrency(
                offer.account.institution.depositProtectionScheme
                  .coverageAmount,
                offer.account.institution.depositProtectionScheme
                  .coverageCurrency,
              )}{" "}
              {offer.account.institution.depositProtectionScheme.countryEmoji}{" "}
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content={`Deposits with ${
                  offer.account.institution.legalEntityName
                } are protected up to ${formatCurrency(
                  offer.account.institution.depositProtectionScheme
                    .coverageAmount,
                  offer.account.institution.depositProtectionScheme
                    .coverageCurrency,
                )} per person by ${
                  offer.account.institution.depositProtectionScheme.name
                } ${
                  offer.account.institution.depositProtectionScheme.countryEmoji
                }`}
                data-tooltip-place="top"
              >
                <Image
                  src={infoIcon}
                  width="20"
                  height="20"
                  alt="Info"
                  className="inline"
                />
              </a>
            </span>
          )}
          {!offer.account.institution.includesDepositProtection && (
            <span className="font-bold">
              None ⚠️&#xFE0E;{" "}
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content={`Deposits with ${offer.account.institution.legalEntityName} are not protected by a deposit protection scheme`}
                data-tooltip-place="top"
              >
                <Image
                  src={infoIcon}
                  width="20"
                  height="20"
                  alt="Info"
                  className="inline"
                />
              </a>
            </span>
          )}
        </div>
      </div>

      {offer.account.institution.slug === "hsbc-expat" && (
        <div className="p-2 my-3 rounded border-purple-600 border-2">
          <span className="font-bold">Offer:</span> Open your first account with
          HSBC Expat and get a £250 signup bonus. For more details,{" "}
          <a href="mailto:me@timrogers.co.uk" className="underline">
            drop us an email
          </a>
          .
        </div>
      )}

      <div className="py-4 text-sm text-gray-500">
        <Linkify
          options={{ attributes: { className: "underline break-words" } }}
        >
          {offer.account.marketingInstitution.slug !==
            offer.account.institution.slug &&
            `Deposits held by ${offer.account.institution.legalEntityName} on behalf of ${offer.account.marketingInstitution.name}. `}
          {offer.account.institution.notesText} {offer.account.notesText}
        </Linkify>
      </div>

      <div className="my-3 py-2 inline-block float-left text-gray-500">
        Last updated{" "}
        {new Date(offer.account.updatedAt).toLocaleDateString("en-GB")}
      </div>

      {showLearnMoreLink && (
        <Link href={`/us-dollar-usd-savings-accounts/${offer.slug}`}>
          <div className="rounded bg-green-600 text-white p-2 my-3 inline-block float-right">
            Learn more
          </div>
        </Link>
      )}
      <div className="clear-both"></div>
    </div>
  </div>
);

export default OfferBox;
