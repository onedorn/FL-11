const email = prompt('Please, enter your "email" ', '');
let password = '';
let i = 5;
let z = 6;

  // Step 1. Check login
  if ( email === '' || email === null ) {
    alert('Canceled!');

  } else if ( email.length < z ) {
    alert("I don't know any emails having name length less than 6 symbols.");

  } else if ( email === 'user@gmail.com' || email === 'admin@gmail.com' ) {
      password = prompt('Please, enter your password');
      
      // Step 2. Check password:
      if ( password === '' || password === null ) {
        alert('Canceled!');

      } else if ( password === 'UserPass' || password === 'AdminPass') {

      // Step 3. Change the password:    
        let ask = confirm('Do you want to change your password?');
          
          if ( ask === false ) {
            alert('You have failed the change.');

          } else {
            let old = prompt('STEP 2: \nWrite your old password!');
              
              // Step 4. Old password check/ New password set
              if( old === password ) {
                let newPass = prompt('STEP 3: \nCreate new password!');

                  if( newPass.length < i ) {
                      alert('It’s too short password. Sorry.”');

                  } else if ( newPass.length > i ) {
                      let newPassCheck = prompt('STEP 4: \nConfirm your password again!');

                      if(newPassCheck === newPass) {
                        alert('You have successfully changed your password.')

                      } else {
                        alert('You wrote the wrong password.');

                      }

                  } 

              } 
          } 

      } else {
          alert( 'Wrong password' );
      }

  } else {
      alert( "I don't know you!" );
  }