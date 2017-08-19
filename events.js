var outputTarget = document.getElementById("output-target");
var inputField = document.getElementById("keypress-input");
var colorize = document.getElementById("add-color");
var largerize = document.getElementById("make-large");
var borderize = document.getElementById("add-border");
var round = document.getElementById("add-rounding");
var thePig = document.getElementById("guinea-pig");

var bod = document.body;

// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
bod.addEventListener("click", function(e){
	// have the base available
	// console.log("let's dig", e);
	if (e.target.className === "article-section") {
		// console.log("grab section 1", e.target.firstChild.nodeValue);
		outputTarget.innerHTML = `<p>"You clicked on the ${e.target.firstChild.nodeValue}" section.</p>`;
		// console.log("output from outputString", outputString);
		}
	});

// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
bod.addEventListener("mouseover", function(e){
	// have the base available
		// console.log("let's dig", e.target.id);
		if (e.target.id === "page-title") {
		outputTarget.innerHTML = `<p>"You moved your mouse over the header"</p>`;
		// console.log("output from outputString", outputString);
	}
});

// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
bod.addEventListener("mouseout", function(e){
	// have the base available
		// console.log("let's dig", e.target.id);
		if (e.target.id === "page-title") {
		outputTarget.innerHTML = `<p>"You left me!!"</p>`;
		// console.log("output from outputString", outputString);
	}
});

// 4. When you type characters into the input field, the output element should mirror the text in the input field.
	// have the base available
		// console.log("let's dig", e.target.id);
bod.addEventListener("keyup", function(e){
	// console.log("let's dig", e);
	outputTarget.innerHTML = `<p>${e.target.value}</p>`;
});

// 5. When you click the "Add color" button, the guinea-pig element's text color should change to blue.
colorize.addEventListener("click", function(e){
	thePig.setAttribute("class", "color");
});

// 6. When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
largerize.addEventListener("click", function(e){
	thePig.setAttribute("class", "large");
});

// 7.When you click the "Capture it" button, the guinea-pig element should have a border added to it.
borderize.addEventListener("click", function(e){
	thePig.setAttribute("class", "border");
});

// 8. When you click the "Rounded" button, the guinea-pig element's border should become rounded.
round.addEventListener("click", function(e){
	thePig.setAttribute("class", "round");
});

// 9. The first section's text should be bold.

// 10. The last section's text should be bold and italicized.


// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.





