// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createNewUser", (userName, password) => {
  cy.request({
    method: "POST",
    url: "/Account/v1/User",
    body: {
      userName: userName,
      password: password,
    },
  })
    .then((response) => {
      Cypress.env("userId", response.body.userID);
      return response;
    })
    .its("status")
    .should("eq", 201);
});

Cypress.Commands.add("apiToken", (userName, password) => {
  cy.request({
    method: "POST",
    url: "/Account/v1/GenerateToken",
    body: {
      userName: userName,
      password: password,
    },
  })
    .then((response) => {
      Cypress.env("token", response.body.token);
      return response;
    })
    .its("status")
    .should("eq", 200);
});
