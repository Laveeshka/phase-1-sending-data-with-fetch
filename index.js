// Add your code here
function submitData(username, userEmail){
    return fetchUsers(username, userEmail);
}

function fetchUsers(username, userEmail){
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: userEmail
        })
    })
    .then(res => res.json())
    .then(userData => {
        document.body.innerHTML = userData.id;
    })
    .catch(err => {
        document.body.innerHTML = err.message;
    })
}