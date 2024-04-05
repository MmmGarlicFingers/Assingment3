//Checks screen size on load and loads appropriate CSS file accordingly
function loadCSSByScreenSize() {
    const screenWidth = window.innerWidth;

    let cssFile;
    if (screenWidth < 768) {
        cssFile = 'css/mobile.css';
    } else if (screenWidth < 811) {
        cssFile = 'css/tablet.css';
    } else {
        cssFile = 'css/desktop.css';
    }
    console.log(screenWidth);
    document.getElementById('css_file').href = cssFile;
}

document.addEventListener('DOMContentLoaded', function() {
    loadCSSByScreenSize();
});

//Toggles the colour dropdown's visibility (theme selector) 
function toggleColourDropdown() {
    var dropdownContent = document.getElementById("dropdown_colour_content");
    if (dropdownContent.style.display === "flex") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "flex";
    }
}

//Sets the colour of everything with a specific class name
function setColourAll(className, colour) {
    const elements = document.querySelectorAll(className);

    for (const element of elements) {
        element.style.backgroundColor = colour;
        element.style.color = "black";
    }
}

//Randomizes colour of every element whose colour is impacted by Theme
function randomizeColours() {
    const elements = document.querySelectorAll(".background, .foreground, .midground, .highlight");

    for (const element of elements) {
        //Generate a random colour and set the background colour to this colour
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        element.style.backgroundColor = colourToHex(red, green, blue);

        //Ensuring contrast between background and text, alters text color according to average luminosity of RGB.
        let divisor = ((red+green+blue)/3)/128;
        if (divisor <= 1) {
            element.style.color = "white";
        } else {
            element.style.color = "black";
        }
    }
}

//Converts three int values into a hex string (For CSS)
function colourToHex(red, green, blue) {
    return "#" + red.toString(16).padStart(2, "0") + green.toString(16).padStart(2, "0") + blue.toString(16).padStart(2, "0");
}
//Buttons and Event Listeners
let colourButton = document.getElementById("dropdown_button");
colourButton.addEventListener("click", toggleColourDropdown);

let lightModeButton = document.getElementById("colour_light");
lightModeButton.addEventListener("click", function() {
    //Light theme
    setColourAll(".background", "gray");
    setColourAll(".midground", "lightgray");
    setColourAll(".foreground", "white");
    setColourAll(".highlight", "cyan");
});

let darkModeButton = document.getElementById("colour_dark");
darkModeButton.addEventListener("click", function() {
    //Dark Theme
    setColourAll(".background", "black");
    setColourAll(".midground", "dimgray");
    setColourAll(".foreground", "darkgray");
    setColourAll(".highlight", "yellow");
});

let randomModeButton = document.getElementById("colour_random");
//Random Theme
randomModeButton.addEventListener("click", randomizeColours);

let form = document.getElementById("baby_name_form");
//Random form which asks for a few different inputs, and generates a string by mashing the different inputs together.
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;
    const favFood = document.getElementById('fav_food').value;
    const favBand = document.getElementById('fav_band').value;
    const thoughts = document.getElementById('thoughts').value;
    const email = document.getElementById('email').value;
    const secret = document.getElementById('secret').value;

    if (favFood.length < 3) {
        valid = false
        alert("Food should be 3 characters or longer!")
    } else if (favBand.length < 5) {
        valid = false
        alert("Band should be 5 characters or longer!")
    } else if (thoughts.length < 7) {
        valid = false
        alert("Thoughts should be 7 characters or longer!")
    } else if (!email.endsWith("@gmail.com")) {
        valid = false
        alert("Input valid email (ending in @gmail.com)");
    } else if (secret.length < 6) {
        valid = false
        alert("Secret should be 6 characters or longer!");
    }

    if (valid) {
        //Mashing together inputs
        let name;
        name = favFood.substring(0, 2) + favBand.substring(0, 3) + thoughts.substring(4, 6) + email.substring(0, 2) + secret.substring(0, 5);
        document.getElementById("result").textContent = name;
    }
});