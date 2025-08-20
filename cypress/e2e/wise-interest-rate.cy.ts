import { getAccounts } from '../src/accounts';

describe('Wise Interest Rate Update', () => {
  test('Wise USD interest rate should be 4.07%', () => {
    const accounts = getAccounts();
    const wiseAccount = accounts.find(account => 
      account.institutionSlug === 'wise' && 
      account.name === 'Interest' && 
      account.currencyCode === 'USD'
    );

    expect(wiseAccount).toBeDefined();
    expect(wiseAccount?.interestRates[0].grossAnnualRatePercentage).toBe(4.07);
  });
});