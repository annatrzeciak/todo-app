import Route from "@ember/routing/route";

export default Route.extend({
  title: "Sandy",
  model() {
    return this.store.peekAll("task").filterBy("person", "Sandy");
  },
  afterModel: function() {
    document.title = this.get("title") + " tasks list - to do app";
  }
});
