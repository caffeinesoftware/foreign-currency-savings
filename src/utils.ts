import { AccountType } from "./accounts";
import { Offer } from "./offers";

export const sortBy = <T>(arr: T[], callback: (item: T) => any): T[] => {
  return arr.sort((a, b) => {
    const aVal = callback(a);
    const bVal = callback(b);
    if (aVal < bVal) {
      return -1;
    }
    if (aVal > bVal) {
      return 1;
    }
    return 0;
  });
};

export const presentTerm = (termInDays: number): string => {
  if (termInDays % 365 === 0) {
    const fixedTermLengthInYears = termInDays / 365;

    if (fixedTermLengthInYears === 1) {
      return "1 year";
    } else {
      return `${fixedTermLengthInYears} years`;
    }
  } else {
    return `${termInDays} days`;
  }
};

export const dropBlankValues = (obj: {
  [key: string]: any;
}): { [key: string]: any } => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, v]) => v != null && v != undefined && v != "",
    ),
  );
};

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const presentAccountType = (offer: Offer): string => {
  switch (offer.account.accountType) {
    case AccountType.INSTANT_ACCESS:
      return "Instant access";
    case AccountType.FIXED_TERM:
      return (
        presentTerm(offer.interestRate.termInDays as number) + " fixed term"
      );
    case AccountType.NOTICE:
      return `${offer.interestRate.termInDays} days notice`;
    default:
      throw "Unrecognised account type";
  }
};
