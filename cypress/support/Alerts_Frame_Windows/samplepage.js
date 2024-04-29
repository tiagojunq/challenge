Cypress.Commands.add("assertNewSamplePage", () => {
  cy.window().then((newWin) => {
    cy.wrap(newWin).as("newWindow");
  });

  cy.get("@newWindow").should("have.property", "location");
  //.and("include", "/sample");
  cy.get("@newWindow")
    .should("exist")
    .then(() => {
      cy.get("#sampleHeading").contains("This is a sample page");
    });
  cy.get("@newWindow").then((newWin) => {
    newWin.close();

    //       cy.window().then((win) => {
    //     win.switchTo.window()
    //     cy.spy(win, "open").as("page");
    //   });
    //   cy.get("@page").get("#sampleHeading").contains("This is a sample page");
  });

  // Cypress.Commands.add("closeWindow", () => {
  //   cy.get("#sampleHeading").invoke("close");

  //   //     cy.visit("/sample").then((win) => {
  //   //     cy.spy(win, "close").as("fecharJanela");
  //   //   });
  //   //   cy.get("@fecharJanela").then((spy) => {
  //   //     spy.invoke("close");
  //   //   });
});
