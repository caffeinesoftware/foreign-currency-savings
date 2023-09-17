describe("Pages", () => {
  it("should render the index page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should render the list of USD accounts", () => {
    cy.visit("http://localhost:3000/us-dollar-usd-savings-accounts");
  });

  it("should render the list of instant access USD accounts", () => {
    cy.visit(
      "http://localhost:3000/us-dollar-usd-savings-accounts/instant-access",
    );
  });

  it("should render the list of notice USD accounts", () => {
    cy.visit("http://localhost:3000/us-dollar-usd-savings-accounts/notice");
  });

  it("should render the list of fixed rate USD accounts", () => {
    cy.visit("http://localhost:3000/us-dollar-usd-savings-accounts/fixed-rate");
  });

  it("should render a single bank account", () => {
    cy.visit(
      "http://localhost:3000/us-dollar-usd-savings-accounts/bank-of-china-uk-all-in-one-fixed-term-deposit-personal-account-1-year-fixed-term-from-3500-usd",
    );
  });
});
