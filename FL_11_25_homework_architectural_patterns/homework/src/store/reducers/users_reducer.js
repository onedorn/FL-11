import db from '../../data';
import {REMOVE_USER, SHOW_MORE} from '../actions/types';

const initial_state = {
    users: db,
    limit: 5
};

export default (state = initial_state, action) => {
    switch (action.type) {
    case REMOVE_USER:
        return {
            ...state,
            limit: state.limit - 1,
            users: state.users.filter(((user) => user.id !== action.id))
        };
    case SHOW_MORE:
        return {
            ...state,
            limit:
            state.limit + 5 > state.users.length
                ? (state.limit = state.users.length)
                : state.limit + 5
        };
    default:
        return state;
    }
};