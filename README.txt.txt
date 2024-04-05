Documentation
loadCSSByScreenSize()
This function chooses between the CSS files desktop.css, mobile.css, and tablet.css depending on the screen size. It sets the href in the link in the header to whichever CSS file is chosen.

toggleColourDropdown()
This function toggles the visibility of the THeme selector dropdown menu, which is off by default.

setColourAll(className, colour)
Selects every single element in the DOM which contains className, and sets its background colour to "colour", which is a css compatible string i.e. "#FFFFFF" "blue".

randomizeColours()
Randomizes the background colour of every element with class as either "background","midground","foreground", and "highlight". Creates a random RGB hex and then sets text colour to be a contrasting colour based on how dark/bright the random colour is.

colourToHex(red, green, blue)
Converts the three seperate RGB ints into a HEX string which css will accept

Theme buttons use setColourAll to change colour of "background","midground","foreground", and "highlight" elements.

Form has an anonymous function which is activated when submit is pressed. 
This function Ensures that all strings inputted are long enough, as well as ensures that a valid email address is used. It then takes substrings from every inputted string and mashes substrings of them together to create a single string.

Included assets
("S1060002.JPG" “Photography” 2023 “Jonah Morgan”).
("S1060003.JPG" “Photography” 2023 “Jonah Morgan”).
("S1080002.JPG" “Photography” 2023 “Jonah Morgan”).
("S1090002.JPG" “Photography” 2023 “Jonah Morgan”).
("S1100002.JPG" “Photography” 2023 “Jonah Morgan”).
("3.MP4" "Digital" 2024 “Jonah Morgan”).

This Assignment reused HTML and CSS from assignments 1 and 2.