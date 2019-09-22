import './style.scss';
import {store} from './store/store';
import Search from './components/search';
import Table from './components/table';

const header = new Search();
header.createHeader();

console.log(store.getState());

function main() {
    const app = new Table(store.getState(), document.querySelector('.root'));
    console.log(app);
    return app.createTable();
};

document.addEventListener('DOMContentLoaded', main);