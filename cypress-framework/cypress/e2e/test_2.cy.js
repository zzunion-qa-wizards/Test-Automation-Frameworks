Given("the user is on the login page", () => {
    cy.visit("http://localhost:3000/auth/login?redirect=%2F");
  });
  
  When("the user leaves the username field empty", () => {
    cy.get("#username").clear();
  });
  
  When("enters a valid password", () => {
    cy.get("#password").type("yourValidPassword");
  });
  
  When("clicks the login button", () => {
    cy.get("#loginButton").click();
  });
  
  Then("an error message for the empty username should be displayed", () => {
    cy.get(".error-message-username").should("exist");
  });
  