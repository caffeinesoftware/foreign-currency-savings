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
