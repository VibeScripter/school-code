	const position = document.querySelector("#container");
function createDiv(number) {

	if (number > 0) {

	for (let i = 0; i < number; i++) {
 		for (let j = 0; j < number; j++) {
 		const div = document.createElement("div");
 		div.classList.add("box");
 		const boxNumber = 400/number;
 		div.setAttribute("style", `height: ${boxNumber}px; width: ${boxNumber}px;`);
 		position.appendChild(div); // simple js equation that allows for user input basically (basically between 0 and user-input number, allow for iteration and potential adding on to that)
		 // but also like, allow for our stylesheet to input stuff as well whenever the user decides where to go/draw
 	}}

  	var boxes = document.querySelectorAll('.box');
  	boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = randomColor(); });  // a lot of this is event listeners so the user can actually... *drumroll* INPUT STUFF :D
	  // cool right? it works by doing a mouseover, mostly no clicking needed. just dragging.
	});
	} else {
		alert("Enter a number which is larger than 0.");
		createDiv(8);
	}
}
// below is enabling rgb colors at random whenever you drag your cursor around. basically, a giant lite brite for your screen. the alert above enables users to insert the size of the lite brite pegs

function randomColor() {
	var r, g, b;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

function restart() {
	let boxes = document.querySelectorAll('.box');
	boxes.forEach(box => box.remove());
	let boxSize = document.getElementById("boxSize").value;
	createDiv(boxSize);
}
// enables the user-input size from the alert and if-else statement (lines 22 - 26) and fits to size. same size for all
createDiv(8);


