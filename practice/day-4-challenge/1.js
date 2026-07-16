const person = {
  name: "sl",
  sayHiRegular: function() {
    console.log("Regular:", this.name);
  },
  sayHiArrow: () => {
    console.log("Arrow:", this.name);
  }
};
person.sayHiRegular();
person.sayHiArrow();