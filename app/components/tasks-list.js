import Component from "@ember/component";
import { computed } from "@ember/object";
import Ember from "ember";

export default Component.extend({
  person: "",
  tasks: null,
  store: Ember.inject.service(),

  // This will observe nr of 'tasks' array
  allTasks: computed.alias("tasks.length"),

  // This will observe 'completed' attribute in each task, and re-compute on changes
  completeTasks: computed("tasks.@each.completed", function() {
    const tasks = this.get("tasks") || [];
    return tasks.filterBy("completed", true).length;
  }),

  newTasks: computed("tasks.@each.completed", function() {
    const tasks = this.get("tasks") || [];
    return tasks.filterBy("completed", false).length;
  }),

  actions: {
    setCompleteTask(task) {
      task.set("completed", !task.get("completed"));
    },
    addNewTask(e) {
      if (e.keyCode === 13 && e.target.value.trim() !== "") {
        var store = this.get("store");
        let task = store.createRecord("task", {
          person: this.get("person"),
          completed: false,
          content: e.target.value.trim()
        });
        e.target.value = "";

        // task.save();
        this.set("tasks",this.store.peekAll("task").filterBy("person", this.get("person")));
      }
    }
  }
});
