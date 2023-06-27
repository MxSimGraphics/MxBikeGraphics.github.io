let species = ["KTM", "Husqvarna", "Kawasaki", "Suzuki", "GasGas", "Yamaha", "Beta", "Honda", ];

let slct1 = document.getElementById("slct1");

species.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

let species2 = ["Number plate", "Custom helmet", "Gear", "Seat cover", "Jersey prints", "Gloves",];

let slct2 = document.getElementById("slct2");

species2.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
});