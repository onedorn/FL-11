const users_container = document.querySelector(".users-container");
const add_user = document.querySelector("input");

add_user.addEventListener("click", getUsersList);

function getUsersList() {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(respond => respond.json())
    .then(data => {
      data.forEach(user => {
        let html = `
          <ul class='user-list'>USER ID: ${user.id}
            <li>Name: ${user.name}</li>
            <li>Username: ${user.username}</li>
            <li>Phone: ${user.phone}</li>
            <li>Website: ${user.website}</li>
          </ul>
        `;
        users_container.innerHTML += html;

        add_user.setAttribute('disabled', 'disabled')
        add_user.style.backgroundColor = 'grey';

      });
    })
    .catch(err => {throw new Error(err.message)});
}
