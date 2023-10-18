/* eslint-disable linebreak-style */
/*
Take note of the comments throughout this page
Follow their directions as to what to code and where
*/

/*
PART 1a
---------------------------------------
DEFINE A Card OBJECT
---------------------------------------
*/

/*

Part 1a is defined in the Card.js file

*/

/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/

let testCard = new Card("King", 5, "Spade");

document.getElementById("partOneImage").innerHTML = testCard.describeSelf();

/*
PART 2a
---------------------------------------
DEFINE A Deck OBJECT
---------------------------------------
Note: Most of the Deck class code should
      not be modified in any way. The only
      Deck code that needs changing is inside the 
      constructor() function. Change nothing else in Deck. 
*/
class Deck {
	constructor() {
		//build a deck of Card objects
		//prepare arrays for all the aspects of a Card
		this.faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
		this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
		this.suits = ["Spade", "Club", "Heart", "Diamond"];

		//prepare an array to store the Cards in
		this.cards = [];

		for (const suit of this.suits) {
			for (let i = 0; i < this.faces.length; i++) {
				const face = this.faces[i];
				const value = this.values[i];
				const card = new Card(face, value, suit);
				this.cards.push(card);
			}
		}

		//use nested 'for' loops
		//build the Deck of Cards
		//one iteration for each suit
		//one iteration for each face/value pair
		//each time, instantiate a new Card Object
		//add new cards to the using Array.push()
	}
}

/*
DEFINING Deck OBJECT FUNCTIONS
no changes need to be made 
in the rest of this Deck class definition.
*/
Deck.prototype.dealCard = function () {
	//remove and return the first item in array
	//and shift the index of remaining items
	const card = this.cards.shift();
	//if we have run out of cards...
	if (card === undefined) {
		return "No more cards";
	} else {
		//return the next card in the array
		return card;
	}
};
Deck.prototype.shuffle = function () {
	let j, x, i;
	//loop through the entire array
	for (i = this.cards.length - 1; i > 0; i--) {
		//randomly select a card
		j = Math.floor(Math.random() * (i + 1));
		x = this.cards[i];
		//resort cards
		this.cards[i] = this.cards[j];
		this.cards[j] = x;
	}
	//return the randomly sorted array
	return this.cards;
};
Deck.prototype.describeSelf = function () {
	let description = "";
	description += `This deck of cards has ${this.cards.length} card(s) in it`;
	//return the above statement 'description'
	return description;
};
/*
---------------------------------------
end Deck class
---------------------------------------
*/

/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/

//invoke and display the Deck function describeSelf() here...

//randomize the cards in the deck using shuffle()

//take the next card from the deck using dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...

//take the next card from the deck using dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...

let testDeck = new Deck();

testDeck.shuffle();

document.getElementById("countOfDeck1").innerHTML = testDeck.describeSelf();

let firstCardTestDeck = testDeck.dealCard();

document.getElementById("partTwoImage1").innerHTML = firstCardTestDeck.describeSelf();

document.getElementById("countOfDeck2").innerHTML = testDeck.describeSelf();

let secondCardTestDeck = testDeck.dealCard();

document.getElementById("partTwoImage2").innerHTML = secondCardTestDeck.describeSelf();

document.getElementById("countOfDeck3").innerHTML = testDeck.describeSelf();

/*
PART 3a
---------------------------------------
DEFINE A Player OBJECT
---------------------------------------
*/

/*

Player.js

*/

/*
PART 3b
Instantiate at least two Player OBJECTs
Instantiate a new Deck and shuffle() it
Deal five Cards to each Player
Display each players hand to the browser
*/

let player1 = new Player("Jim");
let player2 = new Player("Jess");
let player3 = new Player("Jane");

let players = [];

players.push(player1);
players.push(player2);
players.push(player3);

let mainDeck = new Deck();

mainDeck.shuffle();

players.forEach((player) => {
	let count = 1;

	while (count <= 5) {
		player.addCardToHand(mainDeck.dealCard());
		count++;
	}
});

document.getElementById("player1Name").innerHTML = player1.getName();
document.getElementById("player2Name").innerHTML = player2.getName();
document.getElementById("player3Name").innerHTML = player3.getName();

document.getElementById("player1Cards").innerHTML = player1.describeSelf();
document.getElementById("player2Cards").innerHTML = player2.describeSelf();
document.getElementById("player3Cards").innerHTML = player3.describeSelf();
