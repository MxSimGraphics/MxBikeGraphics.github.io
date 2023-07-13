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

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");
let slct3 = document.getElementById("slct3");

// Flag number yes or no select option
Flags.forEach(function addFlags(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.onchange = function() {
  slct2.style.display = "none";
  slct3.style.display = "none";
  slct2.innerHTML = "<option>Continent</option>";
  slct3.innerHTML = "<option>Country</option>";

  if (this.value == "Yes") {
    addToSlct2(Object.keys(Continents));
    slct2.style.display = "inline-block";
  } else if (this.value == "No") {
    // Clear slct2 and slct3 options
    slct2.innerHTML = "";
    slct3.innerHTML = "";
  }
};

// select 2
slct2.onchange = function() {
  slct3.style.display = "none";
  slct3.innerHTML = "<option>Country</option>";

  let selectedContinent = this.value;
  if (selectedContinent !== "Continent") {
    addToSlct3(Continents[selectedContinent]);
    slct3.style.display = "inline-block";
  }
};

// Continent select option
function addToSlct2(arr) {
  arr.forEach(function(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
  });
}

// Country select option
function addToSlct3(arr) {
  arr.forEach(function(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct3.appendChild(option);
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
