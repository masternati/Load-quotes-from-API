const loadApi = ()=>{
    fetch ('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoute(data))
}

const displayQoute = api =>{
    const blockQuote = document.getElementById('api');
    console.log(api);
    blockQuote.innerText = api.quote;
}