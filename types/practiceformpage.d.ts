declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom Cypress command to fill the first name input field.
     * @param {string} string The string to be typed into the first name input field.
     */
    fillFirstName(string: String): Chainable<any>;

    /**
     * Custom Cypress command to fill the last name input field.
     * @param {string} string The string to be typed into the last name input field.
     */
    fillLastName(string: String): Chainable<any>;

    /**
     * Custom Cypress command to fill the email input field.
     * @param {string} string The string to be typed into the email input field.
     */
    fillEmail(string: String): Chainable<any>;

    /**
     * Custom Cypress command to check the male gender radio button.
     */
    checkMaleGender(): Chainable<any>;

    /**
     * Custom Cypress command to fill the mobile number input field.
     * @param {string} string The string to be typed into the mobile number input field.
     */
    fillMobile(string: String): Chainable<any>;

    /**
     * Custom Cypress command to fill the subject input field.
     * @param {string} string The string to be typed into the subject input field.
     */
    fillSubject(string: String): Chainable<any>;

    /**
     * Custom Cypress command to check the sports hobby checkbox.
     */
    checkSports(): Chainable<any>;

    /**
     * Custom Cypress command to upload a picture.
     * @param {string} path The path to the file to be uploaded.
     */
    uploadPicture(path: String): Chainable<any>;

    /**
     * Custom Cypress command to fill the current address input field.
     * @param {string} string The string to be typed into the current address input field.
     */
    fillCurrentAddress(string: String): Chainable<any>;

    /**
     * Custom Cypress command to select a state from the dropdown.
     * @param {string} string The state to be selected from the dropdown.
     */
    selectState(string: String): Chainable<any>;

    /**
     * Custom Cypress command to select a city from the dropdown.
     * @param {string} string The city to be selected from the dropdown.
     */
    selectCity(string: String): Chainable<any>;

    /**
     * Custom Cypress command to click the submit button.
     */
    clickSubmit(): Chainable<any>;

    /**
     * Custom Cypress command to assert a modal title.
     * @param {string} selector The CSS selector of the modal title element.
     * @param {string} string The expected title string to be asserted.
     */
    assertModalTitle(selector: String, string: String): Chainable<any>;

    /**
     * Custom Cypress command to close a modal.
     */
    closeModal(): Chainable<any>;
  }
}
