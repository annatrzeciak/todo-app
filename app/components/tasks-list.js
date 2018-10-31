import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  person: "",
  tasks_service: service("tasks"),
  tasks: null,
  allTasks: 0,
  completeTasks: 0,
  newTasks: 0,

  init() {
    this._super(...arguments);
    this.set("tasks", this.tasks_service.getData());

    this.tasks.forEach(element => {
      if (element.person == this.person && this.person != "") {
        this.allTasks++;

        if (element.complete) {
          this.completeTasks++;
        }
      } else if (this.person == "") {
        this.allTasks++;

        if (element.complete) {
          this.completeTasks++;
        }
      }

      this.newTasks = this.allTasks - this.completeTasks;
    });
  }
});
