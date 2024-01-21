// const { log } = require("async")

const fetchApi = ()=>{
    const url = 'https://randomuser.me/api/?gender=female'

    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
}

const displayUser = user =>{
    console.log(user);
}