import "../scss/main.scss";

import moment from "moment";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = "Maciek";
const age = 32;

// console.log(firstName);
// console.log(age);

// console.log(
//   `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
// );

// const heading = document.querySelector(".main__heading--js");
// console.log(heading);
// console.log(heading.innerHTML);

// heading.innerHTML = `<span>Witaj</span> Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`;
// console.log(heading);
// console.log(heading.innerHTML);

// const emptyParagraph = document.querySelector(".week-summary__description--js");
// console.log(emptyParagraph);
// console.log(emptyParagraph.innerHTML);

// emptyParagraph.innerHTML = `Nawet uzupełniłem treść javascriptem!`;
// console.log(emptyParagraph);
// console.log(emptyParagraph.innerHTML);

// function calculate(myNumber) {
//   console.log(`Dostałam ${myNumber}`);
//   myNumber = myNumber * 7;
//   // console.log(`wynik ${myNumber}`);
//   // return myNumber;
//   return `wynik ${myNumber}`;
// }

// const myResult = calculate(age);
// console.log(myResult);
// console.log(age);

function greetOld(age, firstName) {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
  );
}

const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
  );
};

// greetOld(age, firstName);
// greetOld(36, "Konrad");
greet(32, "Maciek");

function calculateOld(myNumber) {
  return myNumber * 7;
}

const calculate = (myNumber) => myNumber * 7;

// const myResult = calculate(7);
// console.log(myResult);
// console.log(calculateOld(7));
console.log(calculate(7));

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

function helloWorld() {
  console.log("witaj świecie");
}

helloWorld();

createContent(".week-summary__description--js", "Siema siema");

