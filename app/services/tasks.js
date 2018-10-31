import Service from "@ember/service";

export default Service.extend({
  data : Array(
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
  ),
  getData() {
    return this.data; 
  },

  setComplete(task){
    task.set('completed', true);
  }
});
