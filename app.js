// List of words with 5 letters.
const randomWords = [
  'amigo',
  'apron',
  'attic',
  'bacon',
  'babel',
  'texas',
  'oscar',
  'mango',
  'apple',
  'paris',
  'japan',
  'idaho',
  'south',
  'north'
];

// IDs from five letters
const firstLetter = document.getElementById('first-letter');
const secondLetter = document.getElementById('second-letter');
const thirdLetter = document.getElementById('third-letter');
const fourthLetter = document.getElementById('fourth-letter');
const fifthLetter = document.getElementById('fifth-letter');
// user input id.
const inputWord = document.getElementById('input-word');
// placeholder to display "correct" or "wrong" to response user input.
const isCorrect = document.getElementById('is-correct');

// function to Shuffle the randomly picked words in to 5 separate letters.
const shuffle = word => {
  let shuffled = '';
  word = word.split('');
  while (word.length > 0) {
    shuffled += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffled;
};

// Pick one random letter from randomWords array.
const randomWordsPick = (randomWords.length * Math.random()) << 0;
// run shuffle function.
const shuffledWord = shuffle(randomWords[randomWordsPick]);

// display shuffled word
firstLetter.textContent = shuffledWord[0].toUpperCase();
secondLetter.textContent = shuffledWord[1].toUpperCase();
thirdLetter.textContent = shuffledWord[2].toUpperCase();
fourthLetter.textContent = shuffledWord[3].toUpperCase();
fifthLetter.textContent = shuffledWord[4].toUpperCase();

// Event handler to user input.   To response user's input of "Enter", keyCode == 13 is used.  Display correct words if user input is incorrect.

inputWord.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    console.log('event trigger');
    if (inputWord.value.toLowerCase() === randomWords[randomWordsPick]) {
      isCorrect.textContent = "You're right!";
    } else {
      isCorrect.textContent = 'Wrong!';
      firstLetter.textContent = randomWords[randomWordsPick][0].toUpperCase();
      secondLetter.textContent = randomWords[randomWordsPick][1].toUpperCase();
      thirdLetter.textContent = randomWords[randomWordsPick][2].toUpperCase();
      fourthLetter.textContent = randomWords[randomWordsPick][3].toUpperCase();
      fifthLetter.textContent = randomWords[randomWordsPick][4].toUpperCase();
    }
  }
});
