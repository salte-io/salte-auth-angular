const webpackConfig = require('./webpack.test.config.js');
webpackConfig.module.rules.push({
  enforce: 'pre',
  test: /\.js$/,
  exclude: /tests|node_modules/,
  use: {
    loader: 'istanbul-instrumenter-loader',
    options: { esModules: true }
  }
});

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: [
      'mocha',
      'sinon'
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

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'text' },
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
      ]
    },

    mochaReporter: {
      showDiff: true
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['ChromeHeadless'],

    browserNoActivityTimeout: 120000,

    singleRun: false
  });
};
