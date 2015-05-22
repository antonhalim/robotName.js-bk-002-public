'use strict';

function Robot(){
	this.name = makeName();
};

function makeName(){
	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		numbers = "1234567890",
		name = "";
		for(var i = 1; i <= 5; i++){
			if (i<2){
				name += alphabets.charAt(Math.floor(Math.random()*alphabets.length));
			}
			else {
				name += numbers.charAt(Math.floor(Math.random()*numbers.length));
			}
		};
	return name
};

Robot.prototype.reset = function() {
	this.name = makeName();
};
