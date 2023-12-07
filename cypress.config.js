const { defineConfig } = require("cypress");




module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videoCompression: false,
    videosFolder: 'cypress/videos',
    chromeWebSecurity: false,
    baseUrl:'https://careers.ancient.gg/o/qa-specialist'
  },
});
