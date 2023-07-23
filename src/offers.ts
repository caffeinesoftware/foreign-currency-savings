import { AccountWithInstitutions, InterestRate, getAccountsByAccountTypeAndCurrency, getAccountsByCurrency, AccountType } from "./accounts";

export interface Offer {
  account: AccountWithInstitutions;
  interestRate: InterestRate;
}

export const getOffersByCurrency = (currencyCode: string): Offer[] => {
  const accounts = getAccountsByCurrency(currencyCode);

  return accounts.flatMap(account => account.interestRates.map(interestRate => ({
    account,
    interestRate
  })));
};

export const getOffersByAccountTypeAndCurrency = (accountType: AccountType, currencyCode: string): Offer[] => {
  const accounts = getAccountsByAccountTypeAndCurrency(accountType, currencyCode);

  return accounts.flatMap(account => account.interestRates.map(interestRate => ({
    account,
    interestRate
  })));
};