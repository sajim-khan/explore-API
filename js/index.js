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

