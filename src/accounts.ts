import { getInstitutionBySlug, InstitutionWithDepositProtectionScheme } from "./institutions";

export interface Account {
  name: string;
  marketingInstitutionSlug: string;
  institutionSlug: string
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
  fixedTermLengthInDays: number | null
}

export interface AccountWithInstitutions extends Account {
  institution: InstitutionWithDepositProtectionScheme;
  marketingInstitution: InstitutionWithDepositProtectionScheme;
}

export enum AccountType {
  FIXED_TERM = 'fixed_term',
  INSTANT_ACCESS = 'instant_access',
};

const ACCOUNTS: Account[] = [
  {
    name: 'Saver Account',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [{
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 1.05,
      fixedTermLengthInDays: null
    }],
    notesText: null,
    url: 'https://www.expat.hsbc.com/savings-accounts/products/saver-account'
  },
  {
    name: 'Advance Quarterly Bonus Saver',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [{
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 2.67,
      fixedTermLengthInDays: null
    }],
    notesText: null,
    url: 'https://www.expat.hsbc.com/savings-accounts/products/quarterly-bonus-saver/'
  },
  {
    name: 'Premier Quarterly Bonus Saver',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [{
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 2.72,
      fixedTermLengthInDays: null
    }],
    notesText: null,
    url: 'https://www.expat.hsbc.com/savings-accounts/products/quarterly-bonus-saver/'
  },
  {
    name: 'Advance Online Bonus Saver',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [{
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 2.77,
      fixedTermLengthInDays: null
    }],
    notesText: null,
    url: 'https://www.expat.hsbc.com/savings-accounts/products/online-bonus-saver/'
  },
  {
    name: 'Premier Online Bonus Saver',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [{
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 2.82,
      fixedTermLengthInDays: null
    }],
    notesText: null,
    url: 'https://www.expat.hsbc.com/savings-accounts/products/online-bonus-saver/'
  },
  {
    name: 'Advance Fixed Term Deposit',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.FIXED_TERM,
    interestRates: [{
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 3.59,
      fixedTermLengthInDays: 30
    },
    {
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 4.42,
      fixedTermLengthInDays: 90
    },
    {
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 4.48,
      fixedTermLengthInDays: 180
    },
    {
      minimumDepositAmount: 5000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 4.68,
      fixedTermLengthInDays: 365
    },
    {
      minimumDepositAmount: 5000,
      maximumDepositAmount: 24999,
      grossAnnualRatePercentage: 3.59,
      fixedTermLengthInDays: 365
    }, {
      minimumDepositAmount: 25000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 3.64,
      fixedTermLengthInDays: 365
    }],
    notesText: null,
    url: 'https://www.expat.hsbc.com/savings-accounts/products/fixed-term-deposit/'
  },
  {
    name: 'Premier Fixed Term Deposit',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.FIXED_TERM,
    interestRates: [{
      minimumDepositAmount: 5000,
      maximumDepositAmount: 24999,
      grossAnnualRatePercentage: 3.59,
      fixedTermLengthInDays: 30
    },
    {
      minimumDepositAmount: 25000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 3.64,
      fixedTermLengthInDays: 30
    },
    {
      minimumDepositAmount: 5000,
      maximumDepositAmount: 24999,
      grossAnnualRatePercentage: 4.42,
      fixedTermLengthInDays: 90
    },
    {
      minimumDepositAmount: 25000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 4.47,
      fixedTermLengthInDays: 90
    },
    {
      minimumDepositAmount: 5000,
      maximumDepositAmount: 24999,
      grossAnnualRatePercentage: 4.48,
      fixedTermLengthInDays: 180
    },
    {
      minimumDepositAmount: 25000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 4.53,
      fixedTermLengthInDays: 180
    },
    {
      minimumDepositAmount: 5000,
      maximumDepositAmount: 24999,
      grossAnnualRatePercentage: 4.68,
      fixedTermLengthInDays: 365
    },
    {
      minimumDepositAmount: 25000,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 4.73,
      fixedTermLengthInDays: 365
    }],
    notesText: null,
    url: 'https://www.expat.hsbc.com/savings-accounts/products/fixed-term-deposit/'
  },
  {
    name: 'Easy Access USD Standard',
    institutionSlug: 'investec',
    marketingInstitutionSlug: 'revolut',
    currencyCode: 'USD',
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [{
      minimumDepositAmount: 1,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 1.49,
      fixedTermLengthInDays: null
    }],
    notesText: null,
    url: 'https://www.revolut.com/meet-your-financial-goals-with-vaults/'
  },
  {
    name: 'Interest',
    institutionSlug: 'wise',
    marketingInstitutionSlug: 'wise',
    currencyCode: 'USD',
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [{
      minimumDepositAmount: 1,
      maximumDepositAmount: null,
      grossAnnualRatePercentage: 4.81,
      fixedTermLengthInDays: null
    }],
    notesText: 'Money is kept in a fund holding government-backed short-term loans. For more information, see https://wise.com/help/articles/GDxZxemd21yDVP4TQmdDJ/using-wise-interest.',
    url: 'https://wise.com/gb/interest/'
  },
];

export const getAccounts = (): AccountWithInstitutions[] => {
  return ACCOUNTS.map((account) => {
    const institution = getInstitutionBySlug(account.institutionSlug);

    if (!institution) {
      throw `No institution found for slug ${account.institutionSlug}`;
    }

    const marketingInstitution = getInstitutionBySlug(account.marketingInstitutionSlug);

    if (!marketingInstitution) {
      throw `No institution found for slug ${account.marketingInstitutionSlug}`;
    }

    return {
      ...account,
      institution,
      marketingInstitution
    };
  });
};

export const getAccountsByCurrency = (currencyCode: string): AccountWithInstitutions[] => getAccounts().filter((account) => account.currencyCode === currencyCode);

export const getAccountsByAccountTypeAndCurrency = (accountType: AccountType, currencyCode: string): AccountWithInstitutions[] => getAccounts().filter((account) => account.accountType === accountType).filter((account) => account.currencyCode === currencyCode);