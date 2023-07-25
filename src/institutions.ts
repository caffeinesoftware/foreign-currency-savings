import {
  DepositProtectionScheme,
  getDepositProtectionSchemeByCountryCode,
} from "./deposit-protection-schemes";
import hsbcExpatLogo from "./../public/hsbc-expat.svg";
import revolutLogo from "./../public/revolut.svg";
import investecLogo from "./../public/investec.svg";
import wiseLogo from "./../public/wise.svg";
import skiptonInternationalLogo from "./../public/skipton-international.png";
import moneycorpBankLogo from "./../public/moneycorp-bank.svg";
import santanderInternationalLogo from "./../public/santander-international.svg";
import lloydsBankInternationalLogo from "./../public/lloyds-bank-international.png";
import beaLogo from "./../public/bea.gif";
import pnbLogo from "./../public/pnb.png";
import sbiLogo from "./../public/sbi.png";
import unionBankOfIndiaUkLogo from "./../public/union-bank-of-india-uk.png";
import ublUkLogo from "./../public/ubl-uk.png";
import bankOfChinaLogo from "./../public/bank-of-china.gif";

export interface Institution {
  name: string;
  websiteUrl: string;
  logoImage: any;
  slug: string;
  countryCode: string;
  legalEntityName: string;
  includesDepositProtection: boolean;
  notesText: string | null;
}

export interface InstitutionWithDepositProtectionScheme extends Institution {
  depositProtectionScheme: DepositProtectionScheme;
}

const INSTITUTIONS: Institution[] = [
  {
    name: "HSBC Expat",
    websiteUrl: "https://www.expat.hsbc.com/",
    logoImage: hsbcExpatLogo,
    slug: "hsbc-expat",
    countryCode: "JE",
    legalEntityName: "HSBC Bank plc, Jersey branch",
    includesDepositProtection: true,
    notesText:
      "Only available to HSBC Expat customers with an HSBC Expat Bank Account. To join HSBC Expat, you must either (a) save or invest at least £50,000 (or currency equivalent) with HSBC Expat, (b) have a salary of at least £100,000 (or currency equivalent) or (c) already be an HSBC Premier customer.",
  },
  {
    name: "Revolut",
    websiteUrl: "https://www.revolut.com/",
    logoImage: revolutLogo,
    slug: "revolut",
    countryCode: "GB",
    legalEntityName: "Revolut Ltd",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "Investec",
    websiteUrl: "https://www.investec.com/",
    logoImage: investecLogo,
    slug: "investec",
    countryCode: "GB",
    legalEntityName: "Investec Bank plc",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "Wise",
    websiteUrl: "https://wise.com/",
    logoImage: wiseLogo,
    slug: "wise",
    countryCode: "GB",
    legalEntityName: "Wise Payments Limited",
    includesDepositProtection: false,
    notesText: null,
  },
  {
    name: "Skipton International",
    websiteUrl: "https://www.skiptoninternational.com/",
    logoImage: skiptonInternationalLogo,
    slug: "skipton-international",
    countryCode: "GG",
    legalEntityName: "Skipton International Limited",
    includesDepositProtection: true,
    notesText:
      "Customers new to Skipton International must maintain a minimum overall balance across all accounts of at least $50,000.",
  },
  {
    name: "Moneycorp Bank",
    websiteUrl: "https://www.moneycorpbank.com/",
    logoImage: moneycorpBankLogo,
    slug: "moneycorp-bank",
    countryCode: "GG",
    legalEntityName: "Moneycorp Bank Limited",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "Santander International",
    websiteUrl: "https://www.santanderinternational.co.uk/",
    logoImage: santanderInternationalLogo,
    slug: "santander-international",
    countryCode: "JE",
    legalEntityName: "Santander Financial Services plc, Jersey Branch",
    includesDepositProtection: true,
    notesText:
      "Customers must maintain a minimum balance across all accounts of £75,000 (or currency equivalent).",
  },
  {
    name: "Lloyds Bank International",
    websiteUrl: "https://www.lloydsbank.com/international",
    logoImage: lloydsBankInternationalLogo,
    slug: "lloyds-bank-international",
    countryCode: "IM",
    legalEntityName: "Lloyds Bank Corporate Markets plc, Isle of Man Branch",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "BEA UK",
    websiteUrl: "https://www.hkbea.co.uk/html/en/index.html",
    logoImage: beaLogo,
    slug: "bea",
    countryCode: "GB",
    legalEntityName: "The Bank of East Asia Limited",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "Punjab National Bank International",
    websiteUrl: "https://pnbint.com",
    logoImage: pnbLogo,
    slug: "pnb",
    countryCode: "GB",
    legalEntityName: "Punjab National Bank (International) Limited",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "SBI UK",
    websiteUrl: "https://sbiuk.statebank",
    logoImage: sbiLogo,
    slug: "sbi-uk",
    countryCode: "GB",
    legalEntityName: "State Bank Of India (UK) Limited",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "Union Bank of India UK",
    websiteUrl: "https://unionbankofindiauk.co.uk",
    logoImage: unionBankOfIndiaUkLogo,
    slug: "union-bank-of-india-uk",
    countryCode: "GB",
    legalEntityName: "Union Bank Of India (UK) Limited",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "UBL UK",
    websiteUrl: "https://ubluk.com",
    logoImage: ublUkLogo,
    slug: "ubl-uk",
    countryCode: "GB",
    legalEntityName: "United National Bank Limited",
    includesDepositProtection: true,
    notesText: null,
  },
  {
    name: "Bank of China UK",
    websiteUrl: "https://bankofchina.com/uk",
    logoImage: bankOfChinaLogo,
    slug: "bank-of-china-uk",
    countryCode: "GB",
    legalEntityName: "Bank of China (UK) Limited",
    includesDepositProtection: true,
    notesText: null,
  },
];

const INSTITUTIONS_WITH_DEPOSIT_PROTECTION_SCHEMES: InstitutionWithDepositProtectionScheme[] =
  INSTITUTIONS.map((institution) => {
    const depositProtectionScheme = getDepositProtectionSchemeByCountryCode(
      institution.countryCode,
    );

    if (!depositProtectionScheme) {
      throw `No deposit protection scheme found for country code ${institution.countryCode}`;
    }

    return {
      ...institution,
      depositProtectionScheme,
    };
  });

export const getInstitutionBySlug = (
  slug: string,
): InstitutionWithDepositProtectionScheme | undefined => {
  return INSTITUTIONS_WITH_DEPOSIT_PROTECTION_SCHEMES.find(
    (institution) => institution.slug === slug,
  );
};
