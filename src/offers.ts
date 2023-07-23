import {
  AccountWithInstitutions,
  InterestRate,
  getAccountsByAccountTypeAndCurrency,
  getAccountsByCurrency,
  AccountType,
} from "./accounts";
import { sortBy } from "./utils";

export interface Offer {
  account: AccountWithInstitutions;
  interestRate: InterestRate;
}

export const getOffersByCurrency = (currencyCode: string): Offer[] => {
  const accounts = getAccountsByCurrency(currencyCode);

  const offers = accounts.flatMap((account) =>
    account.interestRates.map((interestRate) => ({
      account,
      interestRate,
    })),
  );

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

  const offers = accounts.flatMap((account) =>
    account.interestRates.map((interestRate) => ({
      account,
      interestRate,
    })),
  );

  return sortBy<Offer>(
    offers,
    (offer) => offer.interestRate.grossAnnualRatePercentage,
  ).reverse();
};
