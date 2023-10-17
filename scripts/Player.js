class Player 
{
    constructor(name)
    {
        this.name = name;
        this.hand = [];
    }

    addCardToHand(aCard)
    {
        this.hand.push(aCard);
        this.hand.p
    }

    describeSelf()
    {
        let listOfCards = [];

        this.hand.forEach(card => {
            listOfCards += card.describeSelf();
        });

        return listOfCards;
    }

    getName()
    {
        return this.name;
    }
}