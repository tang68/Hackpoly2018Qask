//this is s test
function enterCode() {
    document.getElementById("generatedCode").innerHTML = "Hello World";
}

function getCode() {
	var code = "";
	var lower = "abcdefghijklmnopqrstuvwxyz";
	var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(int i = 0; i < 8; i++) {
		var roll = Math.random();
		if(roll <= .20) {
			code += (Math.floor(Math.random() * 10) + 1);
		}
		else if(roll > .20 && roll < .8) {
			code += lower.charAt(Math.floor(Math.random * lower.length));
		}
		else if(roll >= .8) {
			code += upper.charAt(Math.floor(Math.random * upper.length));
		}
	}
	document.getElementById("generatedCode").innerHTML = code;
	
}
