/*making constructor cards with fill in the blanks*/
var ClozeCard = function( text, cloze){
this.fullText = text;
this.cloze = cloze;
this.partial =
    this.fullText.replace(this.cloze,"...");
    
    if(this.fullText.includes(this.cloze) === false){
        console.log("The answer " + this.cloze + " is not found in the answer " + this.fullText);
    }
}

/* Exporting our ClozeCard constructor. We will require it in 
the main.js */
module.exports = ClozeCard;



