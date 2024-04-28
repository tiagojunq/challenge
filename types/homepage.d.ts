declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom Cypress command to visit the QA Demo homepage.
     */
    visitQADemo(): Chainable<any>;

    /**
     * Custom Cypress command to click on the "Forms" link.
     */
    clickForms(): Chainable<any>;
  }
}
