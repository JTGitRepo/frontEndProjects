var subjectLeft = document.querySelectorAll('.subject-left');


	for(var i = 0; i < subjectLeft.length; i++){
		setListeners(subjectLeft)

	}

		function setListeners(subject){
			var clicked = false;
		subject[i].addEventListener("mouseover", function(){
				this.classList.add("subject-expand-left")
				this.firstElementChild.classList.add("content-show");
	
		}, false);

		subject[i].addEventListener("mouseout", function(){
			if(clicked === false){
				
				this.classList.remove("subject-expand-left")
				this.firstElementChild.classList.remove("content-show");
			}	
		}, false);

		subject[i].addEventListener("click", function(){
			this.classList.add("subject-expand-left")
			this.firstElementChild.classList.add('content-show');	
			clicked = !clicked
		},false);
		}
