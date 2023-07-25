import {
  AccountWithInstitutions,
  InterestRate,
  getAccountsByAccountTypeAndCurrency,
  getAccountsByCurrency,
  AccountType,
} from "./accounts";
import { presentTerm, slugify, sortBy } from "./utils";

export interface Offer {
  account: AccountWithInstitutions;
  interestRate: InterestRate;
  slug: string;
}

export const presentTermForSlug = (termInDays: number): string =>
  presentTerm(termInDays).toLowerCase().replace(/ /g, "-");

const generateOfferSlug = (
  account: AccountWithInstitutions,
  interestRate: InterestRate,
): string => {
  const maximumDepositSuffix = interestRate.maximumDepositAmount
    ? `-to-${
        interestRate.maximumDepositAmount
      }-${account.currencyCode.toLowerCase()}`
    : ``;

  switch (account.accountType) {
    case AccountType.INSTANT_ACCESS:
      return `${account.institution.slug}-${slugify(
        account.name,
      )}-instant-access-from-${
        interestRate.minimumDepositAmount
      }-${account.currencyCode.toLowerCase()}${maximumDepositSuffix}`;
    case AccountType.NOTICE:
      const noticePeriodInDays = interestRate.termInDays as number;
      return `${account.institution.slug}-${slugify(
        account.name,
      )}-${presentTermForSlug(noticePeriodInDays)}-notice-from-${
        interestRate.minimumDepositAmount
      }-${account.currencyCode.toLowerCase()}${maximumDepositSuffix}`;
    case AccountType.FIXED_TERM:
      const fixedTermInDays = interestRate.termInDays as number;
      return `${account.institution.slug}-${slugify(
        account.name,
      )}-${presentTermForSlug(fixedTermInDays)}-fixed-term-from-${
        interestRate.minimumDepositAmount
      }-${account.currencyCode.toLowerCase()}${maximumDepositSuffix}`;
  }
};

export const getOffersByCurrency = (currencyCode: string): Offer[] => {
  const accounts = getAccountsByCurrency(currencyCode);

  const offers = accounts.flatMap((account) => {
    return account.interestRates.map((interestRate) => {
      return {
        account,
        interestRate,
        slug: generateOfferSlug(account, interestRate),
      };
    });
  });

  return sortBy<Offer>(
    offers,
    (offer) => offer.interestRate.grossAnnualRatePercentage,
  ).reverse();
};

export const getOffersByAccountTypeAndCurrency = (
  accountType: AccountType,
  currencyCode: string,
): Offer[] => {
  const accounts = getAccountsByAccountTypeAndCurrency(
    accountType,
    currencyCode,
  );

  const offers = accounts.flatMap((account) => {
    return account.interestRates.map((interestRate) => {
      return {
        account,
        interestRate,
        slug: generateOfferSlug(account, interestRate),
      };
    });
  });

  return sortBy<Offer>(
    offers,
    (offer) => offer.interestRate.grossAnnualRatePercentage,
  ).reverse();
};
