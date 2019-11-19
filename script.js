let STORE = {
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
  