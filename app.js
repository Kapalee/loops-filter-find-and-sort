"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = ["Peter", "Magdalena", "Frederikke", "Oskar", "Rasmus", "Sofie", "Anders", "Birgitte"];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  //loopThroughYears();
  //loopThroughFiveLastYears();
  //logNumbers();
  //iterationLoop();
  teachersOver40();
}

// ========== forEach ========== //

function loopThroughNames() {
  names.forEach(showName);
}

function showName(name, index) {
  if (index === 0) {
    console.log("Ich bin numero uno:", name);
  } else {
    console.log(name, index);
  }
  if (index === name.length - 1) {
    console.log("");
  }

  if (index % 2 === 1) {
    console.log(":", name);
  }
}

function loopThroughYears() {
  for (let index = 0; index < years.length; index++) {
    const year = years[index];
    console.log(year, index);
    if (index === years.length - 1) {
      console.log("this is the last year");
    }
    if (index === years.length - 2) {
      console.log("this is the last year");
    }
  }
}

function loopThroughFiveFirstYears() {
  for (let index = 0; index < 5; index++) {
    const year = years[index];
    console.log(year, index);
  }
}

function loopThroughFiveLastYears() {
  for (let index = 8; index > 3; index--) {
    const year = years[index];
    console.log(year, index);
  }
}

function logNumbers() {
  for (let index = 0; index < 10; index++) {
    console.log(index);
  }
  for (let index = 1; index < 11; index++) {
    console.log(index);
  }
  for (let index = 10; index > -1; index--) {
    console.log(index);
    if (index === 0) {
      console.log("lift off:", index);
    }
  }
  for (let index = 0; index < 21; index++) {
    if (index % 3 === 1) {
      console.log(index);
    }
  }
}

function iterationLoop() {
  for (const teacher of teachers) {
    console.log(teacher);
  }
}

function teachersOver40() {
  const results = [];
  for (const teacher of teachers)
    if (teacher.age > 40) {
      results.push(teacher);
    }
  console.log(results);
}
// ========== for loop ========== //
//* for (let index = 0; index < names.length; index++) {
//  const name = names[index];
//  console.log(index);
//  console.log(name);
//}
//
// ========== for of loop ========== //

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
