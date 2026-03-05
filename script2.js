// Choose your cartoon characters with correct filenames
const characters = [
    { name: "SpongeBob", image: "SpongeBob.png" },
    { name: "Patrick", image: "patrick.png" },
    { name: "Squidward", image: "Squidward.png" },
    { name: "Sandy", image: "Sandy.png" },
    { name: "MrKrabs", image: "MrKrabs.png" }
];

const selectBox = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

// Fill dropdown
characters.forEach(character => {
    const option = document.createElement("option");
    option.value = character.image;
    option.textContent = character.name;
    selectBox.appendChild(option);
});

// Set default image
image.src = "images/" + characters[0].image;

// Change image on selection
selectBox.addEventListener("change", function () {
    image.src = "images/" + selectBox.value;
});