function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(info => display(info))
}

function display(info){
    const ul = document.getElementById('users-list');
    for (const user of info){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }
}


function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}



function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
});
}



function patchPost () {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
}