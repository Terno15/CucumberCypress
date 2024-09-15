import { defineStep, Given } from "cypress-cucumber-preprocessor/steps";

defineStep("I open example page", () => {
  cy.visit("https://www.example.com");
  cy.get('title').contains('Example Domain')
});

defineStep("I see page title", () => {
  cy.get('title').should('contain', 'Example Domain')
  cy.get('title').should('not.be.visible')
  cy.get("h1").should("be.visible")
  cy.get("h1").should("contain", "Example Domain");
});
defineStep("I see a paragraph", () => {
  cy.get('p').should('be.visible')
  cy.get('p').contains('This domain is for use in illustrative examples in documents.')
});

defineStep("I see page title {string}", (name) => {
  cy.get('title').should('contain', 'Example Domain')
  cy.get('title').should('not.be.visible')
  cy.get("h1").should("be.visible");
  cy.get("h1").should("contain", `${name}`);
});

