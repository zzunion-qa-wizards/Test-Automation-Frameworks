import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is on the login page", () => {
  cy.visit("http://localhost:3000/auth/login?redirect=%2F");
});

When("the user leaves the username and password fields empty", () => {
  // Your code to leave the fields empty
  cy.get("#username").clear();
  cy.get("#password").clear();
});

When("the user clicks the login button", () => {
  cy.get("#loginButton").click();
});

Then("an error message should be displayed", () => {
  // Your code to verify the presence of an error message
  cy.get(".error-message").should("exist");
});
