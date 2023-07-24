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
  key: string;
}

export const getOffersByCurrency = (currencyCode: string): Offer[] => {
  const accounts = getAccountsByCurrency(currencyCode);

  const offers = accounts.flatMap((account) => {
    return account.interestRates.map((interestRate) => {
      const key = `${account.institution.slug}-${account.name}-${interestRate.minimumDepositAmount}-${interestRate.maximumDepositAmount}-${interestRate.termInDays}`;

      return {
        account,
        interestRate,
        key,
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
      const key = `${account.institution.slug}-${account.name}-${interestRate.minimumDepositAmount}-${interestRate.maximumDepositAmount}-${interestRate.termInDays}`;

      return {
        account,
        interestRate,
        key,
      };
    });
  });

  return sortBy<Offer>(
    offers,
    (offer) => offer.interestRate.grossAnnualRatePercentage,
  ).reverse();
};
