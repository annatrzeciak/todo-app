import Route from "@ember/routing/route";

export default Route.extend({
  title: "Julie",
  model() {
    return this.store.peekAll("task").filterBy("person", "Julie");
  },
  afterModel: function() {
    document.title = this.get("title") + " tasks list - to do app";
  }
});
