declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom Cypress command to create a new user in the DB under test.
     * @param {string} userName The username string to be added in the payload.
     * @param {string} password The user password string to be added in the payload.
     * @returns {Chainable<any>} Yields the response of the POST request.
     */
    createNewUser(userName: String, password: String): Chainable<any>;

    /**
     * Custom Cypress command to generate an API token.
     * @param {string} userName The username string to be added in the payload.
     * @param {string} password The user password string to be added in the payload.
     * @returns {Chainable<any>} Yields the response of the POST request.
     */
    apiToken(userName: String, password: String): Chainable<any>;

    /**
     * Custom Cypress command to click on an element by selector
     * @param {string} selector The CSS selector of the element containing the text.
     */
    clickElementBySelector(selector: String);

    /**
     * Custom Cypress command to click on an element containing specific text.
     * @param {string} selector The CSS selector of the element containing the text.
     * @param {string} string The text to be contained in the element.
     */
    clickElementByContains(selector: String, string: String);

    /**
     * Custom Cypress command to fill an input element by its selector.
     * @param {string} selector The CSS selector of the input element.
     * @param {string} string The string to be typed into the input element.
     */
    fillElementBySelector(selector: String, string: String);

    /**
     * Custom Cypress command to check a checkbox element by its selector.
     * @param {string} selector The CSS selector of the checkbox element.
     */
    checkElementBySelector(selector: String);

    /**
     * Custom Cypress command to upload a file by selector.
     * @param {string} selector The CSS selector of the file input element.
     * @param {string} path The path to the file to be uploaded.
     */
    uploadFileBySelector(selector: String, path: String): Chainable<any>;

    /**
     * Custom Cypress command to assert a string by selector.
     * @param {string} selector The CSS selector of the element to assert the text.
     * @param {string} string The expected string to be asserted.
     */
    assertStringBySelector(selector: String, string: String): Chainable<any>;
  }
}
