import Component from "@ember/component";
import { computed } from "@ember/object";
import Ember from "ember";

export default Component.extend({
  addTaskInput: "",
  searchContent: "",
  searchPerson: "",
  searchState: "",

  person: "",
  tasks: null,
  store: Ember.inject.service(),

  // This will observe nr of 'tasks' array
  allTasks: computed.alias("filteredTasks.length"),

  // This will observe 'completed' attribute in each task, and re-compute on changes
  completeTasks: computed("filteredTasks.@each.completed", function() {
    const tasks = this.get("filteredTasks") || [];
    return tasks.filterBy("completed", true).length;
  }),

  newTasks: computed("filteredTasks.@each.completed", function() {
    const tasks = this.get("filteredTasks") || [];
    return tasks.filterBy("completed", false).length;
  }),

  // Keeps final list of filtered tasks. Re-computes on changes to filters or contents of each task
  filteredTasks: computed("searchPerson", "searchState", "searchContent", "tasks.@each.content", function() {
    var filtered = this.get("tasks");
    if (this.get("searchPerson") != "") {
      filtered = filtered.filterBy("person", this.get("searchPerson"));
    }
    if (this.get("searchState") != "") {
      filtered = filtered.filterBy(
        "completed",
        this.get("searchState") == "true" ? true : false
      );
    }

      if (this.get("searchContent") != "") {
        filtered = filtered.filter(item =>
          item
            .get("content")
            .toLowerCase()
            .includes(this.get("searchContent").toLowerCase())
        );
      }

    return filtered;
  }),

  actions: {
    selectPerson(person) {
      this.set("searchPerson", person);
    },
    selectState(state) {
        this.set("searchState", state);
    },
  
    setCompleteTask(task) {
      task.set("completed", !task.get("completed"));
    },
    addNewTask(e) {
      this.set('addTaskInput', e.target.value.trim());
      if (e.keyCode === 13 && this.get('addTaskInput') != "") {
        var store = this.get("store");
        let task = store.createRecord("task", {
          person: this.get("person"),
          completed: false,
          content: this.get('addTaskInput').trim()
        });
        this.set('addTaskInput', '');

        // task.save();
        this.set(
          "tasks",
          this.store.peekAll("task").filterBy("person", this.get("person"))
        );
      }
    },
  }
});
