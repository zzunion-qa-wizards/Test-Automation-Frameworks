Given("the user is on the login page", () => {
    cy.visit("http://localhost:3000/auth/login?redirect=%2F");
  });
  
  When("the user enters a valid username", () => {
    cy.get("#username").type("yourValidUsername");
  });
  
  When("leaves the password field empty", () => {
    cy.get("#password").clear();
  });
  
  When("clicks the login button", () => {
    cy.get("#loginButton").click();
  });
  
  Then("an error message for the empty password should be displayed", () => {
    cy.get(".error-message-password").should("exist");
  });
  