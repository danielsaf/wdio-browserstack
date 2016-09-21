var credential = require("../../conf/world.js").usersCredential;
var expect = require('chai').expect;
var pages = require('../pageObjects/loginPage');


describe('auth form', function() {
    it('should allow access with wrong creds', function () {
        pages.open();
        pages.submitLoginForm(credential.blockedTestKomplett.Username, credential.blockedTestKomplett.Password);
        expect(pages.alertWrongCreds.getText()).to.contain('Login feilet. Vennligst prøv igjen.');
    });
    it('should allow access with correct creds', function () {
        pages.open();
        pages.submitLoginForm(credential.testKomplett.Username, credential.testKomplett.Password);
        // expect(pages.flash.getText()).to.contain('Login feilet. Vennligst prøv igjen.');
    });
});
