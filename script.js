//need a function to display start page to document
$(function () {
  beginQuiz();
  handleAnswerFeedback();
  handleAnswerSubmits();
  renderQuestionPage();
});

let state = {
  questions: [
    {
      question:"Who is Ash's first pokemon?",
      answers: ["Pikachu",
                "Squirtle",
                "Bulbasaur",
                "Charmander"],
      correctAnswer: "Pikachu"
    },
    {
      question:"Which pokemon destroyed the lab at Cinnabar island?",
      answers: ["Pikachu", "Infernape", "Zizagoon", "Mewtwo"],
      correctAnswer: "Mewtwo"
    },
    {
      question:"Who is the biggest pokemon?",
      answers: ["Onyx", "Gyrados", "Wailord", "Kyorgre"],
      correctAnswer: "Wailord"
    },
    {
      question:"What is dragon type weak against??",
      answers: ["bug", "dark", "fire", "dragon"],
      correctAnswer: "dragon"
    },
    {
      question:"Who is the fastest pokemon?",
      answers: ["deoxys", "Ninjask", "Mewtwo", "electrode"],
      correctAnswer: "deoxys"
    },
    {
      question:"Who is the pre-evolve form of pikachu?",
      answers: ["raichu", "pichu", "palkia", "lucario"],
      correctAnswer: "pichu"
    },
    {
      question:"Who was the first pokemon ever created?",
      answers: ["rhydon", "mew", "pikachu", "charizard"],
      correctAnswer: "rhydon"
    },
    {
      question:"Who's bike did ash destroy?",
      answers: ["Misty", "Brock", "Gary", "Professor Oak"],
      correctAnswer: "Misty"
    },
    {
      question:"Where is the elite four located?",
      answers: ["Pallet Town", "Fuschia city", "Vermillion city", "Indigo Plateu"],
      correctAnswer: "Indigo Plateau"
    },
    {
      question:"What pokemon is named after Jackie Chan?",
      answers: ["Hitmonlee", "Hitmontop", "Hitmonchan", "Machamp"],
      correctAnswer: "Hitmonchan"
    }
    ],
    currentQuestionIndex: 0,
    correctCount: 0,
    quizStarted: false,
      // need to have the feedback box cleared
    // renderQuestionFeedback: text()
};


function resetQuiz() {
  state.correctCount = 0;
  state.currentQuestionIndex = 0;
}

function resetQuiz() {
  state.correctCount = 0;
  state.currentQuestionIndex = 0;
}

//need a function to display:question number, corresponding question and answer choices, and a submit (Next) button
//need a function to close popup and move to/display next question
function renderQuestionPage() {
  var currentQuestionObj = state.questions[state.currentQuestionIndex];
  renderQuestion();
  renderQuestionChoices(currentQuestionObj.answers);
  // $(".popup-inner").addClass("hidden");
}

function renderQuestion() {
  var progressHTML = "<span>(" + (state.currentQuestionIndex + 1) + '/' + state.questions.length + ")</span>"
  var questionText = state.questions[state.currentQuestionIndex].question;
  $(".js-question-text").html(progressHTML + questionText);
  // console.log(renderQuestion);
}

function renderQuestionChoices(answers) {
  $("#question-form label").each(function (index,label) {
    $(this).find("input").attr("value", answers[index]);
    $(this).find("input").prop("checked", false);
    $(this).find("span").text(answers[index]);
    // $("#submit-answer").addClass("hidden");
    //is this where I might add in code to make an answer choice REQUIRED?
    //also add a removeClass("hidden") on the #submit-answer button if I decide to go that route?
  });
}

//function to display results
function renderFinalResults() {
  $("#my-quiz").addClass("hidden");
  $("#results-page").removeClass("hidden");
  $("#retake-button").removeClass("hidden");
  var element = $(".js-final-results");
  element.html("<h2>" + "You got" + ' ' + state.correctCount + ' ' + "out of" + ' ' + state.questions.length + ' ' + "correct" + "</h2>");
  handleQuizRestart();
}

function checkAnswer(userChoice) {
  var correctChoice = state.questions[state.currentQuestionIndex].correctAnswer;
  // console.log(state.currentQuestionIndex,state.questions[state.currentQuestionIndex]);
  if (userChoice === correctChoice) {
    state.correctCount++;
    renderQuestionFeedback(true);
    // $("#submit-answer").removeClass("hidden");
    state.currentQuestionIndex++;
  }
  else if (userChoice === undefined) {
    renderQuestionFeedback ("unanswered");
  }
  else {
    renderQuestionFeedback (false);
    state.currentQuestionIndex++;
  }
  if (state.currentQuestionIndex == state.questions.length) {
    renderFinalResults()
  }
  else {
    renderQuestionPage();
  }
  // console.log(userChoice);
}

//need a function to call "popup-feedback" and display in DOM
function renderQuestionFeedback(response) {
  var feedback = $(".popup-inner");
  if (response === true) {
    feedback.find("h2").text("That was correct!");
  }
  else if (response === false) {
    feedback.find("h2").text("Sorry your answer was not correct.");
  }
  else if (response === "unanswered") {
    feedback.find("h2").text("Must answer question");
  }
}

//need a function to change the page to question page upon button click (Take Quiz!)
function beginQuiz() {
 $("#start-button").click(function (e) {
   $("#my-quiz").removeClass("hidden");
   $("#start-button").addClass("hidden");
  // console.log("take quiz clicked");
 }); 
}

function handleQuizRestart() {
    $("#retake-button").click(function (e) {
  // $("#start-quiz").click(function (e) {
    $("#my-quiz").removeClass("hidden");
    $("#retake-button").addClass("hidden");
    $("#txt-feedback").empty();
    $(".js-final-results").text("");
    resetQuiz();
    renderQuestionPage();
  });
}


//need a function to evaluate whether user is correct/incorrect
//should this be coded as a loop to evaluate if answer is correct/incorrect?
function handleAnswerSubmits() {
  $("#submit-answer").click(function (e) {
  e.preventDefault();
  // $(".popup-inner").removeClass("hidden");
  var userChoice = $("input[name='answerChoice']:checked").val();
  renderQuestionFeedback();
  checkAnswer(userChoice);
  });
}

//need a function to open a feedback window after answer is submitted
function handleAnswerFeedback() {
  // to open...
  $("#submit-answer").on("click", function (e) {
    e.preventDefault();
    var targetPopupClass = $(this).attr("data-popup-open");
    $(`[data-popup="' + targetPopupClass + '"]`).fadeIn(250);
    e.preventDefault();
  });
  //to close...
  $("#close-feedback-modal").on("click", function (e) {
    var targetPopupClass = $(this).attr("data-popup-close");
    $(`[data-popup = "' + targetPopupClass + '"]`).fadeOut(250);
    e.preventDefault();
    renderQuestionFeedback();
  });
}



//need  function(s) to display results (# out of 10), final message, display "retake-button" which should go back to start page
function resetQuiz() {
  state.correctCount = 0;
  state.currentQuestionIndex = 0;
}