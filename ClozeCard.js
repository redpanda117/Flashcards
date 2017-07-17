/*making constructor cards with fill in the blanks*/
var ClozeCard = function (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial =
        this.fullText.replace(this.cloze, "...");
   
// to see if this cloze is in the full text.    
    if (this.fullText.includes(this.cloze) === false) {
            console.log("ERROR");
        };
}

/* Exporting our ClozeCard constructor. We will require it in 
the main.js */
module.exports = ClozeCard;
