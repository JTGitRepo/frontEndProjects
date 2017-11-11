function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}








// var count = 500
// 		var div = document.createElement("DIV");
// 		div.setAttribute("id", "container");
// 		document.body.appendChild(div);
		
// 		var container = document.getElementById('container');

// 		for(var i = 0; i < count; i++){
// 			var div = document.createElement("DIV");
// 			if(i === 0 ||  )
// 			div.setAttribute('class', 'blox');
// 			container.appendChild(div);
// 		}
// 		document.write(container.offsetWidth)


// 		var blox = document.getElementsByClassName("blox")
// 		// for(i =0; i < blox.length; i++){
// 		// 	blox[i].addEventListener("mouseon", function(){
// 		// 		blox[i].style.background = "blue"
// 		// 	})
// 		// }

// 		for(var i = 0; i < blox.length; i++){
// 		blox[i].addEventListener("mouseover", function(){
// 				this.classList.add("bloxHover")
// 				// this.firstElementChild.classList.add("content-show");
	
// 		}, false);
// 	}

// 	for(var i = 0; i < blox.length; i++){
// 		blox[i].addEventListener("mouseout", function(){
// 				this.classList.remove("bloxHover")
// 				// this.firstElementChild.classList.add("content-show");
	
// 		}, false);
// 	}
		
