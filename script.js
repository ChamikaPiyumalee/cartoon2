// Store characters with their correct image filenames
const characters = [
    { name: "Garfield", image: "Garfield.webp" },
    { name: "Odie", image: "odie.png" },
    { name: "Nermal", image: "nermal.jpg" },
    { name: "Pooky", image: "pooky.webp" },
    { name: "Jon", image: "jon.webp" }
];

const selectBox = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

// Fill selection box
characters.forEach(character => {
    const option = document.createElement("option");
    option.value = character.image;   // store image filename
    option.textContent = character.name;
    selectBox.appendChild(option);
});

// Set default image
image.src = "images/" + characters[0].image;

// Change image when selection changes
selectBox.addEventListener("change", function () {
    image.src = "images/" + selectBox.value;
});