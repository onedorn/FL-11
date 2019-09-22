import db from '../../data';

const initial_state = {
    users: db,
    limit: 5
};

export default (state = initial_state, action) => {
    switch (action.type) {
    default:
        return state;
    }
};