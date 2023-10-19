// regular function
//const calcArea = function (radius) {
//return 3.14 * radius ** 2;
//};

//arrow function
const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};

// const calcArea = radius => 3.14 * radius ** 2; is the same as the code above just shorter

const area = calcArea(5);
console.log("area is:", area);
