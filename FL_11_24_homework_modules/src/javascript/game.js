import { computer_choice } from "./comp-choice.js";
import {winner, loser, draw} from './index.js';


const game = (user_choice) => {
    const get_comp_choice = computer_choice();
    switch (user_choice + get_comp_choice) {
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            winner(user_choice, get_comp_choice);
            break;
            
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            loser(user_choice, get_comp_choice);
            break;

        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(user_choice, get_comp_choice);
            break;
    }
}

export { game };