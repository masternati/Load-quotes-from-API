const randomUser = ()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayRandomUser(data.results))
}

const displayRandomUser = user=>{
    const userContainer = document.getElementById('random-user')

    for (const data of user) {
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
        <h2>User Name: ${data.name.title} ${data.name.first} ${data.name.last}</h2>
        <p>Email: ${data.email}</p>
        <p>Location: ${data.location.city}, ${data.location.state},  ${data.location.country}</p>

        `
        userContainer.appendChild(userDiv);
    }
}
randomUser();