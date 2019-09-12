import '../scss/main.scss';
import { game } from "./game.js";

let user_counter = 0;
let comp_counter = 0;

let user_score_board = document.querySelector('#user-score');
let comp_score_board = document.querySelector('#comp-score');
let result_string = document.querySelector('.result > h1');

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let sciss = document.querySelector('#sciss');

let btn = document.querySelector('button');
let footer_p = document.querySelector('footer > p');

const main = () => {
    rock.addEventListener('click', () =>{
        game('Rock');
    })
    
    paper.addEventListener('click', () =>{
        game('Paper');
    })
    
    sciss.addEventListener('click', () =>{
        game('Scissors');
    })

    btn.addEventListener('click', () => {
        user_counter = 0;
        comp_counter = 0;
        user_score_board.innerHTML = 0;
        comp_score_board.innerHTML = 0;
        footer_p.style.display = 'block';
        btn.style.display = 'none';
        result_string.innerHTML = `LET'S PLAY AGAIN!`;
    })
}
main();



const winner = (user, comp) => {
    if (user_counter < 3 && comp_counter < 3) {
        user_counter++;
        user_score_board.innerHTML = user_counter;
        comp_score_board.innerHTML = comp_counter;
        result_string.innerHTML = `${user} beats ${comp}. You Win!`;
        reset_game();
    } 
}

const loser = (user, comp) => {
    if(user_counter < 3 && comp_counter < 3) {
        comp_counter++;
        user_score_board.innerHTML = user_counter;
        comp_score_board.innerHTML = comp_counter;
        result_string.innerHTML = `${user} loses to  ${comp}. You lost!`;
        reset_game();
    } 
}
    
const draw = (user, comp) => {
    if (user_counter < 3 && comp_counter < 3) {
        user_score_board.innerHTML = user_counter;
        comp_score_board.innerHTML = comp_counter;
        result_string.innerHTML = `${user} equal to ${comp}. It's a draw!`;
    }
}


const reset_game = () => {
    
    if (user_counter === 3) {
        result_string.innerHTML = `YOU SMASHED COMP! SCORE ( ${user_counter} : ${comp_counter} )`;
        footer_p.style.display = 'none';
        btn.style.display = 'block';
    }

    if (comp_counter === 3) {
        result_string.innerHTML = `YOU LOSE TO COMP! SCORE ( ${user_counter} : ${comp_counter} )`;
        footer_p.style.display = 'none';
        btn.style.display = 'block';
    }

}

export {winner, loser, draw};