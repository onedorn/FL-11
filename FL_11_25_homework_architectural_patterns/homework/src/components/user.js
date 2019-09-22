function User() {
    this.createUser = function(current) {
        let output = '';
        for (let user of current) {
            const {name, location, email, phone, picture, timezone, id} = user;
            output += `
                <tr>
                    <th scope="row">
                        <img src="${picture}" class="img-thumbnail img"/>
                    </th>
                    <td>${name}</td>
                    <td>${location}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${timezone}</td>
                    <td>
                        <button type="button" id="${id}" class="btn btn-danger">Remove</button>
                    </td>
                </tr>
            `;
        }
        return output;
    };
};


export default User;