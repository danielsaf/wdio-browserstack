var Page = require('./page')
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: {
        get: function () {
            return browser.element('#loginForm [name=username]');
        }
    },
    password: {
        get: function () {
            return browser.element('#loginForm [name=password]');
        }
    },
    loginFrame: {
        get: function () {
            return browser.element('.login-button');
        }
    },
    LoginBtn: {
        get: function () {
            return browser.element('#loginForm [name=username]');
        }
    },
    alertWrongCreds: {
        get: function () {
            return browser.element('.alert-content');
        }
    },


    /**
     * define or overwrite page methods
     */
    open: {
        value: function () {
            Page.open.call(this, '');

        }
    },
    loginForm: {
        value: function () {
            this.loginFrame.click();

        }
    },

    submitLoginForm: {
        value: function (username, password) {
            this.loginFrame.click();
            this.username.waitForVisible();
            this.username.setValue(username);
            this.password.setValue(password);
            this.LoginBtn.submitForm();
        }
    }
});
module.exports = LoginPage
