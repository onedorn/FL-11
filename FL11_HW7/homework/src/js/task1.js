let email = prompt('Hey, enter your "email" ', '');

if (email === null || email === '') {
    alert('"Canceled!"');

} else if (email.length <= 6) {
    alert(' “I don\'t know any emails having name length less than 6 symbols”. ');

} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    const password = prompt('Enter your password', '');

    if (password === null || password === '') {
        alert('"Canceled"');
    } else if (password === 'UserPass' || password === 'AdminPass') {
        alert('Logged in!')
    } else {
        alert('Wrong password');
    }

} else {
    alert('"I don\'t know you! "');
}