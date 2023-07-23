import { DepositProtectionScheme, getDepositProtectionSchemeByCountryCode } from './deposit-protection-schemes';
import hsbcExpatLogo from './../public/hsbc-expat.svg';
import revolutLogo from './../public/revolut.svg';
import investecLogo from './../public/investec.svg';
import wiseLogo from './../public/wise.svg';

export interface Institution {
  name: string;
  websiteUrl: string;
  logoImage: any;
  slug: string;
  countryCode: string;
  legalEntityName: string;
  includesDepositProtection: boolean;
  notesText: string | null;
};

export interface InstitutionWithDepositProtectionScheme extends Institution {
  depositProtectionScheme: DepositProtectionScheme;
};

const INSTITUTIONS: Institution[] = [
  {
    name: 'HSBC Expat',
    websiteUrl: 'https://www.expat.hsbc.com/',
    logoImage: hsbcExpatLogo,
    slug: 'hsbc-expat',
    countryCode: 'JE',
    legalEntityName: 'HSBC Bank plc, Jersey branch',
    includesDepositProtection: true,
    notesText: 'Only available to HSBC Expat customers with an HSBC Expat Bank Account. To join HSBC Expat, you must either (a) save or invest at least £50,000 (or currency equivalent) with HSBC Expat, (b) have a salary of at least £100,000 (or currency equivalent) or (c) already be an HSBC Premier customer.'
  },
  {
    name: 'Revolut',
    websiteUrl: 'https://www.revolut.com/',
    logoImage: revolutLogo,
    slug: 'revolut',
    countryCode: 'GB',
    legalEntityName: 'Revolut Ltd',
    includesDepositProtection: true,
    notesText: null
  },
  {
    name: 'Investec',
    websiteUrl: 'https://www.investec.com/',
    logoImage: investecLogo,
    slug: 'investec',
    countryCode: 'GB',
    legalEntityName: 'Investec Bank plc',
    includesDepositProtection: true,
    notesText: null
  },
  {
    name: 'Wise',
    websiteUrl: 'https://wise.com/',
    logoImage: wiseLogo,
    slug: 'wise',
    countryCode: 'GB',
    legalEntityName: 'Wise Payments Limited',
    includesDepositProtection: false,
    notesText: null
  }
];

const INSTITUTIONS_WITH_DEPOSIT_PROTECTION_SCHEMES: InstitutionWithDepositProtectionScheme[] = INSTITUTIONS.map((institution) => {
  const depositProtectionScheme = getDepositProtectionSchemeByCountryCode(institution.countryCode)

  if (!depositProtectionScheme) {
    throw `No deposit protection scheme found for country code ${institution.countryCode}`;
  }

  return {
    ...institution,
    depositProtectionScheme
  };
});

export const getInstitutionBySlug = (slug: string): InstitutionWithDepositProtectionScheme | undefined => {
  return INSTITUTIONS_WITH_DEPOSIT_PROTECTION_SCHEMES.find((institution) => institution.slug === slug);
};