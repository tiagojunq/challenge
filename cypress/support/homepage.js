Cypress.Commands.add("visitQADemo", () => {
  cy.visit("/");
});

Cypress.Commands.add("clickForms", () => {
  cy.clickElementByContains(".card-body", "Forms");
});
