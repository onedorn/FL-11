import './style.scss';
import {store} from './store/store';
import Table from './components/table';
import dispatchActions from './store/actions/actions';


function main() {
    const table = new Table(store.getState(), document.querySelector('.root'));
    document
        .querySelector('body')
        .addEventListener('keyup', () => table.filterUsers());
    return table.createTable();
};

store.subscribe(main);

document.addEventListener('DOMContentLoaded', main);
document.addEventListener('click', dispatchActions);