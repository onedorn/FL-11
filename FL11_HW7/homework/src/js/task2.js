let theGameStart = confirm( 'Do you want to play a game?' );
let maxPrizes = 100;
let integer = 8;
let randomNumber = Math.floor( Math.random() * 9 );
console.log(randomNumber);
let totalPrize = 0;

 if (theGameStart === false) {
   alert('You did not become a billionaire, but can.');
  } else {

    do {

      for (let attempts = 3; attempts > 0; attempts--) {
        let userGuess = +prompt(
          `
          Enter the number between 0 and ${integer}
          Attempts left: ${attempts}
          Total prize:  ${totalPrize}$
          Possible prize on current attempt: ${maxPrizes}$
          `, '');

          if ( userGuess === randomNumber ) {
            totalPrize += maxPrizes;  
            maxPrizes = Math.floor(maxPrizes / 2);
            theGameStart = 
            confirm( `Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue ?`);
            
            if(theGameStart) {
              randomNumber = Math.floor( Math.random() * 13 );
              console.log(randomNumber);
              integer += 4;
              maxPrizes = 100;
              maxPrizes *= 2;
              
            } else {
              alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
              break;
            }

          } else {
            maxPrizes = Math.floor(maxPrizes / 2);
          }

          if( attempts === 1 ) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            theGameStart = confirm('Do you want to play again?');
            if(theGameStart) {
              integer = 8;
              totalPrize = 0;
              maxPrizes = 100;
            } else {
              alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
              theGameStart = false;
            }
          }
        }

    } while (theGameStart);

  } 