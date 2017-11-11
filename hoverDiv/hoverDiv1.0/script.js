var focusDiv = document.querySelector('.subjectDiv');
var textBody = document.querySelector(".textbody");
var text = document.querySelector(".text");
var clicked = false;
var myVar; 



focusDiv.addEventListener("mouseover", function(){
	focusDiv.classList.add("mouseover");
	// var timeout = setTimeout(function(){
	textBody.classList.add("textbodyexpand");
	text.classList.add("showtext")
	// }, 2000);
});

focusDiv.addEventListener("mouseout", function(){
	if (clicked === false){
	focusDiv.classList.remove("mouseover");
	textBody.classList.remove("textbodyexpand");
	// clearTimeout(timeout)
	}

});

focusDiv.addEventListener("click", function(){
	clicked = !clicked;
	console.log(clicked)
	// if (clicked === false){
	// textBody.classList.remove("textbodyexpand");

	// }
	// if(clicked === true){
		// focusDiv.classList.add();
// 	} else {
// 		focusDiv.classList.remove()
	// }
});

//hover expands icon and displays text

// click keeps icon expanded and text in place

// if clicked, text will stay displayed 
//when hover is unfocused. If not clicked or 
//clicked again, unfocusing will take 
// text away and return icon to original size