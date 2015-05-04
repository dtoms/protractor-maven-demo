// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  } ,

    // http://stackoverflow.com/questions/23216630/protractor-angularjs-jasmine-get-output-results-on-xml-file
    // Options to be passed to Jasmine-node.
//    onPrepare: function() {
//      require('jasmine-reporters');
//      jasmine.getEnv().addReporter(
//        new jasmine.JUnitXmlReporter(null, true, true, '<path to directory>')
//      );
//    },

    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
    }
};
