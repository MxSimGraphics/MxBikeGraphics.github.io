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
