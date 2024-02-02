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

// Race Number
var selectElement = document.getElementById("numberSelect");

// Loop through numbers from 1 to 999
for (var i = 1; i <= 999; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  selectElement.appendChild(optionElement);
}

slct4.addEventListener("change", function () {
  var selectedValue = slct4.value;
  var raceNumberElement = document.getElementById("racenumber");
  var raceNumberSelect = document.getElementById("numberSelect");
  if (selectedValue === "Yes") {
    raceNumberElement.style.display = "block";
    raceNumberSelect.style.display = "block";
  } else {
    raceNumberElement.style.display = "none";
    raceNumberSelect.style.display = "none";
  }
});


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
