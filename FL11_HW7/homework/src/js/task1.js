// let email = prompt('Hey, enter your "email" ', '');

// if (email === null || email === '') {
//     alert('"Canceled!"');

// } else if (email.length <= 6) {
//     alert(' “I don\'t know any emails having name length less than 6 symbols”. ');

// } else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
//     const password = +prompt('Enter your password', '');

//     if (password === null || password === '') {
//         alert('"Canceled"');
//     } else if (password === 'UserPass' || password === 'AdminPass') {
//         let changePass = confirm('Do you want to change your password?', '');

//         if (changePass === false) {
//             alert( '“You have failed the change.” ');
//         } else if (changePass === true ) {
//             let oldPass = +prompt('STEP 2: \nWrite you old password.', '');
            
//             if (oldPass <=5 ) {
//                 alert('“It’s too short password. Sorry.”');
//             } else if (oldPass > 5) {
//                 let newPass = +prompt('STEP 3: \n Create new password!', '');
//             } else if (newPass === password) {
//                 prompt('Enter new password again');
//             } 

        

//         } else {
//             alert('Wrong password');
//         }

// } else {
// alert('"I don\'t know you! "');
// }
// }



const email = prompt('Please, enter your "email" ', '');
let password = '';

    // Step 1. Check login
    if (email === '' || email === null) {
        alert('Canceled!');

    } else if (email.length < 6 ) {
        alert("I don't know any emails having name length less than 6 symbols.");

    } else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
       console.log( password = prompt('Please, enter your password'));
       
        // Step 2. Check password:
        if (password === '' || password === null) {
            alert('Canceled!');

        } else if ( password === 'UserPass' || password === 'AdminPass') {
            confirm('Do you want to change your password?');

        } else {
            alert('Wrong password');
        }

    } else {
        alert("I don't know you!");
    }