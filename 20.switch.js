// switch statements

// switch statements use STRICT EQUALITY OPERATOR!!!

const grade = "50";

// using if statements

//if (grade === "A") {
//} else if (grade === "B") {
//} else if (grade === "C") {
//} else if (grade === "D") {
//} else if (grade === "E") {
//} else {
//}

switch (grade) {
  case 50:
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  case "E":
    console.log("you got an E!");
    break;
  default:
    console.log("not a valid grade");
}
