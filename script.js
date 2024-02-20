//Self updating date & time
let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>";

//Greeting with user provided name
let name = prompt("What is your name?");
alert("Hello, " + name + "!");

//Greeting button with user provided name
function helloFunction() {
  alert(
    "What's up, " +
      name +
      "!" +
      `\nI hope you're doing well! 
Welcome to my site!`
  );
}

const carSelector = document.getElementById("type");
console.log(carSelector);
const textArea = document.getElementById("textarea");

function switcher(selectedOption) {
    switch (selectedOption) {
      case "Super Cars":
        return cars.superCars;
      case "Sports Cars":
        return cars.sportsCars;
      case "Muscle Cars":
        return cars.muscleCars;
}};

carSelector.addEventListener("change", function name() {
    const selectedOption = carSelector.value;
    textArea.placeholder = switcher(selectedOption);
})

const cars = {
  superCars: {
    Lamborghini: {
      model: "Essenza SCV12",
      year: "2021",
      displacement: "6500 c.c",
      engineType: "V12, Naturally aspirated",
      horsePower: "830",
    },
    Ferrari: {
      model: "FXX-K Evo",
      year: "2019",
      displacement: "6300 c.c",
      engineType: "V12, Naturally aspirated",
      horsePower: "860HP",
    },
    Pagani: {
      model: "Huayra R",
      year: "2021",
      displacement: "6000 c.c",
      engineType: "V12, Naturally aspirated",
      horsePower: "838HP",
    },
    Porsche: {
      model: "918 Spyder Weissach",
      year: "2015",
      displacement: "5000 c.c",
      engineType: "V8, Naturally aspirated, 2 Electric motors",
      horsePower: "875HP",
    },
  },
  sportsCars: {
    BMW: {
      model: "M4 Competition",
      year: "2021",
      displacement: "3000 c.c",
      engineType: "I6, Twin turbo",
      horsePower: "507",
    },
    Nissan: {
      model: "GTR Nismo",
      year: "2021",
      displacement: "3800 c.c",
      engineType: "V6, Twin turbo",
      horsePower: "600",
    },
    Honda: {
      model: "NSX",
      year: "2021",
      displacement: "3500 c.c",
      engineType: "V6, Twin turbo, Electric motors",
      horsePower: "573",
    },
    Toyota: {
      model: "Supra GR",
      year: "2021",
      displacement: "3000 c.c",
      engineType: "V6, Twin turbo",
      horsePower: "382",
    },
  },
  muscleCars: {
    Ford: {
      model: "Mustang GT Fastback Mach 1",
      year: "2021",
      displacement: "5000 c.c",
      engineType: "V8, Naturally aspirated",
      horsePower: "480",
    },
    Chevrolet: {
      model: "Corvette",
      year: "2021",
      displacement: "6200 c.c",
      engineType: "V8, Naturally aspirated",
      horsePower: "490",
    },
    Dodge: {
      model: "Viper SRT Coupe",
      year: "2017",
      displacement: "8400 c.c",
      engineType: "V10, Naturally aspirated",
      horsePower: "645",
    },
  },
};