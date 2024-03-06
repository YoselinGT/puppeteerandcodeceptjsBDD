const {I} = inject()

class LoginPage {

    constructor() {

        this.titleLoginPage = '#titleMainPage';
        this.inputUser = '#username'
        this.inputPassword = '#password'
        this.submitButton = '#frm > button'
        this.titleMainPage = '#wrapper > div.normalheader > div > div > h2'
    }

    visit() {
        I.amOnPage("index.php");
        I.waitForElement(this.titleLoginPage);
        I.seeInCurrentUrl('index')
    }

    login(usuario, password) {
        console.log("usuario:", usuario)
        console.log("password:", password)
        try {
            I.waitForElement(this.inputUser);
            I.fillField(this.inputUser, usuario);
            I.waitForElement(this.inputPassword);
            I.fillField(this.inputPassword, password);
            I.click(this.submitButton);
        } catch (e) {
            throw new Error(`En el login ` + e.errorMessage)
        }

    }

    validateLogin() {
        I.waitForElement(this.titleMainPage)
    }
}

module.exports = new LoginPage()
module.exports.LoginPage = new LoginPage