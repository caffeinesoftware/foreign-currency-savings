export interface DepositProtectionScheme {
  name: string;
  countryCode: string;
  countryName: string;
  countryEmoji: string;
  websiteUrl: string;
  coverageAmount: number;
  coverageCurrency: string;
}

const DEPOSIT_PROTECTION_SCHEMES: DepositProtectionScheme[] = [
  {
    name: 'Jersey Bank Depositors Compensation Scheme',
    countryCode: 'JE',
    countryName: 'Jersey',
    countryEmoji: '🇯🇪',
    websiteUrl: 'https://www.gov.je/Industry/Finance/DepositProtection/pages/overview.aspx',
    coverageAmount: 50000,
    coverageCurrency: 'GBP'
  },
  {
    name: 'Financial Services Compensation Scheme (FSCS)',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    countryEmoji: '🇬🇧',
    websiteUrl: 'https://www.fscs.org.uk/',
    coverageAmount: 85000,
    coverageCurrency: 'GBP'
  }
];

export const getDepositProtectionSchemeByCountryCode = (countryCode: string): DepositProtectionScheme | undefined => DEPOSIT_PROTECTION_SCHEMES.find((depositProtectionScheme) => depositProtectionScheme.countryCode === countryCode);