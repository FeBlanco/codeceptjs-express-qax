const { I } = inject();

module.exports = {
  // insert your locators and methods here

  create: function (taskName) {
    I.amOnPage("/");

    I.fillField("input[class*=NewTask]", taskName);
    I.click("Create");
  },

  haveTask: function (taskName) {
    I.see(taskName, ".task-item");
  },

  popUpHaveText: function (text) {
    I.see(text, ".swal2-html-container");
  },
};
