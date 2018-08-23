var css = document.querySelector("h3");
var firstColor = document.querySelector(".color1");
var secondColor = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizer = document.getElementById("random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    firstColor.value +
    "," +
    secondColor.value +
    ")";

  css.textContent = body.style.background + ";";
}

// firstColor.value = document.querySelector(".color1").value;
// secondColor.value = document.querySelector(".color2").value;

function init() {
  setGradient();
  css.textContent = body.style.background + ";";
}

function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randColorPicker() {
  return [randNumber(0, 255), randNumber(0, 255), randNumber(0, 255)];
}

function randomGradientPicker() {
  var colorA = randColorPicker();
  var colorB = randColorPicker();

  firstColor.value = rgb2hex(colorA[0], colorA[1], colorA[2]);
  secondColor.value = rgb2hex(colorB[0], colorB[1], colorB[2]);

  //   body.style.background =
  //     "linear-gradient(to right," + rgbOne + "," + rgbTwo + ")";

  setGradient();
}

function rgb2hex(red, green, blue) {
  var rgb = blue | (green << 8) | (red << 16);
  return "#" + (0x1000000 + rgb).toString(16).slice(1);
}

init();

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);

randomizer.addEventListener("click", randomGradientPicker);

var a = "test";
var b = true;
var c = 789;

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const { firstName, lastName, age, eyeColor } = person;

var okObj = {
  a,
  b,
  c
};

let city = "San francisco";
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

let message1 = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no?`;

console.log(message);
console.log(message1);

console.log(okObj);

function isValidAge(age = 10) {
  return age;
}

const hello = () => {
  console.log("Hello World!");
};

hello();

const isValidAge2 = (age = 10) => age;

console.log(isValidAge());

console.log(isValidAge2());

let sym = Symbol("nostopping");

console.log(sym);

function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI2 = (username, location) =>
  username && location ? "I am not lost" : "I am totally lost!";

console.log(whereAmI(true, true));

console.log(whereAmI2(true, true));

const bbalPlayer = [
  { name: "Taulava", position: "center", start: 1999, end: 2018, rating: 7.6 },
  { name: "Gordon", position: "guard", start: 1989, end: 2009, rating: 6.5 },
  { name: "Ritualo", position: "guard", start: 1991, end: 2007, rating: 8.1 },
  { name: "Aquino", position: "center", start: 1996, end: 2018, rating: 6.9 },
  {
    name: "Abarrientos",
    position: "guard",
    start: 1993,
    end: 2010,
    rating: 8.5
  },
  { name: "Espino", position: "center", start: 1995, end: 2011, rating: 6.7 },
  { name: "Menk", position: "forward", start: 1996, end: 2016, rating: 6.2 },
  { name: "Caidic", position: "guard", start: 1987, end: 1999, rating: 7.8 },
  { name: "Co", position: "guard", start: 1975, end: 1988, rating: 8.2 },
  {
    name: "Duremdes",
    position: "forward",
    start: 1995,
    end: 2008,
    rating: 7.3
  },
  {
    name: "Fernandez",
    position: "center",
    start: 1972,
    end: 1994,
    rating: 7.7
  },
  {
    name: "Jaworski",
    position: "forward",
    start: 1975,
    end: 1998,
    rating: 8.4
  },
  { name: "Lastimosa", position: "guard", start: 1988, end: 2002, rating: 7.1 },
  {
    name: "Patrimonio",
    position: "forward",
    start: 1988,
    end: 2004,
    rating: 7.7
  },
  { name: "Paras", position: "center", start: 1989, end: 2003, rating: 8.0 },
  { name: "Codiñera", position: "center", start: 1988, end: 2005, rating: 7.6 },
  { name: "Brown", position: "guard", start: 1980, end: 1990, rating: 8.7 },
  { name: "Lim", position: "guard", start: 1986, end: 1997, rating: 8.1 },
  { name: "Hubalde", position: "forward", start: 1975, end: 1990, rating: 7.4 },
  { name: "Florencio", position: "guard", start: 1975, end: 1983, rating: 7.7 }
];

const bestRatings = bbalPlayer.filter(
  player => (player.end - player.start > 15 ? true : false)
);
console.log(bestRatings);

const position = inputPos =>
  bbalPlayer.filter(player => player.position === inputPos);

console.log(position("forward"));

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const array2 = [];
array.forEach(element => {
  array2.push(`${element.username}!`);
});

console.log(array2);
//Create an array using map that has all the usernames with a "? to each of the usernames

const map2 = array.map(element => `${element.username}?`);
console.log(map2);
//Filter the array to only include users who are on team: red

//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
