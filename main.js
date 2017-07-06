function rps (you, computer) {
  let tie = 'Looks like a tie!';
  let lose = 'You lose!'
  let win = 'You win!'
  if (you === 'paper' && computer === 'paper') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + tie);
} else if (you === 'rock' && computer === 'paper') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + lose);
} else if (you === 'scissors' && computer === 'paper') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + win);
} else if (you === 'rock' && computer === 'rock') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + tie);
} else if (you === 'scissors' && computer === 'rock') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + lose);
} else if (you === 'paper' && computer === 'rock') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + win);
} else if (you === 'scissors' && computer === 'scissors') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + tie);
} else if (you === 'paper' && computer === 'scissors') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + lose);
} else if (you === 'rock' && computer === 'scissors') {
  window.alert ('You chose ' + you + ' and computer chose ' + computer + '. ' + win);
}
}

for (var i = 0; i < 10; i++) {

let hand = ['rock','paper','scissors'];
let rand = hand[Math.floor(Math.random() * hand.length)];
let computer = rand;
let you = prompt('Please type one of the following rock, paper, or scissors');

rps(you, computer);
}

//keep track of score and notify of score at the end of 10.
