var BUILD_ID = process.env.TRAVIS_BUILD_ID || new Date().getTime();

exports.config = {

    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete as
    // WebdriverIO automatically connects to localhost. Also if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack or Testing Bot you also don't
    // need to define host and port information because WebdriverIO can figure that our
    // according to your user and key information. However if you are using a private Selenium
    // backend you should define the host address and port here.
    //
    host: '127.0.0.1',
    port: 4444,
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    //
    // If you are using Sauce Labs WebdriverIO takes care about updating the job information
    // once the test is done. This option is set to `true` per default.
    //
    updateJob: true,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the location of this
    // file.
    //
    specs: [
        'tests/specs/login_test.js'
    ],
    // Patterns to exclude.
    // exclude: [
    //     'test/spec/multibrowser/**',
    //     'test/spec/mobile/**'
    // ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilties at the same
    // time. Depending on the number of capabilities WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // If you have trouble getting all important capabilities together check out Sauce Labs
    // platform configurator. A great tool to configure your capabilities.
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        browserName:
            'chrome'}],
        // platform: 'Windows 8.1',
        // version: '41.0',
        // name: 'chrome test',
        // build: BUILD_ID}],
    // }, {
    //     browserName: 'firefox',
    //     platform: 'Windows 8',
    //     version: '37.0',
    //     name: 'firefox test',
    //     build: BUILD_ID
    // },{
    //     browserName: 'safari',
    //     platform: 'OS X 10.10',
    //     version: '8.0',
    //     name: 'safari test',
    //     build: BUILD_ID
    // }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity.
    logLevel: 'silent',
    //
    // Enables colors for log output
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: 'shots',
    //
    // Shorten url command calls by setting a base url. If your url parameter starts with "/"
    // the base url gets prepended.
    baseUrl: 'https://test.komplett.no',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 20000,
    //
    // Initialise the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as property. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Framework you want to run your specs with.
    // The following are supported: mocha, jasmine and cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the node package for the specific framework installed before running
    // any tests. If not please install the following package:
    // Mocha: `$ npm install mocha`
    // Jasmine: `$ npm install jasmine`
    // Cucumber: `$ npm install cucumber`
    // framework: 'jasmine',
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['dot', 'junit', 'allure'],
    reporterOptions: {
        junit: {
            outputDir: './'
        },
        allure: {
            outputDir: 'allure-results'
        }
    },

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        imeout: 90000,
        globals: 'callback*'
    },

    //
        // Jasmine default timeout
        defaultTimeoutInterval: 20000,
        //
        // Make use of jasmine specific grep functionality
        // grep: null,
        //
};
