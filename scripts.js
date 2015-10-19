function Car(make, model, year, numOfDoors, engineType){
	this.make = make;
	this.model = model;
	this.numOfDoors = numOfDoors;
	this.engineType = engineType;
	this.engineRunning = false;
}

Car.prototype.startEngine = function(){
	if(this.engineRunning === false){
		this.engineRunning = true;
	}else{
		alert('Loud obnoxious grinding noises');
	}
}

Car.prototype.stopEngine = function(){
	if(this.engineRunning === true){
		this.engineRunning = false;
	}else{
		alert('Nothing happened');
	}
}

Car.prototype.isConvertable = function(val){
	if(val === true || val === false){
		this.convertable = val;
		if(this.convertable === true){
			this.roof = 'raised';
		}
	}else{
		alert("Must be a true or false value");
	}
}

Car.prototype.lowerTop = function(){
	if(this.isConvertable === true){
		this.roof = 'lowered';
	}
}