let theGameStart = confirm( 'Do you want to play a game?' );
let magicNumbers = { 'randomLevelOne': 9, 'randomLevelTwo': 13, 'rangeInteger': 8, 'maxPrizeDivider': 2 };
let gameSetUp = { 'maxPrize': 100, 'totalPrize': 0, 'maxAttempts': 3, 'maxPrizeReset': 100, 'multiplier': 2 };

if (theGameStart === false) {
  alert( 'You did not become a billionaire, but can.' );
} else {
  
  do {
    
      for ( gameSetUp.maxAttempts = 3; gameSetUp.maxAttempts > 0; gameSetUp.maxAttempts-- ) {

        let randomNumber = Math.floor( Math.random() * magicNumbers.randomLevelOne );
        let userGuess = +prompt( `
          Enter the number between 0 and ${ magicNumbers.rangeInteger }
          Attempts left: ${ gameSetUp.maxAttempts }
          Total prize:  ${ gameSetUp.totalPrize }$
          Possible prize on current attempt: ${ gameSetUp.maxPrize }$
          `, '');

        if ( userGuess === randomNumber ) {
          gameSetUp.totalPrize += gameSetUp.maxPrize;  
          gameSetUp.maxPrize = Math.floor( gameSetUp.maxPrize / magicNumbers.maxPrizeDivider );
          theGameStart = 
          confirm( `Congratulation, you won! Your prize is: ${ gameSetUp.totalPrize } $. Do you want to continue ?`);

          if( theGameStart ) {
            randomNumber = Math.floor( Math.random() * magicNumbers.randomLevelTwo );
            magicNumbers.rangeInteger = 8;
            magicNumbers.rangeInteger += 4;
            gameSetUp.maxPrize = gameSetUp.maxPrizeReset * gameSetUp.multiplier;
            gameSetUp.maxAttempts = 4;
          } else {
            alert(`Thank you for your participation. Your prize is: ${ gameSetUp.totalPrize }$`);
            break;
          }
        } else {
          gameSetUp.maxPrize = Math.floor( gameSetUp.maxPrize / magicNumbers.maxPrizeDivider );
        }

        if( gameSetUp.maxAttempts === 1 ) {
          alert(`Thank you for your participation. Your prize is: ${ gameSetUp.totalPrize }$`);
          theGameStart = confirm('Do you want to play again?');
          if( theGameStart ) {
            magicNumbers.rangeInteger = 8;
            gameSetUp.totalPrize = 0;
            gameSetUp.maxPrize = 100;
          } else {
            alert(`Thank you for your participation. Your prize is: ${ gameSetUp.totalPrize }$`);
            theGameStart = false;
          }
        }
      }
    } while ( theGameStart );
  } 