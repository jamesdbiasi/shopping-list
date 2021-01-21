var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var span = document.getElementsByTagName("span");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = li.appendChild(document.createElement("span"));
	span.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button = document.createElement("button");
	button.classList.add("btn", "btn-primary");
	button.appendChild(document.createTextNode("Done!"));
	li.appendChild(button);
	button.onclick = underlineSibling;
// CREATE AN ELEMENT
	var button = document.createElement("button");
	button.classList.add("btn","btn-danger"); 
// APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("Delete!"));
// APPEND BUTTON TO LIST
	li.appendChild(button);

	button.onclick = removeParent;
//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
	
}

// ul.onclick = function(event){
// 	var target = event.target;
// 	target.classList.toggle("done");
// }

function underlineSibling(event){
	event.target.previousSibling.classList.toggle("done");
}


function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
