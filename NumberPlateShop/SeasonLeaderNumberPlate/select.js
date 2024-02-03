let species = ["Mx Simulator", "Mx Bikes"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");
let slct3 = document.getElementById("slct3");
let otherInputDiv = document.getElementById("otherInputDiv");
let bikeHeading = document.getElementById("bikeHeading");

species.forEach(function addSpecies(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.addEventListener("change", function () {
  // Clear existing options in the second dropdown
  slct2.innerHTML = "<option>Select an option...</option>";

  // Get the selected value from the first dropdown
  let selectedGame = slct1.value;

  // Create options for the second dropdown based on the selected value
  if (selectedGame === "Mx Simulator" || selectedGame === "Mx Bikes") {
    // Show the heading and the third dropdown
    bikeHeading.style.display = "block";
    slct3.style.display = "block";

    // Create options for the second dropdown based on the selected value
    if (selectedGame === "Mx Simulator") {
      let mxSimulatorOptions = ["mxsemf", "racefactorygaming", "Other"];
      mxSimulatorOptions.forEach(function (option) {
        let newOption = document.createElement("option");
        newOption.text = option;
        newOption.value = option;
        slct2.appendChild(newOption);
      });

      // Update options in the third dropdown based on the selected game
      updateBikeOptions(["KTM", "Honda", "Yamaha", "Kawasaki", "Husqvarna"]);
    } else if (selectedGame === "Mx Bikes") {
      let mxBikesOptions = ["mxbgp", "Other"];
      mxBikesOptions.forEach(function (option) {
        let newOption = document.createElement("option");
        newOption.text = option;
        newOption.value = option;
        slct2.appendChild(newOption);
      });

      // Update options in the third dropdown based on the selected game
      updateBikeOptions(["KTM", "Honda", "Yamaha", "Kawasaki", "Suzuki", "Husqvarna", "GasGas"]);
    }
  } else {
    // Hide the heading and the third dropdown
    bikeHeading.style.display = "none";
    slct3.style.display = "none";
  }

  // Show or hide the "Options" heading and the second dropdown based on the selected game
  optionsHeading.style.display = selectedGame === "Select an option..." ? "none" : "block";
  slct2.hidden = selectedGame === "Select an option...";

  // Show or hide the text input based on the selected option in the second dropdown
  otherInputDiv.style.display = slct2.value === "Other" ? "block" : "none";
});

slct2.addEventListener("change", function () {
  // Show or hide the text input based on the selected option in the second dropdown
  otherInputDiv.style.display = slct2.value === "Other" ? "block" : "none";
});

// Function to update options in the third dropdown
function updateBikeOptions(bikeOptions) {
  // Clear existing options in the third dropdown
  slct3.innerHTML = "<option>Select an option...</option>";

  // Add new options to the third dropdown
  bikeOptions.forEach(function (option) {
    let newOption = document.createElement("option");
    newOption.text = option;
    newOption.value = option;
    slct3.appendChild(newOption);
  });
}

// Initialize options in the third dropdown
updateBikeOptions([]);





//model/cc
let species4 = ["125cc", "250cc", "450cc",];

let slct4 = document.getElementById("slct4");

species4.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct4.appendChild(option);
});

let species5 = ["World Championship", "AMA Motocross", "Supercross", "WSX", "WMX"];

let slct5 = document.getElementById("slct5");

species5.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct5.appendChild(option);
});

let species6 = ["125", "250", "450", "MX2", "MX1", "MXGP", "OPEN"];

let slct6 = document.getElementById("slct6");

species6.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct6.appendChild(option);
});



let species7 = ["Yes", "No"];

let slct7 = document.getElementById("slct7");

species7.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct7.appendChild(option);
});

// Assuming you have already declared slct7 and selectElement as shown in your provided code

// Get the "Race Number" heading element
let raceNumberHeading = document.getElementById("racenumber");

// Add an event listener to the "Background Number" dropdown
slct7.addEventListener("change", function () {
  // Get the selected value from the "Background Number" dropdown
  let backgroundNumberOption = slct7.value;

  // Get the "Race Number" dropdown element
  let raceNumberSelect = document.getElementById("numberSelect");

  // Show or hide the "Race Number" dropdown and heading based on the selected option
  if (backgroundNumberOption === "Yes") {
    raceNumberSelect.style.display = "block";
    raceNumberHeading.style.display = "block";
  } else {
    raceNumberSelect.style.display = "none";
    raceNumberHeading.style.display = "none";
  }
});

// Set the initial state of the "Race Number" dropdown and heading based on the default value of "Background Number" dropdown
// (assuming the default option is the first one)
if (slct7.value === "Yes") {
  document.getElementById("numberSelect").style.display = "block";
  raceNumberHeading.style.display = "block";
} else {
  document.getElementById("numberSelect").style.display = "none";
  raceNumberHeading.style.display = "none";
}

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



//Image slider
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
