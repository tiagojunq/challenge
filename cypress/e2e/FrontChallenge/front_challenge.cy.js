import { faker } from "@faker-js/faker";

describe("Front-end Automation Challenge Test Suite", () => {
  beforeEach(() => {
    cy.visitQADemo();
  });

  it("#1 - [Ppt_Pag04 / Forms] Fill the form and ensure that it has been completed", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}@accenture.com`;
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

  it("#2 - [Ppt_Pag05 / Alerts, Frame & Window] Checking the opening of a new window", () => {
    cy.clickAlertsWindows();
    cy.clickBrowserWindows();
    cy.enterWindow("#windowButton");
    cy.assertStringBySelector("#sampleHeading", "This is a sample page");
    cy.go("back");
    cy.assertStringBySelector(".text-center", "Browser Windows");
  });

  it("#3 - [Ppt_Pag06 / Elements] CRUD Elements in the web table", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}@accenture.com`;
    const age = faker.finance.accountNumber(2);
    const salary = 16000;
    const deparmentName = "QA";

    cy.clickElements();
    cy.clickWebTables();
    cy.clickaddNewRecordButton();

    cy.fillWebTableFormFirstName(firstName);
    cy.fillWebTableFormLastName(lastName);
    cy.fillWebTableFormEmail(email);
    cy.fillWebTableFormAge(age);
    cy.fillWebTableFormSalary(salary);
    cy.fillWebTableFormDepartment(deparmentName);
    cy.clickTableFormSubmit();
    cy.typeWebTableOnSearch(firstName);
    cy.deleteWebTableFoundRecord();
    cy.assertWebTableNoData();
  });
});
