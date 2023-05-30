const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./e2e/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost:8080",
      show: true,
      browser: "chromium",
    },
    REST: {
      endpoint: "http://localhost:3333",
    },
    JSONResponse: {
      requestHelper: "REST",
    },
    Mochawesome: {
      uniqueScreenshotNames: true,
    },
  },
  include: {
    I: "./support/steps_file.js",

    tasksPage: "./pages/tasks.js",
  },
  mocha: {
    reporterOptions: {
      reportDir: "output",
    },
  },
  name: "codecepts-express",
};
