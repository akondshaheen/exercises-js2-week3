/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).



Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

// setTimeout(color, 1000);

// function color() {
//     var randColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randColor;
// }


var i = 0;
function change() {

    var color = ["black", "blue", "brown", "green"];
    document.body.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 5000);