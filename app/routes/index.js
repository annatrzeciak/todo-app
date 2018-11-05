import Route from "@ember/routing/route";

export default Route.extend({
  title: "Everyone",
  model() {
    return this.store.peekAll("task");
  },
  afterModel: function() {
    document.title = this.get("title") + " tasks list - to do app";
  }
});
