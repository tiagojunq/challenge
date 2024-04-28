declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom Cypress command to click on the "Practice Form" link.
     */
    clickPracticeForm(): Chainable<any>;
  }
}
