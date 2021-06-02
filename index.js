function rollDice() {
	//Generate random numbers between 1 and 6 and
	// set dice image to corresponding random numbers
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	var dice1 = document.querySelector(".img1");
	var dice2 = document.querySelector(".img2");

	dice1.setAttribute("src", `images/dice${randomNumber1}.png`);
	dice2.setAttribute("src", `images/dice${randomNumber2}.png`);

	declareWinner(randomNumber1, randomNumber2);
}

function declareWinner(num1, num2) {
	var title = document.querySelector("h1");

	if (num1 > num2) {
		title.innerHTML = "&#128681 Player 1 Wins!";
	} else if (num1 < num2) {
		title.innerHTML = "Player 2 Wins! &#128681";
	} else if (num1 === num2) {
		title.innerHTML = "Draw!";
	}
}

// On page refresh, roll dice
document.querySelector("body").onload = rollDice();
