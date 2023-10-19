// function declaration

function greet() {
  console.log("hello there");
}

//function expressions, JS does not hoist function expressions ONLY declarations
const speak = function () {
  console.log("good day!");
};

greet();
greet();
greet();

speak();
