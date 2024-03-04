const { I,loginPage } = inject();
// Add in your custom step files

Given('Im on the right page', () => {
    loginPage.visit()
});

When('I fill the form with my user and my password',()=>{
    loginPage.visit('ygalvan','Qwerty123')
})

Then('I fill the form with my email and my password',()=>{
    console.log("llegamos")
    loginPage.login('ygalvan','qwerty123')
})