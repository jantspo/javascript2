var myObject = {
	firstProperty: "A string",
	secondProperty: "Another string",
	thirdProperty: 6,
	fourthProperty: [
		'value 1', 'value 2', 'value 3'
	]
}

for(var prop in myObject){
	console.log("Object " + prop + ' = ' + myObject[prop]);
}