let species = ["Mx Simulator", "Mx Bikes",];

let slct1 = document.getElementById("slct1");

species.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

let species2 = ["250cc", "450cc",];

let slct2 = document.getElementById("slct2");

species2.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
});

let species3 = ["STYLE 1", "STYLE 2", "STYLE 3", "STYLE 4", "STYLE 5", "STYLE 6", "STYLE 7", "STYLE 8", "STYLE 9", "STYLE 10", "STYLE 11", "STYLE 12",];

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
