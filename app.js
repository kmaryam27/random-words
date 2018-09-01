const randomWords = [
  'amigo',
  'apron',
  'attic',
  'bacon',
  'babel',
  'texas',
  'oscar',
  'mango',
  'apple'
];

const randomWordsPick = (randomWords.length * Math.random()) << 0;
//console.log(randomWordsPick);

const shuffle = word => {
  var shuffled = '';
  word = word.split('');
  while (word.length > 0) {
    shuffled += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffled;
};

const shuffledWord = shuffle(randomWords[randomWordsPick]);

document.getElementById(
  'first-letter'
).textContent = shuffledWord[0].toUpperCase();
document.getElementById(
  'second-letter'
).textContent = shuffledWord[1].toUpperCase();
document.getElementById(
  'third-letter'
).textContent = shuffledWord[2].toUpperCase();
document.getElementById(
  'fourth-letter'
).textContent = shuffledWord[3].toUpperCase();
document.getElementById(
  'fifth-letter'
).textContent = shuffledWord[4].toUpperCase();

const inputWord = document.getElementById('input-word');
const isCorrect = document.getElementById('is-correct');
inputWord.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    console.log('event trigger');
    if (inputWord.value.toLowerCase() === randomWords[randomWordsPick]) {
      isCorrect.textContent = 'Correct!';
    } else {
      isCorrect.textContent = 'Wrong!';
    }
  }
});
