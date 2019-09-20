import UserData from '../data';

const initialState = {
  limit: 5,
  data: UserData
};

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}