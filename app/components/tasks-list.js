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
    this.set("tasks", this.tasks_service.findAll());

    this.updateNumbers();
  },

  updateNumbers() {
    var allTasks = 0;
    var completeTasks = 0;

    this.tasks.forEach(element => {
      if (element.person == this.person && this.person != "") {
        allTasks++;

        if (element.completed) {
          completeTasks++;
        }
      } else if (this.person == "") {
        allTasks++;

        if (element.completed) {
          completeTasks++;
        }
      }
      this.set("allTasks", allTasks);
      this.set("completeTasks", completeTasks);
      this.set("newTasks", allTasks - completeTasks);

    });
  },
  actions: {
    setCompleteTask(task) {
      var index = this.tasks.indexOf(task);

      task.set("completed", !task.get("completed"));

      this.set(`task[${index}]`, task);

      this.tasks_service.persist(this.get("tasks"));
      this.tasks_service.findAll();
      this.updateNumbers();
    }
  }
});
