
var readlineSync = require("readline-sync");

var score = 0;
var rightCounter = 0;
var rightAnsForLevelingUp = 2;




// data of high score
var highScores = [
  {
    name: "Jitendra",
    score: 7,
  },

  {
    name: "Himanshu",
    score: 3,
  },
]

// array of objects
var questions = [{
  question: "What is the title of the Italian protest song which is played throughout the series? ",
  answer: "Bella ciao"
}, {
  question: "Which other popular Netflix series did Money Heist producer Álex Pina work on, which was released in May 2020? ",
  answer: "White Lines"
},
{
  question: "How much money did the gang manage to steal from the Royal Mint of Spain? ",
  answer: "€2.4 billion"
}, {
  question: "Whose job did National Police Corps inspector Alicia Sierra take over after they left the force? ",
  answer: "Raquel Murillo"
}, {
  question: "What is Tokyo's real name in the series? ",
  answer: "Silene Oliveira"
},
{
  question: "Which country does Helsinki originally come from? ",
  answer: "Serbia"
}, {
  question: " Who instructed Denver to dispose of hostage Mónica? ",
  answer: "Berlin"
}, {
  question: "What is the name of Nairobi's son whom she saw out the window in season three? ",
  answer: "Axel"
},
{
  question: "How many robberies did Berlin say he committed as a jewellery thief? ",
  answer: "27"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " Have you seen money heist. Let's play a quiz! \n");
}

// leveling Up Congratulation Message
function levelingUpCongrMsg(levelCount){
  var curruntLevel = levelCount - 1;
  if(curruntLevel == 2){
    console.log("Congratulations you completed the quiz game "   + "\n" );
  }
  else{
      console.log("Congratulations you completed level " + curruntLevel  + " and Reached to Level " + levelCount + "\n" );
  }
  
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right! \n");
    score = score + 1;
    return 1;
    
  } else {
    console.log("wrong! \n");
    return 0;
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}


function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    var resultOfCurruntQues = play(currentQuestion.question, currentQuestion.answer)
    if(resultOfCurruntQues == 1){
      rightCounter++;
    }
    
    if( i+1  == (rightAnsForLevelingUp + 1) * Math.floor((i+1)/(rightAnsForLevelingUp + 1)))
    {
      if( rightCounter >= rightAnsForLevelingUp){
        rightCounter = 0;
        levelingUpCongrMsg( (i + 1) / ( rightAnsForLevelingUp + 1 ) );
      }
      else {
        console.log("we are not moving forward \n");
        return ;
      }
    }
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


