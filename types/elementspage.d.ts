declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom Cypress command to click on the "Web Tables" link.
     */
    clickWebTables(): Chainable<any>;
  }
}
