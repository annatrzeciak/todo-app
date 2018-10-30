import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sandy');
  this.route('paul');
  this.route('julie');
  this.route('tasks');
});

export default Router;
