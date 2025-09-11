const _ = require("lodash");
const libA = require("lib-a");

module.exports = () => {
  console.log("Hello from lib-b!");
  console.log("Random number using lodash:", _.random(1, 100));
  libA();
};