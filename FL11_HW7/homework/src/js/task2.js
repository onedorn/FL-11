const game = confirm('Do you want to play a game?');


// STEP 1: Start a game.
if ( game === false) {
    alert('You did not become a billionaire, but can.');
  } 
  
  while (game === true) {
    let num = 9;
    const random = Math.floor(Math.random() * num );
    const input = prompt(`
      Enter the number between 0 and 8
      Attempts left: 3
      Total prize:  ${num}$
      Possible prize on current attempt: ${num}$
    `, '');

  }