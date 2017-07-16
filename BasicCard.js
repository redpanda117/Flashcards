
//basic caard constructor with the back and front of your flashcard 
var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
}

//the enpty array that wil hold all of the basic cards.
var basicQuestion = [];

//a function to push the cards into basicQuestion array
var makeBasicCard = function (front,back) {
    var addBasicCard = new BasicCard(front,back);
    basicQuestion.push(addBasicCard);
};

//creating the basic cards
makeBasicCard( "What superhero can climb walls and shoot webs?", "SpiderMan");
makeBasicCard("He has been seen running with an ant army.", "AntMan");
makeBasicCard("This woman has a lasso that make people speak the truth.", "Wonder Woman");

//testing for errors
console.log(basicQuestion);

/* Exporting our BasicCard constructor. We will require it in 
the main.js */
module.exports = BasicCard;

    

