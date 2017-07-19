/*making constructor cards with fill in the blanks*/
var ClozeCard = function (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial =
        this.fullText.replace(this.cloze, "...");
   

}
ClozeCard.prototype.printError = function(){
    // to see if this cloze is in the full text.    
    if (this.fullText.includes(this.cloze) === false) {
            console.log("ERROR");
        }
};

/*test
var one = new ClozeCard ("Superman is weak against kryptonite.", "duck");
one.printError();*/

/* Exporting our ClozeCard constructor. We will require it in 
the main.js */
module.exports = ClozeCard;
