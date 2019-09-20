import {combineReducers} from 'redux';
import users_reducer from './users_reducer';

export default combineReducers({
    user: users_reducer
});
