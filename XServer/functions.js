/*------------
functions.js
functions used by pages in this XServer
------------*/

//take the guess and return whether it is within 20 of the answer or if it is the answer
//note: using * 1 to cast guess as a number
function guessMeAJAX(guess, answer) {
	console.log("function guessMeAjax called");
	//convert guess into a number if possible
	guess = parseInt(guess);
	//tell the user if the guess is not a number
	if(isNaN(guess * 1))
	{
		return "<li>Try guessing a number!</li>";
	}
	//tell the user if the guess is right
	if(guess == answer)
	{
		return "<li>" + guess + " is the answer! Nice work!</li>";
	}
	//tell the user if the guess is within 20
	if((guess * 1 + 20 >= answer) && (guess * 1 - 20 <= answer))
	{
		return "<li>" + guess + " is within 20 of the answer!</li>";
	}
	//tell the user if the guess is not within 20
	else
	{
		return "<li>" + guess + " is not within 20 of the answer!</li>";
	}
}

//take the guess and return number and location of matching letters
function guessBagelsAJAX(guess, answer) {
	console.log("function guessBagelsAjax called");
	//convert guess into a number if possible
	//tell the user if the guess is not a number
	if(guess.length() != 4)
	{
		return "<li>Try guessing a four-letter word!</li>";
	}
	//tell the user if the guess is right
	if(guess == answer)
	{
		return "<li>" + guess + " is the answer! Nice work!</li>";
	}
}

//exports
exports.guessMeAJAX = guessMeAJAX;
exports.guessBagelsAjax = guessBagelsAJAX;