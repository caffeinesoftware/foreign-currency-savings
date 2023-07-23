import { getInstitutionBySlug, InstitutionWithDepositProtectionScheme } from "./institutions";

export interface Account {
  name: string;
  marketingInstitutionSlug: string;
  institutionSlug: string
  currencyCode: string;
  accountType: AccountType;
  interestRates: InterestRate[];
  notesText: string | null;
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
    name: 'Fixed Term Deposit Account',
    institutionSlug: 'hsbc-expat',
    marketingInstitutionSlug: 'hsbc-expat',
    currencyCode: 'USD',
    accountType: AccountType.FIXED_TERM,
    interestRates: [{
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
    notesText: 'Only available to HSBC Expat customers with an HSBC Expat Bank Account. To join HSBC Expat, you must either (a) save or invest at least £50,000 (or currency equivalent) with HSBC Expat, (b) have a salary of at least £100,000 (or currency equivalent) or (c) already be an HSBC Premier customer.'
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
    notesText: null
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
    notesText: null
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