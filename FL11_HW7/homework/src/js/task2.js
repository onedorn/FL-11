const game = confirm('Do you want to play a game?');
let mathRange = 9;
let maxInteger = 8;
let rounds = 3;
let counter = 1;
let userGuess = '';


if ( game === false ) {
  alert('You did not become a billionaire, but can.');
} else {
  
  let randomNumber = Math.floor( Math.random() * mathRange );
  let possiblePrize = 100;
  let totalPrize = 0;
  console.log(randomNumber);

  while ( userGuess !== randomNumber ) {
    userGuess = +prompt(
      `
      Enter a number of pocket on which the ball could land 
      Enter the number between 0 and ${maxInteger}
      Attempts left: ${rounds}
      Total prize:  ${totalPrize}$
      Possible prize on current attempt: ${possiblePrize}$
      `, '');
      counter += 1;
      

      if (counter > rounds ) {
        alert('You have any tries left.')
        break;
      } 

      if (userGuess === randomNumber) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        confirm('Do you want to play again?');
      }
  }


}
