const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yii7s6',
  e2e: {
   // 'baseUrl': 'https://www.google.com',
    "fixturesFolder":"cypress/datas",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
