import User from './user';

function Table(state, load_to) {
    this.root = load_to;
    this.state = state;
    this.user = new User();
    this.users = this.state.users.users.slice(0, this.state.users.limit);
    // this.limit = this.state.users.limit;
    // this.filtered = this.state.users.users.slice(0, this.limit);
    console.log(this.user);
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
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    table.innerHTML = `
        ${this.tableHead()}
        <tbody>
            ${this.state.users.limit > 0 ? this.user.createUser(this.users) : this.notFound}
        </tbody>
    `;

    this.root.appendChild(table);
};

export default Table;