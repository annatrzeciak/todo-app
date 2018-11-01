import Service from "@ember/service";
import EmberObject from "@ember/object";

export default Service.extend({
  data: null,

  defaultData: JSON.stringify([
    {
      id: 1,
      person: "Julie",
      completed: false,
      content: "Take out the garbage"
    },
    {
      id: 2,
      person: "Julie",
      completed: true,
      content: "Buy bread"
    },
    {
      id: 3,
      person: "Paul",
      completed: true,
      content: "Call to mother"
    },
    {
      id: 4,
      person: "Paul",
      completed: true,
      content: "Pay the gas bill"
    },
    {
      id: 5,
      person: "Sandy",
      completed: false,
      content: "Write CV"
    },
    {
      id: 6,
      person: "Sandy",
      completed: false,
      content: "Buy new coat"
    }
  ]),

  findAll() {
    return (
      this.data ||
      this.set(
        "data",
        JSON.parse(window.localStorage.getItem("todos") || this.defaultData)
      ).map(record => new EmberObject(record))
    );
  },

  persist(newData) {
    this.set("data", newData);
    window.localStorage.setItem("todos", JSON.stringify(this.data));
  }
});
