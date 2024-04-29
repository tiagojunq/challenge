Cypress.Commands.add("fillFirstName", (string) => {
  cy.fillElementBySelector("#firstName", string);
});

Cypress.Commands.add("fillLastName", (string) => {
  cy.fillElementBySelector("#lastName", string);
});

Cypress.Commands.add("fillEmail", (string) => {
  cy.fillElementBySelector("#userEmail", string);
});

Cypress.Commands.add("checkMaleGender", () => {
  cy.checkElementBySelector("#gender-radio-1");
});

Cypress.Commands.add("fillMobile", (string) => {
  cy.fillElementBySelector("#userNumber", string);
});

Cypress.Commands.add("fillSubject", (string) => {
  cy.fillElementBySelector("#subjectsContainer", string);
});

Cypress.Commands.add("checkSports", () => {
  cy.checkElementBySelector("#hobbies-checkbox-1");
});

Cypress.Commands.add("uploadPicture", (path) => {
  cy.uploadFileBySelector("#uploadPicture", path);
});

Cypress.Commands.add("fillCurrentAddress", (string) => {
  cy.fillElementBySelector("#currentAddress", string);
});

Cypress.Commands.add("selectState", (string) => {
  cy.fillElementBySelector("#state", string);
  cy.clickElementBySelector("#react-select-3-option-0");
});

Cypress.Commands.add("selectCity", (string) => {
  cy.fillElementBySelector("#city", string);
  cy.clickElementBySelector("#react-select-4-option-0");
});

Cypress.Commands.add("clickSubmit", () => {
  cy.clickElementBySelector("#submit");
});

Cypress.Commands.add("assertModalTitle", (selector, string) => {
  cy.assertStringBySelector(selector, string);
});

Cypress.Commands.add("closeModal", () => {
  cy.clickElementBySelector("#closeLargeModal");
});
