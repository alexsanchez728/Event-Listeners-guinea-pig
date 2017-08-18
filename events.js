var outputTarget = document.getElementById("output-target");

// 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"



// 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".


// 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".


// 4. When you type characters into the input field, the output element should mirror the text in the input field.


// 5. When you click the "Add color" button, the guinea-pig element's text color should change to blue.


// 6. When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.


// 7.When you click the "Capture it" button, the guinea-pig element should have a border added to it.


// 8. When you click the "Rounded" button, the guinea-pig element's border should become rounded.


// 9. The first section's text should be bold.

// 10. The last section's text should be bold and italicized.


// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

document.body.addEventListener('click', function(e){
	// have the base available
	//and then start digging
		console.log("grab section 1", e.target.firstChild);
		var outputString = "";
		outputString = `<p> "${e.target.firstChild}" </p>`;
		outputTarget = outputString;
		// console.log("finding seciton 1", .)
		// console.log("button id", e.target.id);
	// if(e.target.className === "article-section") {
	// 	showMe(e);
	});