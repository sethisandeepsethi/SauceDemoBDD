# Sauce Demo BDD Automation Framework 🚀

## Overview
This framework provides automated end-to-end testing for the Sauce Demo application using Playwright, TypeScript, and Cucumber BDD.

## 🔧 Technology Stack
- **Playwright**: Modern web testing framework
- **TypeScript**: Type-safe JavaScript
- **Cucumber**: BDD test framework
- **Winston**: Logging utility
- **Multiple Cucumber HTML Reporter**: Test reporting

## 📂 Project Structure
````
.
├── config/
│   └── cucumber.js         # Cucumber configuration
├── pages/                  # Page Object Models
│   ├── BasePage.ts        # Base page with common methods
│   ├── HomePage.ts        # Login page actions
│   ├── ProductsPage.ts    # Products listing page
│   ├── CartPage.ts        # Shopping cart page
│   └── CheckoutPage.ts    # Checkout workflow pages
├── src/
│   ├── helper/
│   │   ├── browserManager.ts  # Browser initialization
│   │   ├── logger.ts         # Winston logger setup
│   │   ├── PageManager.ts    # Page object factory
│   │   └── env/             # Environment configurations
│   └── test/
│       ├── features/       # Cucumber feature files
│       ├── hooks/         # Test lifecycle hooks
│       └── steps/         # Step definitions
└── test-results/         # Test artifacts
    ├── logs/            # Test execution logs
    └── reports/         # HTML test reports
````

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation
````bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
````

### Running Tests
````bash
# Run all tests
npm test

# Rerun failed tests
npm run test:rerun
````

## 🎯 Key Features

### Page Object Model
````typescript
export class HomePage extends BasePage {
    async fillLoginForm(userName: string, password: string) {
        await this.fillFormField(this.userNameTextBox, userName);
        await this.fillFormField(this.passwordTextBox, password);
    }
}
````

### BDD Scenarios
````gherkin
Feature: Login Functionality
  Scenario: Valid Login
    Given I am on the login page
    When I enter valid credentials
    Then I should see the products page
````

### Logging
````typescript
export const options = (scenarioName: string) => ({
    transports: [
        new transports.File({
            filename: `test-results/logs/${scenarioName}.log`,
            level: 'info'
        })
    ]
})
````

## 📊 Test Reports

Reports are generated in HTML format after test execution:
- Location: reports
- Contains:
  - Test execution summary
  - Step-by-step results
  - Screenshots for failed tests
  - Environment details

## ⚙️ Configuration

### Environment Settings
````typescript
export default {
    browser: process.env.BROWSER || 'chrome',
    baseUrl: process.env.BASEURL || 'https://www.saucedemo.com',
    headless: process.env.HEADLESS === 'true'
}
````

### Playwright Settings
````typescript
export default defineConfig({
    timeout: 30000,
    use: {
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure'
    }
});
````

## 🔍 Test Flow
1. **Login**: Authenticate using credentials
2. **Product Selection**: Browse and add items
3. **Cart Management**: Review and update cart
4. **Checkout Process**: Complete purchase flow

## 📝 Contributing Guidelines
1. Follow TypeScript best practices
2. Maintain Page Object Model pattern
3. Add appropriate logging statements
4. Include BDD scenarios
5. Run tests before submitting changes

## 🐛 Debugging
- Use `await page.pause()` for debugging
- Screenshots in `test-results/screenshots`
- Logs in logs

## 📚 Additional Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Cucumber.js Documentation](https://github.com/cucumber/cucumber-js)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License
This project is licensed under the MIT License.

---
*For detailed API documentation, please refer to the inline documentation in the source code.*