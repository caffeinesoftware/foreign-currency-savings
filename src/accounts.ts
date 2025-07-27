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
  updatedAt: string;
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
        grossAnnualRatePercentage: 0.9,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/saver-account",
    updatedAt: "2025-07-27",
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
        grossAnnualRatePercentage: 3.38,
        termInDays: null,
      },
    ],
    notesText:
      "Standard rate 0.95%, up to 3.38% with bonus. Earn bonus interest every 3 months when you don't make a withdrawal.",
    url: "https://www.expat.hsbc.com/savings-accounts/products/quarterly-bonus-saver/",
    updatedAt: "2025-07-27",
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
        grossAnnualRatePercentage: 3.38,
        termInDays: null,
      },
    ],
    notesText:
      "Standard rate 0.95%, up to 3.38% with bonus. Earn bonus interest every 3 months when you don't make a withdrawal. Premier customers qualify for preferential rates.",
    url: "https://www.expat.hsbc.com/savings-accounts/products/quarterly-bonus-saver/",
    updatedAt: "2025-07-27",
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
        grossAnnualRatePercentage: 2.48,
        termInDays: null,
      },
    ],
    notesText:
      "Standard rate 0.85%, up to 2.48% with bonus. Earn bonus interest for any calendar month where you don't make a withdrawal.",
    url: "https://www.expat.hsbc.com/savings-accounts/products/online-bonus-saver/",
    updatedAt: "2025-07-27",
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
        grossAnnualRatePercentage: 2.48,
        termInDays: null,
      },
    ],
    notesText:
      "Standard rate 0.85%, up to 2.48% with bonus. Earn bonus interest for any calendar month where you don't make a withdrawal.",
    url: "https://www.expat.hsbc.com/savings-accounts/products/online-bonus-saver/",
    updatedAt: "2025-07-27",
  },
  {
    name: "Savings Booster",
    institutionSlug: "hsbc-expat",
    marketingInstitutionSlug: "hsbc-expat",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 25000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.3,
        termInDays: 183,
      },
    ],
    notesText:
      "Limited time offer available until 31 July 2025. 6-month fixed term. Deposits must be new money from a non-HSBC Expat account.",
    url: "https://www.expat.hsbc.com/savings-accounts/products/booster/",
    updatedAt: "2025-07-27",
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
        grossAnnualRatePercentage: 3.03,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.52,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.81,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.63,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/fixed-term-deposit/",
    updatedAt: "2025-07-27",
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
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 2.78,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 50000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.03,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 3.27,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.52,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 3.56,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.81,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 5000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 3.38,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.63,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.expat.hsbc.com/savings-accounts/products/fixed-term-deposit/",
    updatedAt: "2025-07-27",
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
    updatedAt: "2024-01-01",
  },
  {
    name: "Easy Access USD Plus",
    institutionSlug: "investec",
    marketingInstitutionSlug: "revolut",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 1.74,
        termInDays: null,
      },
    ],
    notesText:
      "Only available to Revolut Plus plan subscribers. Revolut Plus costs £2.99 per month.",
    url: "https://www.revolut.com/meet-your-financial-goals-with-vaults/",
    updatedAt: "2024-01-01",
  },
  {
    name: "Easy Access USD Premium",
    institutionSlug: "investec",
    marketingInstitutionSlug: "revolut",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2.74,
        termInDays: null,
      },
    ],
    notesText:
      "Only available to Revolut Premium plan subscribers. Revolut Premium costs £6.99 per month.",
    url: "https://www.revolut.com/meet-your-financial-goals-with-vaults/",
    updatedAt: "2024-01-01",
  },
  {
    name: "Easy Access USD Metal",
    institutionSlug: "investec",
    marketingInstitutionSlug: "revolut",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.54,
        termInDays: null,
      },
    ],
    notesText:
      "Only available to Revolut Metal plan subscribers. Revolut Metal costs £12.99 per month.",
    url: "https://www.revolut.com/meet-your-financial-goals-with-vaults/",
    updatedAt: "2024-01-01",
  },
  {
    name: "Easy Access USD Ultra",
    institutionSlug: "investec",
    marketingInstitutionSlug: "revolut",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.54,
        termInDays: null,
      },
    ],
    notesText:
      "Only available to Revolut Ultra plan subscribers. Revolut Metal costs £55 per month.",
    url: "https://www.revolut.com/meet-your-financial-goals-with-vaults/",
    updatedAt: "2024-01-01",
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
        grossAnnualRatePercentage: 4.99,
        termInDays: null,
      },
    ],
    notesText:
      "Money is kept in a fund holding government-backed short-term loans. For more information, see https://wise.com/help/articles/GDxZxemd21yDVP4TQmdDJ/using-wise-interest.",
    url: "https://wise.com/gb/interest/",
    updatedAt: "2024-01-01",
  },
  {
    name: "USD Personal Access",
    institutionSlug: "skipton-international",
    marketingInstitutionSlug: "skipton-international",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 3.75,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.skiptoninternational.com/offshore-savings-accounts/us-dollar/access/",
    updatedAt: "2025-07-27",
  },
  {
    name: "USD Personal 40",
    institutionSlug: "skipton-international",
    marketingInstitutionSlug: "skipton-international",
    currencyCode: "USD",
    accountType: AccountType.NOTICE,
    interestRates: [
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4.0,
        termInDays: 40,
      },
    ],
    notesText: null,
    url: "https://www.skiptoninternational.com/offshore-savings-accounts/us-dollar/40day/",
    updatedAt: "2025-07-27",
  },
  {
    name: "USD Personal 120",
    institutionSlug: "skipton-international",
    marketingInstitutionSlug: "skipton-international",
    currencyCode: "USD",
    accountType: AccountType.NOTICE,
    interestRates: [
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4.25,
        termInDays: 120,
      },
    ],
    notesText: null,
    url: "https://www.skiptoninternational.com/offshore-savings-accounts/us-dollar/120day/",
    updatedAt: "2025-07-27",
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
        grossAnnualRatePercentage: 4.4,
        termInDays: 90,
      },
    ],
    notesText: null,
    url: "https://www.moneycorpbank.com/saving-account/",
    updatedAt: "2025-07-27",
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
        grossAnnualRatePercentage: 1.76,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 74_999,
        grossAnnualRatePercentage: 0.15,
        termInDays: 95,
      },
      {
        minimumDepositAmount: 75_000,
        maximumDepositAmount: 999_999,
        grossAnnualRatePercentage: 2.63,
        termInDays: 95,
      },
    ],
    notesText: null,
    url: "https://www.santanderinternational.co.uk/international/products/savings/notice-account/",
    updatedAt: "2024-01-01",
  },
  {
    name: "Fixed Deposit Contract",
    institutionSlug: "santander-international",
    marketingInstitutionSlug: "santander-international",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 74_999,
        grossAnnualRatePercentage: 0.25,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 75_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2.5,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 74_999,
        grossAnnualRatePercentage: 0.25,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 75_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.5,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.75,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.35,
        termInDays: 730,
      },
    ],
    notesText: null,
    url: "https://www.santanderinternational.co.uk/international/products/savings/fixed-deposit-contract/",
    updatedAt: "2024-01-01",
  },
  {
    name: "Fixed Term Deposit",
    institutionSlug: "lloyds-bank-international",
    marketingInstitutionSlug: "lloyds-bank-international",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 0.65,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: 249_999,
        grossAnnualRatePercentage: 0.9,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 250_000,
        maximumDepositAmount: 499_999,
        grossAnnualRatePercentage: 1.15,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 500_000,
        maximumDepositAmount: 999_999,
        grossAnnualRatePercentage: 1.25,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 1_000_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 1.5,
        termInDays: 31,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 0.75,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: 249_999,
        grossAnnualRatePercentage: 2.65,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 250_000,
        maximumDepositAmount: 499_999,
        grossAnnualRatePercentage: 3.1,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 500_000,
        maximumDepositAmount: 999_999,
        grossAnnualRatePercentage: 3.2,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 1_000_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 3.4,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 2.65,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.5,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 3.6,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.75,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.lloydsbank.com/international/products-and-services/saving-accounts/fixed-term-deposits.html#dollar",
    updatedAt: "2024-01-01",
  },
  {
    name: "International Instant Saver Account",
    institutionSlug: "lloyds-bank-international",
    marketingInstitutionSlug: "lloyds-bank-international",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 24_999,
        grossAnnualRatePercentage: 2.53,
        termInDays: null,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 49_999,
        grossAnnualRatePercentage: 3.56,
        termInDays: null,
      },
      {
        minimumDepositAmount: 50_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.59,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.lloydsbank.com/international/products-and-services/saving-accounts/international-instant-saver-account.html",
    updatedAt: "2024-01-01",
  },
  {
    name: "Savings Account",
    institutionSlug: "bea",
    marketingInstitutionSlug: "bea",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 10,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.hkbea.co.uk/html/en/beauk-personal-banking-savings-account.html",
    updatedAt: "2024-01-01",
  },
  {
    name: "Call Deposit Account",
    institutionSlug: "bea",
    marketingInstitutionSlug: "bea",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 10,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 2,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.hkbea.co.uk/html/en/beauk-personal-banking-call-deposit-account.html",
    updatedAt: "2024-01-01",
  },
  {
    name: "Fixed Term Deposit Account",
    institutionSlug: "bea",
    marketingInstitutionSlug: "bea",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.1,
        termInDays: 60,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.2,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.3,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 4.3,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.hkbea.co.uk/html/en/beauk-rates-usd-fixed-deposit-rates.html",
    updatedAt: "2024-01-01",
  },
  {
    name: "Fixed Deposit Account",
    institutionSlug: "pnb",
    marketingInstitutionSlug: "pnb",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 3,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 4,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 5,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 5,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 4,
        termInDays: 730,
      },
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 3.75,
        termInDays: 1_095,
      },
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 3.75,
        termInDays: 1_460,
      },
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: 1_500_000,
        grossAnnualRatePercentage: 3.75,
        termInDays: 1_825,
      },
    ],
    notesText: null,
    url: "https://www.pnbint.com/PNBIL/FixedDeposit/Fixed-Deposit#",
    updatedAt: "2024-01-01",
  },
  {
    name: "Fixed Deposit",
    institutionSlug: "sbi-uk",
    marketingInstitutionSlug: "sbi-uk",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 0.1,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 0.1,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 3.1,
        termInDays: 180,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4.1,
        termInDays: 730,
      },
      {
        minimumDepositAmount: 10_000,
        maximumDepositAmount: 5_000_000,
        grossAnnualRatePercentage: 4.1,
        termInDays: 1_095,
      },
    ],
    notesText: null,
    url: "https://sbiuk.statebank/fixed-deposits",
    updatedAt: "2024-01-01",
  },
  {
    name: "Fixed Deposit",
    institutionSlug: "union-bank-of-india-uk",
    marketingInstitutionSlug: "union-bank-of-india-uk",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 5.25,
        termInDays: 365,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 5.25,
        termInDays: 730,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 4.75,
        termInDays: 1_095,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 4.75,
        termInDays: 1_460,
      },
      {
        minimumDepositAmount: 5_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 4.75,
        termInDays: 1_825,
      },
    ],
    notesText: null,
    url: "https://www.unionbankofindiauk.co.uk/personal-banking/term-deposits",
    updatedAt: "2024-01-01",
  },
  {
    name: "Savings Account",
    institutionSlug: "union-bank-of-india-uk",
    marketingInstitutionSlug: "union-bank-of-india-uk",
    currencyCode: "USD",
    accountType: AccountType.INSTANT_ACCESS,
    interestRates: [
      {
        minimumDepositAmount: 1,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 1,
        termInDays: null,
      },
    ],
    notesText: null,
    url: "https://www.unionbankofindiauk.co.uk/personal-banking/term-deposits",
    updatedAt: "2024-01-01",
  },
  {
    name: "Fixed Term Deposit",
    institutionSlug: "ubl-uk",
    marketingInstitutionSlug: "ubl-uk",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 0.75,
        termInDays: 30,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 1,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 1.5,
        termInDays: 90,
      },
      {
        minimumDepositAmount: 25_000,
        maximumDepositAmount: 1_000_000,
        grossAnnualRatePercentage: 2,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.ubluk.com/personal-banking/products-and-services/personal-savings-accounts/fixed-term-deposits/",
    updatedAt: "2024-01-01",
  },
  {
    name: "All-in-One Fixed Term Deposit Personal Account",
    institutionSlug: "bank-of-china-uk",
    marketingInstitutionSlug: "bank-of-china-uk",
    currencyCode: "USD",
    accountType: AccountType.FIXED_TERM,
    interestRates: [
      // Other terms are available, but I'm ignoring these as the rates are terrible
      {
        minimumDepositAmount: 3_500,
        maximumDepositAmount: null,
        grossAnnualRatePercentage: 5.4,
        termInDays: 365,
      },
    ],
    notesText: null,
    url: "https://www.bankofchina.com/uk/pbservice/pb1/201410/t20141026_4052976.html",
    updatedAt: "2024-01-01",
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
