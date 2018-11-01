import Service from "@ember/service";
import EmberObject from "@ember/object";

export default Service.extend({
  data : null,

  findAll() {
		return this.data ||
			this.set('data', JSON.parse(window.localStorage.getItem('todos') || 'defaultData')).map(record => new EmberObject(record))
  },
  

 	persist(newData) {
     this.set('data',newData);
		window.localStorage.setItem('todos', JSON.stringify(this.data));
	}
});
