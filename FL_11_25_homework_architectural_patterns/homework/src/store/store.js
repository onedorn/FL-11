import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/root_reducer';

const initialState = {};

export const store = createStore(rootReducer, initialState, composeWithDevTools());
