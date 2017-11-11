(function() {
	
	var months = ['jan', 'feb', 'mar', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];

	var days = numberArray(1, 31);
	var years = numberArray(1917, 2017);
	
	var form = document.querySelector('form');

	function setAttribute(attr, labelVal, el){
		var attribute = document.createAttribute(attr);
		attribute.value = labelVal;
		el.setAttributeNode(attribute);
		return el;
	};


	function numberArray(start, end){
		var arr = [];
		for(var i = start; i <= end; i++){
			arr.push(i);
		}
		return arr;
	}

	function createLabelElement(){
		var label = document.createElement('LABEL');
		label = setAttribute('for', selectName, label);

	}

	function createSelectElement(arr, labelVal){
		// create "SELECT" element
		var select = document.createElement('SELECT');
		// create option for each element in  array
		for(var i = 0; i < arr.length; i++){
			//	create option element
			var option = document.createElement("OPTION");
			// 	create attribute of "value"
			var attribute = document.createAttribute("value");
			// asign current index in array to value attribute
			attribute.value = arr[i];
			//	set attribute to option element
			option.setAttributeNode(attribute);
			//create text node from arr index and append text node to option element
			option.appendChild(document.createTextNode(arr[i]));
			//append option element to select element
			select.appendChild(option);	

		}	
		form.appendChild(select);

	}

	createSelectElement(months);
	createSelectElement(days);
	createSelectElement(years);

	// create submit button

	var submit = document.createElement("INPUT");
	var attribute = document.createAttribute('type');
	attribute.value = 'submit';	
	submit.setAttributeNode(attribute);
	form.appendChild(submit);



	submit.addEventListener('click', function(){
		var birthday = [month, day, year];
		var month = document.getElementsByTagName('select')[0].value;
		alert(month);
	})
	

})();
