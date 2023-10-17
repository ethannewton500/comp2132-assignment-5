class Card 
{
    constructor(face, value, suit)
    {
        this.face = face;
        this.value = value;
        this.suit = suit;
    }

    describeSelf()
    {
        let face = this.face;
        let value = this.value;
        let suit = this.suit;

        return `<img src="card-images/${face}_of_${suit}s.svg" alt="${face} of ${suit}s. ${value}" class="cardStyles">`
    }
}