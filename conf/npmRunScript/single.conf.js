var credential = require("../../conf/world.js").credential,
    username = credential.BS_Daniel.Username,
    accessKey = credential.BS_Daniel.AccessKey;

exports.config = {

  user: process.env.BROWSERSTACK_USERNAME || username,
  key: process.env.BROWSERSTACK_ACCESS_KEY || accessKey,

  updateJob: false,
  specs: [
    './tests/specs/login_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'single_test',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  },

  reporters: ['dot', 'junit', 'allure'],
  reporterOptions: {
    junit: {
      outputDir: 'junitTestReport'
    },
    allure: {
      outputDir: 'allure-results'
    }
  }
}
