Cypress.Commands.add("visitQADemo", () => {
  cy.visit("/");
});

Cypress.Commands.add("clickForms", () => {
  cy.clickElementByContains(".card-body", "Forms");
});

Cypress.Commands.add("clickAlertsWindows", () => {
  cy.clickElementByContains(".card-body", "Alerts, Frame & Windows");
});

Cypress.Commands.add("clickElements", () => {
  cy.clickElementByContains(".card-body", "Elements");
});

Cypress.Commands.add("clickInteractions", () => {
  cy.clickElementByContains(".card-body", "Interactions");
});
