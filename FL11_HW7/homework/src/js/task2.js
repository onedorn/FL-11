const game = confirm('Do you want to play a game?');

  // STEP 1: Start a game.
  if ( game === false) {
    alert('You did not become a billionaire, but can.');
  } else {

  // STEP 2. Playing the game.
  const assets = {
    'rounds': 3,
    'prize': '',
    'total': '',
    'random': 9
  };
  const answer = Math.floor(Math.random() * assets.random );

    for (let i = 0; i < assets.rounds; i++) {
      
      const guess = +prompt(
        `
        Enter a number of pocket on which the ball could land 
        Enter the number between 0 and 8
        Attempts left: ${assets.rounds}
        Total prize:  ${assets.prize}$
        Possible prize on current attempt: ${assets.total}$
        `, '');
      
      if ( answer === guess ) {
        alert('You guessed correctly!')
        break;

      } else {
        confirm(`Thank you for your participation. Your prize is: ${assets.total}$`);
      }
    }
  }
 