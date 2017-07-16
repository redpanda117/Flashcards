/*making constructor cards with fill in the blanks*/
var ClozeCard = function( text, cloze){
this.fullText = text;
this.cloze = cloze;
this.partial =
    this.fullText.replace(this.cloze,"...");
}
/* Exporting our BasicCard constructor. We will require it in 
the main.js */
module.exports = ClozeCard;



