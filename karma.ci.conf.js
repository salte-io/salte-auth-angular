const webpackConfig = require('./webpack.test.config.js');

module.exports = function(config) {
  const customLaunchers = {
    Chrome: {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    Edge: {
      base: 'SauceLabs',
      browserName: 'microsoftedge'
    },
    InternetExplorer11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11'
    },
    InternetExplorer10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '10'
    },
    Safari9: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '9'
    },
    Safari8: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '8'
    },
    Safari7: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '7'
    }
  };

  config.set({
    basePath: '',

    frameworks: [
      'jasmine'
    ],

    files: [
      'tests/index.js'
    ],

    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['spec', 'saucelabs'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'salte-io/salte-auth-angular',
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: false
    },

    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),

    captureTimeout: 0,
    browserNoActivityTimeout: 120000,

    singleRun: true
  });
};