Cypress.Commands.add("clickaddNewRecordButton", () => {
  cy.clickElementBySelector("#addNewRecordButton");
});

Cypress.Commands.add("typeWebTableOnSearch", (firstName) => {
  cy.fillElementBySelector("#searchBox", firstName);
});

Cypress.Commands.add("deleteWebTableFoundRecord", () => {
  cy.clickElementBySelector("[title='Delete']");
});

Cypress.Commands.add("assertWebTableNoData", () => {
  cy.get(".rt-noData").should("contain.text", "No rows found");
});
