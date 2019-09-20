import db from '../../data';

const initial_state = {
    users: db,
};

export default (state = initial_state, action) => {
    switch (action.type) {
    default:
        return state;
    }
};