import User from './user';
import ShowMore from './show_more';

function Table(state, load_to) {
    this.root = load_to;
    this.state = state;
    this.users = this.state.users.users;
    this.limit = this.state.users.limit;
    this.user = new User();
    this.show_more = new ShowMore();
    this.filtered = this.users.slice(0, this.limit);
};

Table.prototype.notFound = function() {
    return `
        <tr class="text-center">
            <td colspan="7">
                <span>
                    No user has been found!
                </span>
            </td>
        </tr>
    `;
};

Table.prototype.tableHead = function() {
    return `
        <thead class="bg-info text-white">
            <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Phone number</th>
                <th scope="col">Timezone</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
    `;
};

Table.prototype.createTable = function() {
    this.root.innerHTML += `
        <table class="table table-striped">
            ${this.tableHead()}
            <tbody>
                ${this.limit > 0 ? this.user.createUser(this.filtered) : this.notFound}
            </tbody>
        </table>
        ${this.show_more.renderLoadMore(this.limit)}
    `;
};

Table.prototype.filterUsers = function() {
    const table = document.querySelector('.table');
    const search = document.querySelector('#search');
    const filteredUsers = this.users.filter((user) =>
        user.name.toLowerCase().includes(search.value.toLowerCase())
    );
    document.querySelector('.load-more__paragraph').innerHTML =
        `Displayed ${filteredUsers.length} users out of ${this.users.length}`;

    if (filteredUsers.length <= 0) {
        table.innerHTML = this.notFound;
    } else {
        let output = '';
        for (let user of filteredUsers) {
            output += this.user.createUser([user]);
        }
        table.innerHTML = output;
    }
};

export default Table;