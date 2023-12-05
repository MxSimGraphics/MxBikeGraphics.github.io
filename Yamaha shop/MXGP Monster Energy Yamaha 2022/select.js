let species = ["Mx Simulator", "Mx Bikes",];
let yearsByGame = {
    "Mx Simulator": [2018],
    "Mx Bikes": [2023],
};

let slct1 = document.getElementById("slct1");
let secondDropdownContainer = document.getElementById("secondDropdownContainer");

species.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

slct1.addEventListener("change", function () {
    let selectedGame = slct1.value;
    let years = yearsByGame[selectedGame];

    // Clear previous options in the second dropdown
    secondDropdownContainer.innerHTML = "";

    // Create and populate the second dropdown
    if (years) {
        let secondDropdown = document.createElement("select");
        secondDropdown.name = "Year";
        secondDropdown.id = "slct12";
        secondDropdown.style.maxWidth = "60%";

        let defaultOption = document.createElement("option");
        defaultOption.text = "Select a year...";
        secondDropdown.appendChild(defaultOption);

        years.forEach(function (year) {
            let option = document.createElement("option");
            option.text = year;
            option.value = year;
            secondDropdown.appendChild(option);
        });

        secondDropdownContainer.appendChild(secondDropdown);
    }
});

let species2 = ["250cc", "450cc",];

let slct2 = document.getElementById("slct2");

species2.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
});

let species3 = ["STYLE 1", "STYLE 2", "STYLE 3", "STYLE 4", "STYLE 5", "STYLE 6", "STYLE 7", "STYLE 8", "STYLE 9", "STYLE 10", "STYLE 11", "STYLE 12"];

let slct3 = document.getElementById("slct3");
let othernumberstyleInput = document.getElementById("othernumberstyle");

species3.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct3.appendChild(option);
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

        // Hide other elements when "Yes" is selected
        document.getElementById("slct2").style.display = "none";
        document.getElementById("numberSelect").style.display = "none";
        document.getElementById("fullname").style.display = "none";
        document.getElementById("modelcc").style.display = "none";
        document.getElementById("racenumber").style.display = "none";
    } else {
        // Show existing code
        // (You can add the existing code here or call a function to display it)

        // Show other elements when "No" is selected
        document.getElementById("slct2").style.display = "block";
        document.getElementById("numberSelect").style.display = "block";
        document.getElementById("fullname").style.display = "block";
        document.getElementById("modelcc").style.display = "block";
        document.getElementById("racenumber").style.display = "block";
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

        // Create select for model/cc
        let modelSelect = document.createElement("select");
        modelSelect.name = "Model" + i;
        modelSelect.style.maxWidth = "60%";

        let ccOptions = ["Select CC...", "250cc", "450cc"]; // Add your desired options here

        ccOptions.forEach(function addCcOption(cc) {
            let option = document.createElement("option");
            option.text = cc;
            option.value = cc;
            modelSelect.appendChild(option);
        });

        // Append inputs to the rider container
        riderContainer.appendChild(riderNameInput);
        riderContainer.appendChild(raceNumberSelect);
        riderContainer.appendChild(modelSelect);

        // Append rider container to the main container
        riderInputsContainer.appendChild(riderContainer);
    }
}

function showTextInput() {
    let seatCoverSelect = document.getElementById("slct5");
    let otherSeatCoverInput = document.getElementById("otherSeatCover");

    if (seatCoverSelect.value === "Other") {
        otherSeatCoverInput.style.display = "block";
    } else {
        otherSeatCoverInput.style.display = "none";
    }
}

// Initial setup
showRiderInputs();




let species5 = ["Seat cover 1", "Seat cover 2", "Seat cover 3", "Seat cover 4", "Seat cover 5", "Seat cover 6", "Seat cover 7", "Seat cover 8", "Seat cover 9", "Seat cover 10", "Seat cover 11", "Seat cover 12", "Other"];

let slct5 = document.getElementById("slct5");
let otherSeatCoverInput = document.getElementById("otherSeatCover");

species5.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct5.appendChild(option);
});

function showTextInput() {
    if (slct5.value === "Other") {
        otherSeatCoverInput.style.display = "block";
    } else {
        otherSeatCoverInput.style.display = "none";
    }
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
