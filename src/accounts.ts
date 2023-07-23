import {
  getInstitutionBySlug,
  InstitutionWithDepositProtectionScheme,
} from "./institutions";

export interface Account {
  name: string;
  marketingInstitutionSlug: string;
  institutionSlug: string;
  currencyCode: string;
  accountType: AccountType;
  interestRates: InterestRate[];
  notesText: string | null;
  url: string;
}

export interface InterestRate {
  minimumDepositAmount: number;
  maximumDepositAmount: number | null;
  grossAnnualRatePercentage: number;
  termInDays: number | null;
}

export interface AccountWithInstitutions extends Account {
  institution: InstitutionWithDepositProtectionScheme;
  marketingInstitution: InstitutionWithDepositProtectionScheme;
}

export enum AccountType {
  FIXED_TERM = "fixed_term",
  INSTANT_ACCESS = "instant_access",
  NOTICE = "notice",
}

const ACCOUNTS: Account[] = [
  {
    name: "Saver Account",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 1.05,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/saver-account",
  },
  {
    name: "Advance Quarterly Bonus Saver",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2.67,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/quarterly-bonus-saver/",
  },
  {
    name: "Premier Quarterly Bonus Saver",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2.72,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/quarterly-bonus-saver/",
  },
  {
    name: "Advance Online Bonus Saver",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2.77,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/online-bonus-saver/",
  },
  {
    name: "Premier Online Bonus Saver",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2.82,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/online-bonus-saver/",
  },
  {
    name: "Advance Fixed Term Deposit",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.59,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.42,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.48,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.68,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 24999,
        grossAnnualRatePercentage: 3.59,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 25000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.64,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/fixed-term-deposit/",
  },
  {
    name: "Premier Fixed Term Deposit",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 24999,
        grossAnnualRatePercentage: 3.59,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 25000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.64,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 24999,
        grossAnnualRatePercentage: 4.42,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 25000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.47,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 24999,
        grossAnnualRatePercentage: 4.48,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 25000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.53,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 24999,
        grossAnnualRatePercentage: 4.68,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 25000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.73,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/fixed-term-deposit/",
  },
  {
    name: "Easy Access USD Standard",
    institutionSlug: "investec",
    marketingInstitutionSlug: "revolut",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 1.49,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.revolut.com/meet-your-financial-goals-with-vaults/",
  },
  {
    name: "Interest",
    institutionSlug: "wise",
    marketingInstitutionSlug: "wise",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.81,
        termInDays: null,
      },
    ],
    notesText:
      "Money is kept in a fund holding government-backed short-term loans. For more information, see https://wise.com/help/articles/GDxZxemd21yDVP4TQmdDJ/using-wise-interest.",
    url: "https://wise.com/gb/interest/",
  },
  {
    name: "USD Personal Access",
    institutionSlug: "skipton-international",
    marketingInstitutionSlug: "skipton-international",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.skiptoninternational.com/offshore-savings-accounts/us-dollar/access/",
  },
  {
    name: "USD Personal 40",
    institutionSlug: "skipton-international",
    marketingInstitutionSlug: "skipton-international",
    currencyCode: "USD",
    accountType: AccountType.NOTICE,
    interestRates: [
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4.25,
        termInDays: 40,
      },
    ],
    notesText: null,
    url: "https://www.skiptoninternational.com/offshore-savings-accounts/us-dollar/40day/",
  },
  {
    name: "USD Personal 120",
    institutionSlug: "skipton-international",
    marketingInstitutionSlug: "skipton-international",
    currencyCode: "USD",
    accountType: AccountType.NOTICE,
    interestRates: [
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4.5,
        termInDays: 120,
      },
    ],
    notesText: null,
    url: "https://www.skiptoninternational.com/offshore-savings-accounts/us-dollar/120day/",
  },
  {
    name: "90 Day Notice Account",
    institutionSlug: "moneycorp-bank",
    marketingInstitutionSlug: "moneycorp-bank",
    currencyCode: "USD",
    accountType: AccountType.NOTICE,
    interestRates: [
      {
        minimumDepositAmount: 100_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.6,
        termInDays: 90,
      },
    ],
    notesText: null,
    url: "https://www.moneycorpbank.com/saving-account/",
  },
  {
    name: "Notice Account",
    institutionSlug: "santander-international",
    marketingInstitutionSlug: "santander-international",
    currencyCode: "USD",
    accountType: AccountType.NOTICE,
    interestRates: [
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 74_999,
        grossAnnualRatePercentage: 0.1,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 75_000,
        maximumDepositAmount: 999_999,
        grossAnnualRatePercentage: 1.65,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 1_000_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 1.8,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 74_999,
        grossAnnualRatePercentage: 0.1,
        termInDays: 95,
      },
      {
        minimumDepositAmount: 75_000,
        maximumDepositAmount: 999_999,
        grossAnnualRatePercentage: 2,
        termInDays: 95,
      },
      {
        minimumDepositAmount: 1_000_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2.1,
        termInDays: 95,
      },
    ],
    notesText: null,
    url: "https://www.santanderinternational.co.uk/international/products/savings/notice-account/",
  },
];

export const getAccounts = (): AccountWithInstitutions[] => {
  return ACCOUNTS.map((account) => {
    const institution = getInstitutionBySlug(account.institutionSlug);

    if (!institution) {
      throw `No institution found for slug ${account.institutionSlug}`;
    }

    const marketingInstitution = getInstitutionBySlug(
      account.marketingInstitutionSlug,
    );

    if (!marketingInstitution) {
      throw `No institution found for slug ${account.marketingInstitutionSlug}`;
    }

    return {
      ...account,
      institution,
      marketingInstitution,
    };
  });
};

export const getAccountsByCurrency = (
  currencyCode: string,
): AccountWithInstitutions[] =>
  getAccounts().filter((account) => account.currencyCode === currencyCode);

export const getAccountsByAccountTypeAndCurrency = (
  accountType: AccountType,
  currencyCode: string,
): AccountWithInstitutions[] =>
  getAccounts()
    .filter((account) => account.accountType === accountType)
    .filter((account) => account.currencyCode === currencyCode);
