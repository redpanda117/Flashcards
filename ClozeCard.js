/*making constructor cards with fill in the blanks*/
var ClozeCard = function( text, cloze){
this.fullText = text;
this.cloze = cloze;
this.partial =
    this.fullText.replace(this.cloze,"...");
}

//making an empty arry to put all of the cloze questions in.
var clozeQuestion = [];
//a function that push the cards into the clozeQuestion
var makeClozeCard = function(text,cloze){
    var addClozeCard = new ClozeCard(text,cloze);
    clozeQuestion.push(addClozeCard);
}

makeClozeCard("The hulk turns green when he is angry","Hulk");
makeClozeCard("Natasha Romanova has many aliases but the one most poeple known her by is Black Widow.", "Black Widow");
makeClozeCard("Superman is weak against kryptonite.","Superman");

//testing for errors
console.log(clozeQuestion);

/* Exporting our BasicCard constructor. We will require it in 
the main.js */
module.exports = ClozeCard;



