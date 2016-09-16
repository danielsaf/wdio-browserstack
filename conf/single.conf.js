exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'daniel486',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'a3bx8eupWpzj4mMKDhJk',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
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
