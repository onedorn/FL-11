import {combineReducers} from 'redux';
import users_reducer from './users_reducer';

export default combineReducers({
    users: users_reducer
});
