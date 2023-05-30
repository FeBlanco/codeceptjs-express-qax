Feature("home");

Scenario("webapp deve estar online", ({ I }) => {
  I.amOnPage("/");
  I.seeTitleEquals("Gerencie suas tarefas com Mark L");
});
