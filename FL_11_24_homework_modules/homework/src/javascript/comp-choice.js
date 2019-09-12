const computer_choice = () => {
    
    let choices = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
    
};


export { computer_choice };
