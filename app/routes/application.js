import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  // store: service(), store service is injected by default with ember-data
  tasks: service(),

  /**
   * Top level model - keeps global reference to all tasks in ember-data store
   *
   * This reference will always be kept up-to-date automatically by ember.
   * even if `this.store.createRecord('task', {})` has been run from another area of the application
   *
   * Usually when the store is connected to an API it will trigger a GET /tasks request
   */
  model() {
    // Retrieve task objects and push then to ember-data store
    return this.tasks.findAll()
      .map(taskData => this.store.createRecord('task', taskData));
  }
});
