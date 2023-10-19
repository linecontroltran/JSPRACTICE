// arguments & parameters

const speak = function (name = "luigi", time = "night") {
  console.log(`good ${time}! ${name}`);
};

console.log(name);

speak();
speak("shaun", "day");
speak("shaun");
