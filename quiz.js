// Define arrays containing quiz data for different topics
// array of general knowledge quiz objects
let generaldata=[
    {
      question: "Who was the first person to step onto the surface of the Moon?",
      choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
      correctAnswer: "Neil Armstrong"
    },
    {
      question: "Which city hosted the first modern Olympic Games in 1896?",
      choices: ["Paris", "London", "Athens", "Rome"],
      correctAnswer: "Athens"
    },
    {
      question: "What is the capital city of Australia?",
      choices: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
      correctAnswer: "Canberra"
    },
    {
      question: "Which country is known as the (Land of the Rising Sun)?",
      choices: ["China", "South Korea", "Japan", "Vietnam"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the largest organ in the human body?",
      choices: ["Liver", "Skin", "Heart", "Brain"],
      correctAnswer: "Skin"
    },
    {
      question: "Who wrote the play (Romeo and Juliet)?",
      choices: ["William Shakespeare", "Christopher Marlowe", "John Milton", "Geoffrey Chaucer"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the capital city of Canada?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa"
    },
    {
      question: "Who was the first female Prime Minister of the United Kingdom?",
      choices: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
      correctAnswer: "Margaret Thatcher"
    },
    {
      question: "What is the longest river in the world?",
      choices: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
      correctAnswer: "Amazon River"
    },
    {
      question: "What is the capital city of Brazil?",
      choices: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      correctAnswer: "Brasília"
    }
  
  ];
//array of nature quiz objects
let naturedata=[
    {
      question: "Which layer of the Earth's atmosphere is closest to the surface?",
      choices: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correctAnswer: "Troposphere"
    },
    {
      question: "What is the largest mammal on Earth?",
      choices: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Which of the following is not a type of rock?",
      choices: ["Igneous", "Sedimentary", "Metamorphic", "Transparent"],
      correctAnswer: "Transparent"
    },
    {
      question: "What is the process by which water vapor turns into liquid water?",
      choices: ["Melting", "Evaporation", "Condensation", "Sublimation"],
      correctAnswer: "Condensation"
    },
    {
      question: "Which of the following is a renewable energy source?",
      choices: ["Coal", "Natural Gas", "Solar", "Petroleum"],
      correctAnswer: "Solar"
    },
    {
      question: "What is the process by which plants make their own food using sunlight?",
      choices: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
      correctAnswer: "Photosynthesis"
    },
    {
      question: "What is the process by which an animal changes its physical form as it grows?",
      choices: ["Photosynthesis", "Metamorphosis", "Germination", "Evolution"],
      correctAnswer: "Metamorphosis"
    },
    {
      question: "What is the term for the process by which rocks are broken down into smaller fragments by chemical reactions with water, air, or other substances?",
      choices: ["Erosion", "Weathering", "Deposition", "Sedimentation"],
      correctAnswer: "Weathering"
    },
    {
      question: "Which planet is known as the (Red Planet)?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the name for a group of fish?",
      choices: ["Flock", "Herd", "School", "Pack"],
      correctAnswer: "School"
    }
  
  ];
  //array of capitals quiz objects
  let capitalsdata=[
    {
      question: "What is the capital city of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra"
    },
    {
      question: "What is the capital city of Japan?",
      choices: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
      correctAnswer: "Tokyo"
    },
    {
      question: "Which city serves as the capital of France?",
      choices: ["Marseille", "Lyon", "Paris", "Nice"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the capital city of Brazil??",
      choices: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      correctAnswer: "Brasília"
    },
    {
      question: "What is the capital city of Russia?",
      choices: ["Saint Petersburg", "Moscow", "Novosibirsk", "Vladivostok"],
      correctAnswer: "Moscow"
    },
    {
      question: "Which city serves as the capital of Italy?",
      choices: ["Rome", "Milan", "Florence", "Naples"],
      correctAnswer: "Rome"
    },
    {
      question: "What is the capital city of Canada?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa"
    },
    {
      question: "What is the capital city of South Africa?",
      choices: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
      correctAnswer: "Pretoria"
    },
    {
      question: "Which city is the capital of Argentina?",
      choices: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
      correctAnswer: "Buenos Aires"
    },
    {
      question: "What is the capital city of Spain?",
      choices: ["Barcelona", "Madrid", "Valencia", "Seville"],
      correctAnswer: "Madrid"
    }
  
  ];
  //array of sports quiz objects
  let sportsdata=[
    {
      question: "What is the national sport of Canada?",
      choices: ["Soccer", "Ice Hockey", "Lacrosse", "Curling"],
      correctAnswer: "Ice Hockey"
    },
    {
      question: "Which country is famous for its dominance in cricket?",
      choices: ["England", "India", "Australia", "South Africa"],
      correctAnswer: "Australia"
    },
    {
      question: "Who won the FIFA World Cup in 2018?",
      choices: [" Argentina", "Germany", "Brazil", "France"],
      correctAnswer: "France"
    },
    {
      question: "Which sport is known as (The Beautiful Game)?",
      choices: ["Rugby", "Cricket", "Soccer", "Golf"],
      correctAnswer: "Soccer"
    },
    {
      question: "What is the nickname of the New Zealand national rugby union team?",
      choices: ["All Blacks", "Wallabies", "Springboks", "Pumas"],
      correctAnswer: "All Blacks"
    },
    {
      question: "Which player has won the most FIFA Ballon d'Or awards?",
      choices: ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona"],
      correctAnswer: "Lionel Messi"
    },
    {
      question: "Which team won the UEFA Champions League in the 2020-2021 season?",
      choices: ["Real Madrid", "Manchester City", "Chelsea", "Bayern Munich"],
      correctAnswer: "Chelsea"
    },
    {
      question: "Which player holds the record for the most goals scored in a single Premier League season?",
      choices: ["Mohamed Salah", "Alan Shearer", "Cristiano Ronaldo", "Luis Suárez"],
      correctAnswer: "Mohamed Salah"
    },
    {
      question: "What is the nickname of the Argentina national football team?",
      choices: ["Albiceleste", "Samba Boys", "La Roja", "The Indomitable Lions"],
      correctAnswer: "Albiceleste"
    },
    {
      question: "Who is the all-time top scorer in the history of the FIFA World Cup?",
      choices: ["Miroslav Klose", "Pelé", "Ronaldo", "Gerd Müller"],
      correctAnswer: "Miroslav Klose"
    }
  
  ];
// Get buttons for each topic and add event listeners to them
  let generalbutton = document.querySelector(".topic1button");
  generalbutton.addEventListener("click", generalknowledge);

  let naturebutton = document.querySelector(".topic2button");
  naturebutton.addEventListener("click", nature);

  let capitalsbutton = document.querySelector(".topic3button");
  capitalsbutton.addEventListener("click", capitals);

  let sportsbutton=document.querySelector(".topic4button");
  sportsbutton.addEventListener("click", sports);

// Get elements for displaying questions, choices, and results
  let questioncontent=document.getElementById('question')
  let choicecontent = document.getElementById('choices')
  let resultcontent = document.getElementById('result')
// Initialize variables for tracking current question and score
  let currentquestion = 0
  let score = 0
  // Function to start the general knowledge quiz
  function generalknowledge(){
    // Hide the topic selection and display the quiz container
    document.querySelector(".choosetopic").style.display = "none";
    document.querySelector(".quiz-container").style.display = "flex";
// Function to display current question and choices
  function  displayquestion() {
    // Get current quiz data
      let currentquizdata= generaldata[currentquestion];
      // Display question
      questioncontent.textContent =currentquizdata.question;
      choicecontent.innerHTML = '';
      // Display choices as buttons
      for (let i = 0; i < currentquizdata.choices.length; i++) {
        let choice = currentquizdata.choices[i];
        let button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.addEventListener('click', checkAnswer);
        choicecontent.appendChild(button);
        choicecontent.appendChild(document.createElement('br'));
      }
  }
  // Function to check the selected answer
  function checkAnswer(event){
      let selectedchoice = event.target.textContent;
    let currentquizdata = generaldata[currentquestion];
    // Increase score if answer is correct
    if (selectedchoice == currentquizdata.correctAnswer) {
      score++;
   
    }
    currentquestion++;
    // Display next question or result if all questions are answered
    if (currentquestion < generaldata.length) {
      displayquestion();
    } else {
      showResult();
      displayresult();
    }
  }

  // Function to display quiz result
  function showResult() {
    questioncontent.textContent = '';
    choicecontent.textContent = '';
    // Display result message based on score
  if (score === generaldata.length) {
      resultcontent.textContent = `Congratulations! You got all the answers right! Your score: ${score}/${generaldata.length}`;
    } else {
      resultcontent.textContent = `Great effort! Keep trying to improve your score! Your score: ${score}/${generaldata.length}`;
    }
  }
  
  displayquestion();
}
function displayresult(){
document.querySelector('.resultdiv').style.display = "flex";
document.querySelector('.quiz-container').style.display = "none";

}
// Similar functions for nature, capitals, and sports quizzes

function nature(){
  document.querySelector(".choosetopic").style.display = "none";
    document.querySelector(".quiz-container").style.display = "flex";
    function  displayquestion() {
      // Get current quiz data
        let currentquizdata= naturedata[currentquestion];
        // Display question
        questioncontent.textContent =currentquizdata.question;
        choicecontent.innerHTML = '';
        // Display choices as buttons
        for (let i = 0; i < currentquizdata.choices.length; i++) {
          let choice = currentquizdata.choices[i];
          let button = document.createElement('button');
          button.textContent = choice;
          button.classList.add('choice');
          button.addEventListener('click', checkAnswer);
          choicecontent.appendChild(button);
          choicecontent.appendChild(document.createElement('br'));
        }
    }
  
  function checkAnswer(event){
      let selectedchoice = event.target.textContent;
    let currentquizdata = naturedata[currentquestion];
    if (selectedchoice == currentquizdata.correctAnswer) {
      score++;
   
    }
    currentquestion++;
    if (currentquestion < naturedata.length) {
      displayquestion();
    } else {
  
      showResult();
      displayresult();
    }
  }
  
  function showResult() {
    questioncontent.textContent = '';
    choicecontent.textContent = '';
  if (score === naturedata.length) {
      resultcontent.textContent = `Congratulations! You got all the answers right! Your score: ${score}/${naturedata.length}`;
    } else {
      resultcontent.textContent = `Great effort! Keep trying to improve your score! Your score: ${score}/${naturedata.length}`;
    }
  }
  
  displayquestion();
}


function capitals(){
  document.querySelector(".choosetopic").style.display = "none";
    document.querySelector(".quiz-container").style.display = "flex";
    function  displayquestion() {
      // Get current quiz data
        let currentquizdata= capitalsdata[currentquestion];
        // Display question
        questioncontent.textContent =currentquizdata.question;
        choicecontent.innerHTML = '';
        // Display choices as buttons
        for (let i = 0; i < currentquizdata.choices.length; i++) {
          let choice = currentquizdata.choices[i];
          let button = document.createElement('button');
          button.textContent = choice;
          button.classList.add('choice');
          button.addEventListener('click', checkAnswer);
          choicecontent.appendChild(button);
          choicecontent.appendChild(document.createElement('br'));
        }
    }
  
  function checkAnswer(event){
      let selectedchoice = event.target.textContent;
    let currentquizdata = capitalsdata[currentquestion];
    if (selectedchoice == currentquizdata.correctAnswer) {
      score++;
   
    }
    currentquestion++;
    if (currentquestion < capitalsdata.length) {
      displayquestion();
    } else {
  
      showResult();
      displayresult();
    }
  }
  
  function showResult() {
    questioncontent.textContent = '';
    choicecontent.textContent = '';
  if (score === capitalsdata.length) {
      resultcontent.textContent = `Congratulations! You got all the answers right! Your score: ${score}/${capitalsdata.length}`;
    } else {
      resultcontent.textContent = `Great effort! Keep trying to improve your score! Your score: ${score}/${capitalsdata.length}`;
    }
  }
  
  displayquestion();
}

function sports(){
  document.querySelector(".choosetopic").style.display = "none";
    document.querySelector(".quiz-container").style.display = "flex";
    function  displayquestion() {
      // Get current quiz data
        let currentquizdata= sportsdata[currentquestion];
        // Display question
        questioncontent.textContent =currentquizdata.question;
        choicecontent.innerHTML = '';
        // Display choices as buttons
        for (let i = 0; i < currentquizdata.choices.length; i++) {
          let choice = currentquizdata.choices[i];
          let button = document.createElement('button');
          button.textContent = choice;
          button.classList.add('choice');
          button.addEventListener('click', checkAnswer);
          choicecontent.appendChild(button);
          choicecontent.appendChild(document.createElement('br'));
        }
    }
  
  function checkAnswer(event){
      let selectedchoice = event.target.textContent;
    let currentquizdata = sportsdata[currentquestion];
    if (selectedchoice == currentquizdata.correctAnswer) {
      score++;
   
    }
    currentquestion++;
    if (currentquestion < sportsdata.length) {
      displayquestion();
    } else {
  
      showResult();
      displayresult();
    }
  }
  
  function showResult() {
    questioncontent.textContent = '';
    choicecontent.textContent = '';
  if (score === sportsdata.length) {
      resultcontent.textContent = `Congratulations! You got all the answers right! Your score: ${score}/${sportsdata.length}`;
    } else {
      resultcontent.textContent = `Great effort! Keep trying to improve your score! Your score: ${score}/${sportsdata.length}`;
    }
  }
  
  displayquestion();
}


// Event listener for start button 
let startbutton=document.querySelector('.startbutton')
  startbutton.addEventListener("click", start);
   // Function to start the quiz application
function start(){
    // Hide homepage and display topic selection
document.querySelector(".homepage").style.display = "none";
document.querySelector(".choosetopic").style.display = "flex";
}
// Function to reset the quiz
function resetQuiz() {
  currentquestion = 0;
  score = 0;
  document.querySelector(".resultdiv").style.display = "none";
  document.querySelector(".choosetopic").style.display = "flex";
}

// Event listener for the Try Again button
let tryagainbutton = document.querySelector(".tryagainbutton");
tryagainbutton.addEventListener("click", resetQuiz);
