var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I know your name?\n");
console.log("Welcome " + userName +" to my new game -'How well do you know me?'");
var highScore =[
  {
    name:"Akanksha",
    score: 10
  },
  {
    name: "Manisha",
    score: 9
  }
];
var questionAnswer =[
  {
    que: "What is my nick name?\n",
    ans: "Diksha"
  },
  {
    que: "Where do I live?\n",
    ans: "Betul"
  },
  {
    que: "Do I live in joint family?\n",
    ans: "Yes"
  },
  {
    que: "How many siblings do I have?\n",
    ans: "3"
  },
  {
    que: "What is my favorite color?\n",
    ans: "Green"
  },
  {
    que: "What is my favorite TV series?\n",
    ans: "Vampire Diaries"
  },
  {
    que: "What is my birth month?\n",
    ans: "March"
  },
  {
    que: "Who is my favorite, Mom or Dad?\n",
    ans: "Mom"
  },
  {
    que: "Which one do I like most, Cat or Dog?\n",
    ans: "Cat"
  },
  {
    que: "What is my Parrot's name?\n",
    ans: "Kanha"
  },
];
var score = 0;

function userResponse(que,ans)
{
  var userAnswer = readlineSync.question(que);
  if(userAnswer.toUpperCase() === ans.toUpperCase())
  {
   console.log("You are right.");
   score +=1;
  }
  else{
   console.log("You are wrong.");
  }
  console.log("Your Score: " + score);
  console.log("___________________")
}

for(i=0;i<questionAnswer.length;i++)
{
  var currentQuestion = questionAnswer[i];
  userResponse(currentQuestion.que,currentQuestion.ans)
}

console.log("Your final score : "+score);

if(score == highScore[0].score)
{
  console.log("Yay! You have beaten the high scorer. \nPlease send us screenshot to update our database.\nThank You")
}
else if(score == highScore[1].score)
{
  console.log("Yay! You have beaten the second high scorer. \nPlease send us screenshot to update our database.\nThank You")
}
else
{
  console.log("Thank You for taking this quiz.")
}