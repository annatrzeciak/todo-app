import Component from "@ember/component";
import { computed } from '@ember/object';

export default Component.extend({
  person: "",
  tasks: null,

  // This will observe nr of 'tasks' array
  allTasks: computed.alias('tasks.length'),

  // This will observe 'completed' attribute in each task, and re-compute on changes
  completeTasks: computed('tasks.@each.completed', function() {
    const tasks = this.get('tasks') || [];
    return tasks.filterBy('completed', true).length;
  }),

  newTasks: computed('tasks.@each.completed', function() {
    const tasks = this.get('tasks') || [];
    return tasks.filterBy('completed', false).length;
  }),

  actions: {
    setCompleteTask(task) {
      task.set("completed", !task.get("completed"));
    }
  }
});
