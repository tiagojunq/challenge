declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom Cypress command to click the addNewRecord button.
     */
    clickaddNewRecordButton(): Chainable<any>;

    /**
     * Custom Cypress command to fill the first name field in a web table form.
     * @param {string} firstName The first name string to be filled in the form.
     */
    fillWebTableFormFirstName(firstName: String): Chainable<any>;

    /**
     * Custom Cypress command to fill the last name field in a web table form.
     * @param {string} lastName The last name string to be filled in the form.
     */
    fillWebTableFormLastName(lastName: String): Chainable<any>;

    /**
     * Custom Cypress command to fill the email field in a web table form.
     * @param {string} email The email string to be filled in the form.
     */
    fillWebTableFormEmail(email: String): Chainable<any>;

    /**
     * Custom Cypress command to fill the age field in a web table form.
     * @param {number} age The age number to be filled in the form.
     */
    fillWebTableFormAge(age: Number): Chainable<any>;

    /**
     * Custom Cypress command to fill the salary field in a web table form.
     * @param {number} salary The salary number to be filled in the form.
     */
    fillWebTableFormSalary(salary: Number): Chainable<any>;

    /**
     * Custom Cypress command to fill the department field in a web table form.
     * @param {string} departmentName The department name string to be filled in the form.
     */
    fillWebTableFormDepartment(departmentName: String): Chainable<any>;

    /**
     * Custom Cypress command to click the submit button in a web table form.
     */
    clickTableFormSubmit(): Chainable<any>;

    /**
     * Custom Cypress command to type into the search field in a web table.
     * @param {string} firstName The first name string to be typed into the search field.
     */
    typeWebTableOnSearch(firstName: String): Chainable<any>;

    /**
     * Custom Cypress command to delete the found record in a web table.
     */
    deleteWebTableFoundRecord(): Chainable<any>;

    /**
     * Custom Cypress command to assert that no data is present in a web table.
     */
    assertWebTableNoData(): Chainable<any>;
  }
}
