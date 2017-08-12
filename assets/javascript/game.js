$(document).ready(function(){   

	var numberHolder = $("#numberHolder");
	var scoreHolder = $("#scoreHolder");
	var winsCounter = $("#wins");
	var lossesCounter = $("#losses");

	var targetNumber;
	var score = 0;
	var blueValue;
	var pinkValue;
	var purpleValue;
	var yellowValue;
	var wins = 0;
	var losses = 0;

	//a start function
	function start() {
		//overwrite the score, wins, and losses to the DOM element scoreHolder
		scoreHolder.html(score);
		winsCounter.html(wins);
		lossesCounter.html(losses);
	}
	
	// a random number generator + assigner
	function chooseNumber() {
		var randomNumber = Math.floor((Math.random()*10) + 1);
		return randomNumber;
	};

	//a reset function
	function reset(){
		//choose a random number between 1 and 40, and use Math.floor to cut off decimals
		targetNumber = Math.floor((Math.random()*40)+1);
		//overwrite the random number to the DOM element numberHolder
		numberHolder.html(targetNumber);

		//reset score
		score = 0;
		scoreHolder.html(score);
		
		//choose a random number between 1 and 10 for each of the crystals
		blueValue = chooseNumber();
		console.log(blueValue);
		pinkValue = chooseNumber();
		console.log(pinkValue);
		purpleValue = chooseNumber();
		console.log(purpleValue);
		yellowValue = chooseNumber();
		console.log(yellowValue);
	}

	function check() {
		//conditionals...
		if (score === targetNumber){
			wins++;
			winsCounter.html(wins);
			reset();
		}

		else if (score > targetNumber){
			losses++;
			lossesCounter.html(losses);
			reset();
		}
	}

	
	function play (){
		reset();
		start();

		//each time a crystal is clicked, add its value to the score 
		$("#blue-crystal").on("click", function() {
			score += blueValue;
			scoreHolder.html(score);
			check();
		});

		$("#pink-crystal").on("click", function() {
			score += pinkValue;
			scoreHolder.html(score);
			check();
		});

		$("#purple-crystal").on("click", function() {
			score += purpleValue;
			scoreHolder.html(score);
			check();
		});
		
		$("#yellow-crystal").on("click", function() {
			score += yellowValue;
			scoreHolder.html(score);
			check();
		});


	};
	play();
	
});