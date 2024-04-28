import { faker } from "@faker-js/faker";

describe("Front-end Automation Challenge Test Suite", () => {
  beforeEach(() => {
    cy.visitQADemo();
  });

  it("Preencher o Formulário e Assegurar que o mesmo completou", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}@sharklasers.com`;
    const address = faker.location.streetAddress();

    cy.clickForms();
    cy.clickPracticeForm();
    cy.fillFirstName(firstName);
    cy.fillLastName(lastName);
    cy.fillEmail(email);
    cy.checkMaleGender();
    cy.fillMobile("1234567890");
    cy.fillSubject("Maths");
    cy.checkSports();
    cy.uploadPicture("cypress/fixtures/testfile.txt");
    cy.fillCurrentAddress(address);
    cy.selectState("NCR");
    cy.selectCity("Delhi");
    cy.clickSubmit();

    cy.assertModalTitle(
      "#example-modal-sizes-title-lg",
      "Thanks for submitting the form"
    );

    cy.closeModal();
  });
});
