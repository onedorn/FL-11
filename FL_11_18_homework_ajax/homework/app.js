const users_list = document.querySelector(".wrapper");

window.onload = async function() {
  await sendXMLHttpRequest("GET", "https://jsonplaceholder.typicode.com/users", users => {
    users_list.innerHTML = '';
    
    for (let i = 0; i < users.length; i++) {
      let div = document.createElement('div');
      div.classList.add('card', 'mb-2', 'user');
      div.id = `user_${users[i].id}`;

      let html = `
        <div class="row no-gutters">
        <div class="col-md-4">
          <img src="#" class="user-photo card-img h-100" alt="users-users">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <button type="button" class="btn btn-light user-name mb-2">${users[i].name}</button>
            <p class="card-text">${users[i].address.city}, ${users[i].address.street}</p>
            <p class="card-text">${users[i].company.name}</p>
            <p class="card-text"><small class="text-muted">${users[i].email }</small></p>
            <button type="button" class="delete btn btn-secondary float-right mr-2">Delete user</button>
            <button type="button" class="edit btn btn-primary float-right mr-4 mb-4">Edit user</button>
          </div>
        </div>
        </div>
        <ul class="posts-list list-group"></ul>
      `;
      div.innerHTML += html;
      let name = div.querySelector('.user-name');
      users_list.appendChild(div);
      let edit_btn = div.querySelector('.edit');
      let delete_btn = div.querySelector('.delete');
      let post_list = div.querySelector('.posts-list');
      post_list.style.display = 'none';
      
      name.addEventListener('click', () => {
        if(post_list.querySelectorAll('.post').length === 0) {
          getPosts(users[i].id, post_list);
        }
        if(post_list.style.display === 'none') {
          post_list.style.display = 'block';
        } else {
          post_list.style.display = 'none';
        }
      });

      edit_btn.addEventListener('click', () => {
        users[i].name = prompt('Enter username:', users[i].name);
        sendXMLHttpRequest('PUT', `https://jsonplaceholder.typicode.com/users/${i + 1}`, (response) => {
          response.name = users[i].name;
          console.warn(`Username changed for ${response.name}`);
        })
      })
      
      delete_btn.addEventListener('click', () => {
        if (confirm('Delete user?')) {
          sendXMLHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/users/${i}`, () => {
            div.remove();
            console.warn(`Sent request to delete user ${users[i].name}`);
          })
        }
      })
    }

    sendXMLHttpRequest('GET', `https://pixabay.com/api/?key=13422914-877ff221955c093050bf5fd0f&q=dogs&image_type=photo`, (photos) => {
      let gallery = photos.hits;
      let users = document.querySelectorAll('.user');
      for (let i = 0; i < users.length && users.length <= gallery.length; i++) {
        let users_photo = users[i].querySelector('.user-photo');
        users_photo.setAttribute('src', gallery[i].largeImageURL);
      }
    })

  })
}

function getPosts(userId, container) {
  sendXMLHttpRequest('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, (posts) => {
    for (let i = 0; i < posts.length; i++) {
        
      let li = document.createElement('li');
      li.classList.add('list-group-item', 'list-group-item-primary', 'mt-2', 'post');
      li.textContent =`Post # ${posts[i].id} ${posts[i].title}`;
      container.appendChild(li);

      let comment = document.createElement('ul');
      comment.classList.add('comments', 'list-group');
      container.appendChild(comment);
      getComments(posts[i].id, comment)
    }
  })
} 

function getComments(postId, container) {
  sendXMLHttpRequest('GET', `https://jsonplaceholder.typicode.com/comments?postId=${postId}`, (comments) => {
    for (let i = 0; i < comments.length; i++) {
      let li = document.createElement('li');
      li.textContent = `Comment # ${comments[i].id} ${comments[i].name}`;
      li.classList.add('list-group-item', 'list-group-item-warning', 'mt-2')
      container.appendChild(li);
    }
  })
}

function sendXMLHttpRequest(type, url, callback) {
  let spinner = document.querySelector('.spinner-grow');
  spinner.style.display = 'block';
  
  let xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  xhr.send(null);

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      callback(JSON.parse(this.response));
      spinner.style.display = 'none';
    }
  }
}


