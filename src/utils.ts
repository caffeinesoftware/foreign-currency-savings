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
}