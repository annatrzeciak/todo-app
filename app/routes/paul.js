import Route from "@ember/routing/route";

export default Route.extend({
  title: "Paul",
  model() {
    return this.store.peekAll("task").filterBy("person", "Paul");
  },
  afterModel: function() {
    document.title = this.get("title") + " tasks list - to do app";
  }
});
