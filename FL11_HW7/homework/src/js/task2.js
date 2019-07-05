const game = confirm('Do you want to play a game?');

  // STEP 1: Start a game.
  if ( game === false) {
    alert('You did not become a billionaire, but can.');
  } else {

  // STEP 2. Playing the game.
const answer = Math.floor(Math.random() * 9 );
const rounds = 3;

for (let i = 0; i < rounds; i++) {
  const guess = +prompt(
    `Enter a number of pocket on which the ball could land 
    Enter the number between 0 and 8
    Attempts left: 3
    Total prize:  ${0}$
    Possible prize on current attempt: ${0}$
    `, '');
  
      if (answer === guess ) {
        alert('You guessed correctly!')
        break;
      } else {
        alert(`Ooops!!! You have ${rounds} attempts`);
      }
    }
  }
 