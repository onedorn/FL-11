import './style.scss';
import {store} from './store/store';
import Search from './components/search';
import Table from './components/table';
import dispatchActions from './store/actions/actions';

function main() {
    const header = new Search();
    header.createHeader();
    const table = new Table(store.getState(), document.querySelector('.root'));
    console.log(table);
    document
        .querySelector('body')
        .addEventListener('keyup', () => table.filterUsers());
    return table.createTable();
};

document.addEventListener('DOMContentLoaded', main);
document.addEventListener('click', dispatchActions);