// An example configuration file.
exports.config = {
  // chromeOnly: true,
  // chromeDriver: './node_modules/protractor/selenium/chromedriver',
  
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  baseUrl: 'http://ho-angular-abylay.c9users.io:8080',
  // directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  // framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/**/*_spec.js'],

  // Options to be passed to Jasmine.
  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000
  // }
};
