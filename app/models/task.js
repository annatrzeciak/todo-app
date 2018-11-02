import DS from "ember-data";

export default DS.Model.extend({
  person: DS.attr("string"),
  content: DS.attr("string"),
  completed: DS.attr("boolean", { defaultValue: false })
});
