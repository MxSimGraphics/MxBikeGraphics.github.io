let species = ["Mx Simulator","Mx Bikes"];

let slct1 = document.getElementById("slct1");

species.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

let species2 = ["Select an option...", "Yes", "No"];
let slct2 = document.getElementById("slct2");

species2.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
});

function showRiderInputs() {
    let teamSelection = slct2.value;
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
        document.getElementById("numberSelect").style.display = "none";
        document.getElementById("fullname").style.display = "none";
        document.getElementById("racenumber").style.display = "none";
    } else {
        // Show existing code
        // (You can add the existing code here or call a function to display it)

        // Show other elements when "No" is selected
        document.getElementById("numberSelect").style.display = "block";
        document.getElementById("fullname").style.display = "block";
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

        // Append inputs to the rider container
        riderContainer.appendChild(riderNameInput);
        riderContainer.appendChild(raceNumberSelect);
        // Append rider container to the main container
        riderInputsContainer.appendChild(riderContainer);
    }
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


let Flags = ["Yes", "No"];
let Continents = {
  Africa: ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Congo", "Democratic Republic of the Congo", "Cote D'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Mayotte", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Reunion", "Rwanda", "Saint Helena", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe", ],
  Antarctica: ["Antarctica", "Bouvet Island", "French Southern Territories", "Heard Island and Mcdonald Islands", "South Georgia and the South Sandwich Islands", ],
  Asia: ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "British Indian Ocean Territory", "Brunei Darussalam", "Cambodia", "China", "Christmas Island", "Cocos (Keeling) Islands", "Cyprus", "Georgia", "Hong Kong", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "South Korea", "North Korea", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Macao", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "Oman", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "Thailand", "Turkey", "Pakistan", "Pakistan", "Pakistan", "Pakistan", "Pakistan", "Pakistan", "Pakistan", ],
  Europe: ["Aland Islands", "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Gibraltar", "Greece", "Guernsey", "The Vatican", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "San Marino", "Serbia", "Serbia and Montenegro", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom",],
  Australia: ["Australia", "New Zealand"],
  "North America": ["Bonaire, Sint Eustatius and Saba", "Canada", "Cuba", "Grenada", "Mexico", "Panama", "United States", "Canada", "Canada", "Canada", "Canada", "Canada", ],
  "South America": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Paraguay", "Uruguay",],
};

let slct3 = document.getElementById("slct3");
let slct4 = document.getElementById("slct4");
let slct5 = document.getElementById("slct5");

// Flag number yes or no select option
Flags.forEach(function addFlags(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct3.appendChild(option);
});

slct3.onchange = function() {
  slct4.style.display = "none";
  slct5.style.display = "none";
  slct4.innerHTML = "<option>Continent</option>";
  slct5.innerHTML = "<option>Country</option>";

  if (this.value == "Yes") {
    addToSlct4(Object.keys(Continents));
    slct4.style.display = "inline-block";
  } else if (this.value == "No") {
    // Clear slct4 and slct5 options
    slct4.innerHTML = "";
    slct5.innerHTML = "";
  }
};

// select 4
slct4.onchange = function() {
  slct5.style.display = "none";
  slct5.innerHTML = "<option>Country</option>";

  let selectedContinent = this.value;
  if (selectedContinent !== "Continent") {
    addToSlct5(Continents[selectedContinent]);
    slct5.style.display = "inline-block";
  }
};

// Continent select option
function addToSlct4(arr) {
  arr.forEach(function(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct4.appendChild(option);
  });
}

// Country select option
function addToSlct5(arr) {
  arr.forEach(function(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct5.appendChild(option);
  });
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
