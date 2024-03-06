const { I,loginPage } = inject();
// Add in your custom step files

Given('Im on the right page', () => {
    loginPage.visit()
});

When(/^I fill the form with my user: "([^"]*)" and my password: "([^"]*)"$/, (user, password) => {
    loginPage.login(user, password);
});

Then('I should see the dashboard page',()=>{
    loginPage.validateLogin()
})

When(/^I fill the form with my (.*) and my (.*)$/, (user, password) => {
    loginPage.login(user, password);
});