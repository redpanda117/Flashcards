var inquirer = require("inquirer");
//getting the exported files data. The constrctors are in these files.
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// keep tack of current question and score wronge and right answers an current question.
var currentBasicQuestion = 0;
var currentClozeQuestion = 0;
var correct = 0;
var incorrect = 0;
var totalQuestion = 0;
//the enpty array that wil hold all of the basic cards.
var basicQuestion = [];
//making an empty arry to put all of the cloze questions in.
var clozeQuestion = [];

//a function to push the cards into basicQuestion array
function makeBasicCard(front, back) {
    var addBasicCard = new BasicCard(front, back);
    basicQuestion.push(addBasicCard);
};

//test run questions
/*makeBasicCard("What superhero can climb walls and shoot webs?", "SpiderMan");
makeBasicCard("He has been seen running with an ant army.", "AntMan");
makeBasicCard("This woman has a lasso that make people speak the truth.", "Wonder Woman");*/

//testing for errors
//console.log(basicQuestion);

//a function that push the cards into the clozeQuestion
var makeClozeCard = function (text, cloze) {
    var addClozeCard = new ClozeCard(text, cloze);
    clozeQuestion.push(addClozeCard);
}

/*testing run questions
makeClozeCard("The Hulk turns green when he is angry", "Hulk");
makeClozeCard("Natasha Romanova has many aliases but the one most poeple known her by is Black Widow.", "Black Widow");
makeClozeCard("Superman is weak against kryptonite.", "Superman");*/

//testing for errors
//console.log(clozeQuestion);
creatflashcards();

//function that lets user make the flashcards
function creatflashcards() {
    if (basicQuestion.length + clozeQuestion.length < 2) {
        inquirer.prompt([
            {
                type: "list",
                message: "Which flash card you want to make?",
                choices: ["Basic flashcards (Question and answer)", "Cloze-Deleted flashcards (Fill in the blank)"],
                name: "flashcards"
            }
        ]).then(function (inquirerResponse) {
            if (inquirerResponse.flashcards === "Basic flashcards (Question and answer)") {
                inquirer.prompt([
                    {
                        name: "front",
                        message: "What your question?",
            },
                    {
                        name: "back",
                        message: "The answer to the question:"
             }
        ]).then(function (answers) {
                    makeBasicCard(answers.front, answers.back);
                    creatflashcards();
                });
                //end of making basic cards choice
            } else {
                inquirer.prompt([
                    {
                        name: "text",
                        message: "What your full sentence including your answer?"
                    }, {
                        name: "cloze",
                        message: "Whats is the answer from the sentence that you want to remove?"
                    }
                ]).then(function (answers) {
                    makeClozeCard(answers.text, answers.cloze);
                    creatflashcards();
                });
            }
        }); //end when you reach the limit of amount of cards you can make.
    } else {
        //when made enough cards run the start function to go through them.
        inquirer.prompt([
            // Here we ask the user to confirm to start going through the flashcards 
            {
                type: "confirm",
                message: "Are you ready to start?",
                name: "confirm",
                default: true
    }
     ]).then(function (inquirerResponse) {
            //user wants to play again
            if (inquirerResponse.confirm) {
                //resetting the vaules for playing again
                console.log("====== OK LETS GO! ======");
                start();
            } else {
                console.log("====== Okay come back another time. ======");
            }
        });
    
    }

} //end of creatflashcards().



//function that run through the flashcard
function start() {
    //overall total amount of question. if there are still question left run 
    if (basicQuestion.length + clozeQuestion.length > totalQuestion) {
        //see if there are any basic question left
        if (basicQuestion.length > totalQuestion) {
            inquirer.prompt([
                {
                    name: "name",
                    message: basicQuestion[currentBasicQuestion].front
  }]).then(function (answer) {
                //see if the answer wrong or right and add to score and to the currentQuestion
                if (answer.name.toLowerCase() === basicQuestion[currentBasicQuestion].back.toLowerCase()) {
                    correct++;
                    console.log("====== RIGHT ======");
                } else {
                    incorrect++;
                    console.log("====== WRONG ======");
                }
                //add to question so it goes to the next one 
                currentBasicQuestion++;
                //add to total questions to see ther are any left
                totalQuestion++;
                start(); //run function again to get next question 
            });
            //end of basic quesion. There are no more basic questions
        } else {
            // now the 3 cloze question
            inquirer.prompt([
                {
                    name: "name",
                    message: clozeQuestion[currentClozeQuestion].partial

  }]).then(function (answer) {
                //see if the answer wrong or right and add to score and to the currentQuestion.
                if (answer.name.toLowerCase() === clozeQuestion[currentClozeQuestion].cloze.toLowerCase()) {
                    correct++;
                    console.log("====== RIGHT ======");
                } else {
                    incorrect++;
                    console.log("====== WRONG ======");
                }
                //add to total questions to see ther are any left
                totalQuestion++;
                currentClozeQuestion++;
                start(); //run function again to get next question       
            });
        } //end of cloze questions

        //basic + cloze end. Now end game.
    } else {
        console.log("You are finish. Here is your score:" + "\n Correct: " + correct + "\n Wrong:" + incorrect);
        inquirer.prompt([
            // Here we ask the user to confirm.
            {
                type: "confirm",
                message: "Do you want to go for another round?",
                name: "confirm",
                default: true
    }
     ]).then(function (inquirerResponse) {
            //user wants to play again
            if (inquirerResponse.confirm) {
                //resetting the vaules for playing again
                currentBasicQuestion = 0;
                currentClozeQuestion = 0;
                correct = 0;
                incorrect = 0;
                totalQuestion = 0;
                start();
            } else {
                console.log("====== Okay come back another time. ======");
            }
        });
    }
} //function start end
