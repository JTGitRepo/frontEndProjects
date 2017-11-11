var subjectLeft = document.querySelectorAll('.subject-left');
var textBoxLeft = document.querySelectorAll(".text-box-left");
var subjectRight = document.querySelectorAll('.subject-right');
var textBoxRight = document.querySelectorAll(".text-box-right");
var clicked = false;
var myVar; 



	for(var i = 0; i < subjectLeft.length; i++){
		subjectLeft[i].addEventListener("mouseenter", function(){
				this.classList.add("subject-expand")
				this.nextElementSibling.classList.add("text-grow");
	
		}, false);
	}
	for(var i = 0; i < subjectRight.length; i++){
		subjectRight[i].addEventListener("mouseenter", function(){
				this.classList.add("subject-expand")
				this.nextElementSibling.classList.add("text-grow");
	
		}, false);
	}

for (var i = 0; i < subjectLeft.length; i++){
	subjectLeft[i].addEventListener("mouseout", function(){
		if (clicked === false){
			this.classList.remove("subject-expand")
			this.nextElementSibling.classList.remove('text-grow');
		}
	},false);
}

for (var i = 0; i < subjectRight.length; i++){
	subjectRight[i].addEventListener("mouseout", function(){
		if (clicked === false){
			this.classList.remove("subject-expand")
			this.nextElementSibling.classList.remove('text-grow');
		}
	},false);
}

	for( var i =0; i < subjectLeft.length; i++){
		subjectLeft[i].addEventListener("click", function(){
			clicked = !clicked;
			console.log(clicked)
		},false);	
	}


for( var i =0; i < subjectRight.length; i++){
		subjectRight[i].addEventListener("click", function(){
			clicked = !clicked;
			console.log(clicked)
		},false);	
	}
