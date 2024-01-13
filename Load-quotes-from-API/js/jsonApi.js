const loadJsonApi = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayJsonApi(data));
};

const displayJsonApi = (jsonApis) => {
    const jsonData = document.getElementById('jsonApi');
    for (const jsonApi of jsonApis) {
        const createOrderList = document.createElement('ol');
        createOrderList.innerText = jsonApi.email;
        jsonData.appendChild(createOrderList);
    }
};
// Call the loadJsonApi function
// loadJsonApi();