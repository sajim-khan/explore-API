function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

function displayComments(comments){
    const commentsContainer = document.getElementById('comments-container')
    for(const data of comments) {
        const commentsDiv = document.createElement('div')
        commentsDiv.innerHTML = `
        <h3>name: ${data.name}</h3>
        <h3>id: ${data.id}</h3>
        <h3>userId: ${data.email}</h3>
        <h3>Body: ${data.body}</h3>
        `
        commentsContainer.appendChild(commentsDiv)
    }
    
}

loadComments()