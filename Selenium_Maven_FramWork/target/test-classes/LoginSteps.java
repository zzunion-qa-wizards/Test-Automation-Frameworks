import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import io.cucumber.java.en.*;
import static org.junit.Assert.*;

public class LoginSteps {
    private WebDriver driver;

    @Given("the user is on the login page")
    public void user_is_on_login_page() {
        // Code to open the login page (http://localhost:3000/auth/login?redirect=%2F)
    }

    @When("the user enters a valid username and password")
    public void user_enters_valid_credentials() {
        WebElement usernameField = driver.findElement(By.id("username"));
        WebElement passwordField = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.id("loginButton"));

        usernameField.sendKeys("valid_username");
        passwordField.sendKeys("valid_password");
        loginButton.click();
    }

    @Then("the user should be logged in successfully")
    public void user_logged_in_successfully() {
        // Code to verify successful login
        assertTrue(driver.getCurrentUrl().equals("expected_url_after_login"));
    }

    @When("the user enters an invalid username or password")
    public void user_enters_invalid_credentials() {
        WebElement usernameField = driver.findElement(By.id("username"));
        WebElement passwordField = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.id("loginButton"));

        usernameField.sendKeys("invalid_username");
        passwordField.sendKeys("invalid_password");
        loginButton.click();
    }

    @Then("an error message should be displayed")
    public void error_message_displayed() {
        // Code to verify the presence of an error message element
        assertNotNull(driver.findElement(By.id("errorMessage")));
    }
}
