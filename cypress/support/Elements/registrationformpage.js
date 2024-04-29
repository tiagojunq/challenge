Cypress.Commands.add("fillWebTableFormFirstName", (string) => {
  cy.fillElementBySelector("#firstName", string);
});

Cypress.Commands.add("fillWebTableFormLastName", (string) => {
  cy.fillElementBySelector("#lastName", string);
});

Cypress.Commands.add("fillWebTableFormEmail", (string) => {
  cy.fillElementBySelector("#userEmail", string);
});

Cypress.Commands.add("fillWebTableFormAge", (string) => {
  cy.fillElementBySelector("#age", string);
});

Cypress.Commands.add("fillWebTableFormSalary", (string) => {
  cy.fillElementBySelector("#salary", string);
});

Cypress.Commands.add("fillWebTableFormDepartment", (string) => {
  cy.fillElementBySelector("#department", string);
});

Cypress.Commands.add("clickTableFormSubmit", () => {
  cy.clickElementBySelector("#submit");
});
