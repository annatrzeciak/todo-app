import Service from "@ember/service";
import EmberObject from "@ember/object";

export default Service.extend({
  data: null,

  defaultData: JSON.stringify(
    Array(
      {
        person: "Julie",
        completed: false,
        content: "Take out the garbage"
      },
      {
        person: "Julie",
        completed: true,
        content: "Buy bread"
      },
      {
        person: "Paul",
        completed: true,
        content: "Call to mother"
      },
      {
        person: "Paul",
        completed: true,
        content: "Pay the gas bill"
      },
      {
        person: "Sandy",
        completed: false,
        content: "Write CV"
      },
      {
        person: "Sandy",
        completed: false,
        content: "Buy new coat"
      }
    )
  ),

  findAll() {
    return (
      this.data ||
      this.set(
        "data",
        JSON.parse(window.localStorage.getItem("todos") || this.defaultData)
      ).map(record => new EmberObject(record))
    );
  },

  persist() {
    window.localStorage.setItem("todos", JSON.stringify(this.data));
  }
});
