import {store} from '../store';
import {REMOVE_USER, SHOW_MORE} from './types';

export default function dispatchActions(e) {
    if (e.target.className === 'btn btn-danger') {
        store.dispatch({
            type: REMOVE_USER,
            id: e.target.id
        });
    }
    if (e.target.className === 'load_more') {
        store.dispatch({
            type: SHOW_MORE
        });
    }
};