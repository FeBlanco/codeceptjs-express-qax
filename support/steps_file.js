// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    deleteByHelper: function (taskName) {
      this.sendDeleteRequest("/helper/tasks/" + taskName);
      this.seeResponseCodeIsSuccessful();
    },

    postTask: function (task) {
      this.sendPostRequest("/tasks", task);
      this.seeResponseCodeIsSuccessful();
    },
  });
};
