//Game
let species = ["Mx Simulator","Mx Bikes"];

let slct1 = document.getElementById("slct1");

species.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

//Bike
let species2 = ["KTM","Honda", "Yamaha", "Kawasaki", "Suzuki", "Husqvarna", "GasGas"];

let slct2 = document.getElementById("slct2");

species2.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
});

let species3 = ["250cc", "450cc",];

let slct3 = document.getElementById("slct3");

species3.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct3.appendChild(option);
});

var selectElement = document.getElementById("numberSelect");

// Loop through numbers from 1 to 999
for (var i = 1; i <= 999; i++) {
  // Create an option element
  var optionElement = document.createElement("option");
  
  // Set the value and text of the option
  optionElement.value = i;
  optionElement.textContent = i;
  
  // Append the option to the select element
  selectElement.appendChild(optionElement);
}


