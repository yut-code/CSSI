// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
  // Select the spans & divs where we'll display outputs.
  const pointsSpan = document.querySelector("#points");
  const scoreSpan = document.querySelector("#score");
  const questionDiv = document.querySelector("#question");
  
  // Select the buttons and input fields where users can provide inputs.
  const randomButton = document.querySelector("#random");
  const hardButton = document.querySelector("#hard");
  const catPunsButton = document.querySelector("#catPuns");
  const submitButton = document.querySelector("#submit");
  const answerInputBox = document.querySelector("#userAnswer");
  
  // Starting variables - we'll fill replace these with the API
  let currentQuestion =
    "The Japanese name for this grass-type pokemon, Fushigidane, is a pun on the phrase 'strange seed.'";
  let currentAnswer = "bulbasaur";
  let currentPoints = 300;
  let currentScore = 0;
  
  // Function to update the text on the board to match our variables.
  // function updateBoard() {lines below}
  const updateBoard = () => {
    pointsSpan.innerHTML = currentPoints;
    scoreSpan.innerHTML = currentScore;
    // Update the question too.
    questionDiv.innerHTML = currentQuestion;
  };
  
  // Call the function!
  updateBoard()
  
  // Finish this function that checks the user's answer.
  const checkAnswer = () => {
    console.log("You guessed:", answerInputBox.value);
    console.log("Correct answer:", currentAnswer);
  };
  
  // Attach that function to the submit button via an event listener.
  function submitAnswer(){
    console.log("inside submitAnswer")
    let inputAnswer = answerInputBox.value;
    if (currentAnswer===inputAnswer){
      currentScore += currentPoints;
    }
    else {
      currentScore -= currentPoints;
    }
    updateBoard();
  }
  
  submitButton.addEventListener("click", submitAnswer);
  
  // Write out an API call for each of the three question byttons on screen.
  
  randomButton.addEventListener("click", fetchRandom);
  
  async function fetchRandom() {
    let response = await fetch("https://jeopardy.wang-lu.com/api/random"); 
    let json = await response.json();
    console.log(json[0].question);
    currentQuestion = json[0].question;
    currentPoints = json[0].value;
    currentAnswer = json[0].answer;
    updateBoard();
  }
  
  hardButton.addEventListener("click", fetchHard);
  async function fetchHard(){
    let response = await fetch("https://jeopardy.wang-lu.com/api/clues?value=1000"); 
    let json = await response.json();
    let index = getRandomInt(json.length-1)
    console.log(json[index].question);
    currentQuestion = json[index].question;
    currentPoints = json[index].value;
    currentAnswer = json[index].answer;
    updateBoard();
  }
  
  catPunsButton.addEventListener("click", fetchCategory);
  async function fetchCategory(){
    let response = await fetch("https://jeopardy.wang-lu.com/api/clues?category=6"); 
    let json = await response.json();
    let index = getRandomInt(json.length-1)
    console.log(json[index].question);
    currentQuestion = json[index].question;
    currentPoints = json[index].value;
    currentAnswer = json[index].answer;
    updateBoard();}
  