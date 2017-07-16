var inquirer = require("inquirer");
//getting the exported files data
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


//the enpty array that wil hold all of the basic cards.
var basicQuestion = [];

//a function to push the cards into basicQuestion array
 function makeBasicCard(front,back) {
    var addBasicCard = new BasicCard(front,back);
    basicQuestion.push(addBasicCard);
};

//creating the basic cards
makeBasicCard( "What superhero can climb walls and shoot webs?", "SpiderMan");
makeBasicCard("He has been seen running with an ant army.", "AntMan");
makeBasicCard("This woman has a lasso that make people speak the truth.", "Wonder Woman");

//testing for errors
//console.log(basicQuestion);

//making an empty arry to put all of the cloze questions in.
var clozeQuestion = [];
//a function that push the cards into the clozeQuestion
var makeClozeCard = function(text,cloze){
    var addClozeCard = new ClozeCard(text,cloze);
    clozeQuestion.push(addClozeCard);
}

makeClozeCard("The Hulk turns green when he is angry","Hulk");
makeClozeCard("Natasha Romanova has many aliases but the one most poeple known her by is Black Widow.", "Black Widow");
makeClozeCard("Superman is weak against kryptonite.","Superman");

//testing for errors
console.log(clozeQuestion);

// keep tack of current question and score wronge and right answers
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var totalQuestion = 0;

function start() {

    if (basicQuestion.length + clozeQuestion.length > totalQuestion) {
        //since there are only 3 basic questions
        if (basicQuestion.length > totalQuestion) {
            inquirer.prompt([
                {
                    name: "name",
                    message: basicQuestion[currentQuestion].front
  }]).then(function (answer) {
                //see if the answer wrong or right and add to score and to the currentQuestion
                if (answer.name.toLowerCase() === basicQuestion[currentQuestion].back.toLowerCase()) {
                    correct++;
                    console.log("RIGHT");
                } else {
                    incorrect++;
                    console.log("WRONG");
                }
            //add to question so it goes to the next one 
                currentQuestion++;
            //add to total questions to see ther are any left
                totalQuestion++;
                start();//run function again to get next question 
            });
            //end of basic quesion
        }else{
        //set current question bak to zero because we are going into a new array
            currentQuestion = 0;
        // now the 3 cloze question
                  inquirer.prompt([
                {
                    name: "name",
                    message: clozeQuestion[currentQuestion].partial
                    
  }]).then(function (answer) {
                //see if the answer wrong or right and add to score and to the currentQuestion.
                if (answer.name.toLowerCase() === clozeQuestion[currentQuestion].cloze.toLowerCase()) {
                    correct++;
                    console.log("RIGHT");
                } else {
                    incorrect++;
                    console.log("WRONG")
                }
                //add to total questions to see ther are any left
               totalQuestion++;
               currentQuestion++;  
               start();//run function again to get next question       
            });
}//end of cloze questions
        
//basic + cloze else{}
    } 
} //function start end
start();