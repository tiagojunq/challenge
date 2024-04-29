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

    /**
     * Custom Cypress command to click on the "Alerts, Frame & Windows" link.
     */
    clickAlertsWindows(): Chainable<any>;
  }

  interface Chainable<Subject> {
    /**
     * Custom Cypress command to click on the "Elements" link.
     */
    clickElements(): Chainable<any>;
  }
}
