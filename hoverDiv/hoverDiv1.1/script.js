var subject = document.querySelectorAll('.subject');
var textBox = document.querySelectorAll(".text-box");
var clicked = false;
var myVar; 



	for(var i = 0; i < subject.length; i++){
		subject[i].addEventListener("mouseenter", function(){
				this.classList.add("subject-expand")
				this.nextElementSibling.classList.add("text-grow");
	
		}, false);
	}

for (var i = 0; i < subject.length; i++){
	subject[i].addEventListener("mouseout", function(){
		if (clicked === false){
			this.classList.remove("subject-expand")
			this.nextElementSibling.classList.remove('text-grow');
		}

	},false);
}

	for( var i =0; i < subject.length; i++){
		this.addEventListener("click", function(){
			clicked = !clicked;
			console.log(clicked)
		},false);	
	}


