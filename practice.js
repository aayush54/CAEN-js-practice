//get individual line elements
var firstLine = document.getElementById("p1");
var secondLine = document.getElementById("p2");

//get header and paragraph eleements
var header = document.getElementsByTagName("h1")[0];
var bodyText = document.getElementsByClassName("text");

//set each line of text
firstLine.innerHTML = "First line of text";
secondLine.innerHTML = "Second line of text";

header.innerHTML = "Header";

//change background color of first line
bodyText[0].style.backgroundColor = "pink";

//insert dog image :)
var newImg = document.createElement("img");
newImg.src = "https://i.pinimg.com/564x/16/57/e1/1657e154e8c70d7c84985754019cb9e5.jpg";
newImg.style.width = "300px";
newImg.style.height = 'auto';

document.getElementsByTagName("body")[0].appendChild(newImg);

//prevent default behavior of google button
var googleButton = document.getElementById("googleButton");

googleButton.addEventListener("click", function(event) {
	event.preventDefault();
});

//setup alert button
var alertButton = document.getElementById("b1");

alertButton.addEventListener("click", function(event) {
	alert("Important Message!");

	event.currentTarget.style.backgroundColor = 'red';
});

