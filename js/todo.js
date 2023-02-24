function loadTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodo(data));
}

function displayTodo(todo){
    // get the container
    const todoPost = document.getElementById('todo-container')
    for (const post of todo){
        // create the child element
        const todoDiv = document.createElement('div')
        //set the innerHTML or the innerText
        todoDiv.innerHTML = `
            <h3>titles: ${post.title}</h3>
            <h3>id: ${post.id}</h3>
            <h3>userId: ${post.userId}</h3>
            <p>Is completed: ${post.completed === true ? 'complete' : 'not complete'}</p>
        `
        // append child
        todoPost.appendChild(todoDiv)
    }
}

loadTodo()
