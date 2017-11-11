(function(){
				function createElement(el, att, className, parent, text){
					var el = document.createElement(el);
					// el.textContent = className
					el.setAttribute(att, className)
					if(text){
						el.textContent = text	
					}
					if(parent){
						var parentEl = document.getElementById(parent)
						parentEl.appendChild(el)
					} else {
						document.body.appendChild(el)
					} 

								
				}
			
				createElement('div', 'id', 'container')
				createElement('div', 'id', 'container1')
				createElement('div', 'id', 'container2')
				createElement('div', 'id', 'container3')
				// createElement( 'div', 'id', 'container-left', 'container')
				// createElement( 'div', 'id', 'container-right', 'container')


			// for(var i =0; i< 2; i++){
				
				createElement('div', 'class', 'subject left', 'container', 'Welcome')
				createElement('div', 'class', 'subject right', 'container1', 'connect')
				createElement('div', 'class', 'subject left', 'container2')
				createElement('div', 'class', 'subject right', 'container3')

			// }

		})()



				// assign variables to left and right columns
			// var containerRight = document.querySelector("#container-right");
			
				//add all event listeners
		
 		// 	EVERY THING ABOVE THIS LINE^ AND BELOW THE MODULE IS UNEEDED
 	


	
			var subject = document.querySelectorAll(".subject");



	//working code from hoverDiv1.3

	for(var i = 0; i < subject.length; i++){
		//call set listeners function
		setListeners(subject)

	}


		function setListeners(subject){
			var clicked = false;
		subject[i].addEventListener("mouseover", function(){

				this.classList.add('subject-expand')
				this.parentElement.style.marginBottom = '30vh'
				$('html, body').animate({
    				scrollTop: $(this).offset().top
				}, 1000);
				

		}, false);

		subject[i].addEventListener("mouseout", function(){
			if(clicked === false){
				this.classList.remove("subject-expand")
				this.parentElement.style.marginBottom = '0'


			}	
		}, false);

		subject[i].addEventListener("click", function(){
			clicked = !clicked
			
		},false);
		}

								   //  |
// ALSO UNEEDED BUT POTENTIALLY USEFUL V


		function findChild(event) {
		console.log(event)
			  if (event.target !== event.currentTarget) {
	        var selectedSubject = event.target.idList;

	    }
	    event.stopPropagation();
	}

