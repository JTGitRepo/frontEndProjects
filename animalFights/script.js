	//  animal battle

	// function with delay that pits two objects against one another

	// function that causes an object to attack another object



	
// obj literals for animal presets
		var bear = {
		name: 'bear',
		maxH: 130,
		health: 130,
		strength: 8,
		speed: 3,
		chance: 2,
		attack: attack
	}

	var eagle = {
		name: 'eagle',
		maxH: 110,
		health: 110,
		strength: 3,
		speed: 6,
		chance: 4,
		attack: attack
	}

	var animalContainer = document.querySelector("#animalContainer");
	animalContainer.addEventListener("click", selectAnimal, false);
 
 // bubbling used to select button in animalbattle.html
	function selectAnimal(event) {
	    if (event.target !== event.currentTarget) {
	        var selectedAnimal = event.target.textContent;
	        console.log(event.currentTarget)
	        console.log(event.target)
	        event.target.style.background = "red"

	        console.log(selectedAnimal)
			// var animal1 = new Animal(selectedAnimal)
			alert(selectedAnimal)


	    }
	    event.stopPropagation();
	}





	//constructor function for animal

	function Animal(animal){
		// console.log(animal.name)
		this.name = animal.name;
		this.maxH = animal.maxH;
		this.health = animal.health;
		this.strength = animal.strength;
		this.speed = animal.speed;
		this.chance = animal.chance;
		this.attack = animal.attack;

	}

	//instantiates new animals

	var animal1 = new Animal(eagle)
	var animal2 = new Animal(bear)
	console.log(animal1)





	function attack(enemy){
		var attack = Math.floor((this.strength * this.speed * (Math.floor((Math.random() * this.chance)+ 1))))
		console.log(this.name + " attacks " + enemy.name)
		console.log(enemy.name + "s health is " + enemy.health)
		console.log(this.name+"'s attack was " + attack + " points.")
		enemy.health -= attack
		console.log(enemy.name+'s health is: '+ enemy.health + "\n\n")
	}



	var animal1Wins = 0;
	var animal2Wins =0;



	// function fightFunc(){
	// 	// if(rounds > 0){

	// 		eagle.health = eagle.maxH;
	// 		bear.health = bear.maxH;
	// 		var intervalId = setInterval(fight, 0)
	// 		// while(eagle.health > 0 && bear.health>0){
	// 		// ==========
	// 		// }	//<=========== if(rounds)
	// 	}

	 	var matches = 0;

	 // <====== fightFunc()
	 function match(){
	 	animal1.health = animal1.maxH
	 	animal2.health = animal2.maxH
		var animal1Goes = Math.floor(Math.random()*2) 	
		while(animal1.health > 0 && animal2.health > 0){
			if(animal1Goes){
				animal1.attack(animal2)
			} else {
				animal2.attack(animal1);
			}
			animal1Goes = !animal1Goes
		}
		if(animal1.health < 1){
			animal2Wins++
			matches++
			console.log(matches)

						// console.log('eagle ' + eagleWins)
		} else {
			animal1Wins++
			matches++
			console.log(matches)
									// console.log('bear ' + bearWins)
		}
			return matches

	}



		// for(var i = 0; i < 3; i++){
		// 		match()


		// 	}


			var counter = 0;
var i = setInterval(function(){
    // do your thing
    match
    counter++;
    if(counter === 10) {
        clearInterval(i);
    }
}, 2000);
			// console.log(match())


			console.log(animal1.name + " Won: " + animal1Wins + ' Times' + "\n" + animal2.name +" won: " + animal2Wins + " times.")
			console.log(animal1.name+"s average is " + animal1Wins / Math.floor(match()/5) + "%" + '\n' +animal2.name+"s average is " + animal2Wins / Math.floor(match()/5) +"%")




	var fight = document.getElementById('fight');
	// fight.addEventListener('click', fightFunc, false);



		// function round(){
		// 			if(animal1Goes){
		// 				animal1.attack(animal2)
		// 			} else {
		// 				animal2.attack(animal1);
		// 			}
		// 			animal1Goes = !animal1Goes	
		// 		} 
			
	 


		// 			if(animal1.health < 1){
		// 				animal2Wins++
		// 				// console.log('eagle ' + eagleWins)
		// 			} else {
		// 				animal1Wins++
		// 				// console.log('bear ' + bearWins)
		// 			}


					// clearInterval(intervalId)
				

		
		 // for(var i = 0; i < 10; i++){
		 // 	fightFunc()
		 // }
	

	
		
	
	 // fightFunc

	



	

	// function Animal(type, strength, speed) {
	// 	this.type = type;
	// 	this.strength = strength;
	// 	this.speed = speed;
		

	// }

	// var tiger = new Animal('tiger', 12, 10)
	// console.log(tiger)


	 
	

	
	