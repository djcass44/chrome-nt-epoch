var x = setInterval(function() {
    document.getElementById("time").innerHTML = Math.floor(new Date().getTime() / 100);
}, 100);

var date = new Date();
var hour = date.getHours();

var titleColour = "#000000";
var textColour = "#000000";
var backgroundColour = "#FAFAFA";
if(hour >= 18 || hour < 7) {
    backgroundColour = "#263238";
    textColour = "#757575";
    titleColour = "#9e9e9e";
}

document.body.style.backgroundColor = backgroundColour;


var pElements = document.getElementsByTagName("p");
for(var i = 0; i < pElements.length; i++) {
    pElements[i].style.color = textColour;
}
var hElements = document.getElementsByTagName("h1");
for(var j = 0; j < hElements.length; j++) {
    hElements[j].style.color = titleColour;
}
