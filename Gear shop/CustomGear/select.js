let species = ["Mx Simulator", "Mx Bikes"];

let slct1 = document.getElementById("slct1");
let secondDropdownContainer = document.getElementById("secondDropdownContainer");

species.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

let species4 = ["Select an option...", "Yes", "No"];
let slct4 = document.getElementById("slct4");

species4.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct4.appendChild(option);
});

function showRiderInputs() {
    let teamSelection = slct4.value;
    let riderInputsContainer = document.getElementById("riderInputsContainer");

    // Clear previous content
    riderInputsContainer.innerHTML = "";

    if (teamSelection === "Yes") {
        // Show input for the number of riders
        let numberOfRiders = document.createElement("select");
        numberOfRiders.name = "NumberOfRiders";
        numberOfRiders.id = "numberOfRiders";

        for (let i = 1; i <= 20; i++) {
            let option = document.createElement("option");
            option.text = i;
            option.value = i;
            numberOfRiders.appendChild(option);
        }

        numberOfRiders.addEventListener("change", createRiderInputs);

        riderInputsContainer.appendChild(numberOfRiders);

        // Hide race number related elements
        document.getElementById("numberSelect").style.display = "none";
        document.getElementById("racenumber").style.display = "none";
    } else {
        // Show race number related elements
        document.getElementById("numberSelect").style.display = "block";
        document.getElementById("racenumber").style.display = "block";

        // Show existing code
        // (You can add the existing code here or call a function to display it)
    }
}

function createRiderInputs() {
    let numberOfRiders = parseInt(document.getElementById("numberOfRiders").value);
    let riderInputsContainer = document.getElementById("riderInputsContainer");

    // Clear previous content
    riderInputsContainer.innerHTML = "";

    for (let i = 1; i <= numberOfRiders; i++) {
        // Create container for each rider
        let riderContainer = document.createElement("div");

        // Create input for rider name
        let riderNameInput = document.createElement("input");
        riderNameInput.type = "text";
        riderNameInput.name = "RiderName" + i;
        riderNameInput.placeholder = "Rider " + i + " Name";
        riderNameInput.required = true;

        // Create select for race number
        let raceNumberSelect = document.createElement("select");
        raceNumberSelect.name = "RaceNumber" + i;
        raceNumberSelect.style.width = "140px";

        // Add options to race number select
        for (let j = 1; j <= 999; j++) {
            let option = document.createElement("option");
            option.text = j;
            option.value = j;
            raceNumberSelect.appendChild(option);
        }

        // Append inputs to the rider container
        riderContainer.appendChild(riderNameInput);
        riderContainer.appendChild(raceNumberSelect);

        // Append rider container to the main container
        riderInputsContainer.appendChild(riderContainer);
    }
}

// Initial setup
showRiderInputs();

// Loop through numbers from 1 to 999
var selectElement = document.getElementById("numberSelect");
for (var i = 1; i <= 999; i++) {
    // Create an option element
    var optionElement = document.createElement("option");
    
    // Set the value and text of the option
    optionElement.value = i;
    optionElement.textContent = i;
    
    // Append the option to the select element
    selectElement.appendChild(optionElement);
}



// Initial setup
showRiderInputs();


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
