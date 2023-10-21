// object literal

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@theninja.co.uk",
  location: "berlin",
  blogs: ["why mac and cheese rules", "10 things to make with marmite"],
};

console.log(user);
console.log(user.name);

//user.age = 35;
console.log(user.age);

//console.log(user["name"]);
//console.log(user["email"]);

//const key = "location";

console.log(user["location"]);

user["name"] = "chun-li";
console.log(user["name"]);

console.log(typeof user);
