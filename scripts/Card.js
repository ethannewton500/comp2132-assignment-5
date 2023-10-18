class Card {
	constructor(face, value, suit) {
		this.face = face;
		this.value = value;
		this.suit = suit;
	}

	describeSelf() {
		const face = this.face;
		const value = this.value;
		const suit = this.suit;

		return `<img src="card-images/${face}_of_${suit}s.svg" alt="${face} of ${suit}s. ${value}" class="cardStyles">`;
	}
}
