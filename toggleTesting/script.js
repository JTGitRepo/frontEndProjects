// var body = document.getElementsByTagName("body")[0];


// create div elements and append to body

for(var i =0; i < 2; i ++){
var div = document.createElement("DIV");        // Create a <button> element
var text = document.createTextNode("CLICK ME");       // Create a text node
div.appendChild(text);                                // Append the text to <button>
document.body.appendChild(div); 	
}




// select All divs 

var divs = document.querySelectorAll("div");
// var numberOfDivs = divs.length


var divBoolArray = []

for(var i = 0; i < divs.length; i++){
	divBoolArray.push(false);
}
console.log(divBoolArray)


	


	for(var i = 0; i < divs.length; i++){

	divs[i].addEventListener('mouseover', function(){
		this.classList.add("hover");

		})
	// }
	// for(var i = 0; i < divs.length; i++){
		divs[i].addEventListener('mouseout', function(){
			// if(divBoolArray[i]){
				this.classList.remove("hover");
				// divBoolArray[i] = true;
			// }
		})
	// }

	// for(var i = 0; i < divs.length; i++){
		divs[i].addEventListener('click', function(){
			this.classList.toggle('clicked');
			// divBoolArray[i] = !divBoolArray[i];
			// console.log(i)

		})
	}
// }

// var divObj = {
// 	addstyle: this.addEventListener('mouseover', function(){
// 		this.style.background = "green";
// 	}),
// 	removeStyle: this.addEventListener('mouseout', function(){
// 		this.style.background = "red";
// 	})
// }

// for(var i = 0; i < numberOfDivs; i++){
// 	divObj.div;
// }