createContent(".week-summary__title--js", "Podmieniony tytuł");

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`);
  },
  isOperating: true,
  name: "Death Star",
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar.name);
console.log(typeof console);
console.log(typeof deathStar.name);
console.log(deathStar.commander.age);
deathStar.fire("Rebel ship");

console.log(deathStar["name"]);
const myProperty = "name";
console.log(deathStar[myProperty]);

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};

showMeProperty("levels");

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

// const humanTwo = {
//   name: "Stefan",
//   age: 32,
// };
// humanTwo.age = 35;
// console.log(humanTwo);

// const humanTwo = humanOne;
// humanTwo.age = 35;
// console.log(humanOne);
// console.log(humanTwo);

// const humanTwo = {
//   name: "Stefan",
//   age: humanOne.age,
// };
// console.log(humanOne);
// console.log(humanTwo);
// humanOne.age = 35;
// console.log(humanOne);
// console.log(humanTwo);

// const humanTwo = {
//   name: "Stefan",
//   age: 35,
//   address: humanOne.address,
// };
// console.log(humanOne);
// console.log(humanTwo);
// humanOne.address.street = "Lipowa";
// console.log(humanOne);
// console.log(humanTwo);

const humanTwo = {
  name: "Stefan",
  age: 35,
  address: {
    street: humanOne.address.street,
    city: "Białystok",
  },
};
console.log(humanOne);
console.log(humanTwo);
humanOne.address.street = "Lipowa";
console.log(humanOne);
console.log(humanTwo);

// if ("Java" != "Javascript") {
//   console.log("Java to nie Javascript");
// }

// if ("Java" != "Java") {
//   console.log("Java to nie Java");
// }

// if (2 == "2") {
//   // konwersja typów - zamiana na liczbę
//   console.log("2 (liczba) równa się 2 (napis)");
// }

// console.log(typeof 2);
// console.log(typeof "2");

// if (2 === "2") {
//   console.log("2 (liczba) równa się 2 (napis) - nie wykona się");
// }

// if (2 != "2") {
//   // konwersja typów - zamiana na liczbę
//   console.log("2 (liczba) nie równa się 2 (napis) - nie wykona się");
// }

// if (2 !== "2") {
//   console.log("2 (liczba) nie równa się 2 (napis)");
// }

// if (humanOne.age > humanTwo.age) {
//   console.log("Human one jest starszy");
// }

// if (humanOne.age === humanTwo.age) {
//   console.log("są równolatkami");
// }

// if (humanOne.age < humanTwo.age) {
//   console.log("Human two jest starszy");
// }

// if (false) {
//   console.log("to się nie wykona");
// }

// if ("") {
//   console.log("to się nie wykona");
// }

// if (humanTwo.age) {
//   // jest różne od zera
//   console.log("to się wykona");
// }

// if (humanTwo.age === 35 && humanTwo.address) {
//   // sprawdzenie wieku i adresu (czy jest zdefiniowany)
//   console.log("to się wykona - AND");
// }

// console.log(humanTwo.pet); // undefined - jest falsy

// if (humanTwo.age === 35 && humanTwo.pet) {
//   // sprawdzenie wieku i zwierzaka (czy istnieje)
//   console.log("to się nie wykona");
// }

// if (humanTwo.age === 35 || humanTwo.pet) {
//   // sprawdzenie wieku i zwierzaka (czy istnieje)
//   console.log("to się wykona - OR");
// }

// if (humanTwo.age === 90 || humanTwo.address) {
//   console.log("to się wykona - OR");
// }

// if (!false) {
//   console.log("to się wykona - NOT");
// }

// if (!("Javascript" == "Java")) {
//   console.log("to się wykona - NOT");
// }

// if (humanOne.age > humanTwo.age) {
//   // true
//   console.log("Human one jest starszy");
// } else {
//   // false - alternatywa dla warunku
//   console.log("Human two jest starszy lub są równolatkami");
// }

if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else if (humanOne.age === humanTwo.age) {
  console.log("są równolatkami");
} else if (humanOne.age === 32) {
  console.log("Human one ma 32 lata");
} else {
  // false - każdy inny przypadek
  console.log("Human two jest starszy");
}

// const myNumber = 7;
// const myNumber = "7";
const myNumber = { name: "maciek" }; // OBIEKT

switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}

// ZAPIS KLASYCZNY
if (32 > 20) {
  console.log("to prawda");
} else {
  console.log("to nieprawda");
}

// ZAPIS SKRÓCONY
32 > 20 ? console.log("to prawda") : console.log("to nieprawda");

// const result = 32 > 20 ? console.log("to prawda") : console.log("to nieprawda");
// const result = 32 > 20 ? true : false;
// const result = 32 > 20 ? { name: "maciek" } : false;
// const result = 32 < 20 ? age : false;
const result = humanOne.age > humanTwo.age ? age : false;

console.log(result); // undefined w przypadku console.log (brak return w funckji)

// OBSŁUGA EVENTÓW
const button = document.querySelector(".action--js"); // pobranie przycisku
console.log(button);

// const myClick = () => { // akcja po kliknięciu
//   console.log("kliknąłeś");
// };

// myClick(); // wywołanie funkcji w konsoli

// const myClick = () => {
//   // akcja po kliknięciu (I metoda)
//   const heading = document.querySelector(".main__heading--js");
//   heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się Maciek`;
// };

// button.addEventListener("click", myClick); // nasłuchiwanie na akcję (I metoda)

// button.addEventListener("click", (e) => {
//   // nasłuchiwanie na akcję i akcja (II metoda)
//   console.log(e.target);
// });

button.addEventListener("click", () => {
  // nasłuchiwanie na akcję i akcja (II metoda)
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się Maciek`;
  // heading.classList.add("klasa-z-js"); // dodanie klasy do heading
  // heading.classList.toggle("klasa-z-js"); // przełączenie klasy w heading
  // heading.classList.remove("main__heading"); // usuwanie klasy z heading
  console.log(heading.classList.contains("main__heading--2")); // sprawdzenie, czy element posiada daną klasę
});

// button.addEventListener("mouseleave", () => {
//   // nasłuchiwanie na akcję i akcja (II metoda)
//   const heading = document.querySelector(".main__heading--js");
//   heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się Maciek`;
// });

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

// BIBLIOTEKA MOMENT (DATA I CZAS)
// console.log(moment().startOf("day").fromNow());

const startOfDay = moment().startOf("day").fromNow();
console.log(startOfDay);

const timePlaceholder = document.querySelector(".time--js");
timePlaceholder.innerHTML = startOfDay;
