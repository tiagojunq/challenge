// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "./Homepage/homepage";
import "./Forms/formspage";
import "./Forms/practiceformpage";
import "./Alerts_Frame_Windows/alertswindowspage";
import "./Alerts_Frame_Windows/samplepage";
import "./Elements/elementspage";
import "./Elements/webtablespage";
import "./Elements/registrationformpage";
import "@shelex/cypress-allure-plugin";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
