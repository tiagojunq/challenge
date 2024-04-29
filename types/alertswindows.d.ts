declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom Cypress command to click on the "Browser Windows" link.
     */
    clickBrowserWindows(): Chainable<any>;
  }
}
