var pages = (function() {

    var loginPage = require('../../tests/pageObjects/loginPage')

    return {
        loginPage: loginPage
    }

}());
module.exports = pages;
