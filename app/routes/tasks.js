import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        person: "Julie",
        complete: false,
        content: "Take out the garbage"
      },
      {
        id: 2,
        person: "Julie",
        complete: true,
        content: "Buy bread"
      },
      {
        id: 3,
        person: "Paul",
        complete: true,
        content: "Call to mother"
      },
      {
        id: 4,
        person: "Paul",
        complete: true,
        content: "Pay the gas bill"
      },
      {
        id: 5,
        person: "Sandy",
        complete: false,
        content: "Write CV"
      },
      {
        id: 6,
        person: "Sandy",
        complete: false,
        content: "Buy new coat"
      }
    ];
  }
});
