const { defineConfig } = require("cypress");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   preprocessor,
// } = require("@badeball/cypress-cucumber-preprocessor/browserify");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", preprocessor(config));
//   require('cypress-mochawesome-reporter/plugin')(on);

  // Make sure to return the config object as it might have been modified by the plugin.
  //return config;
//}
module.exports = defineConfig({
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    specPattern: 'cypress/integration/examples/*.js'
    //specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
