const countryApi = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    const countryContainer = document.getElementById('country-container')

    countries.forEach(country => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('country');


        createDiv.innerHTML= `
            <h3>Country Name: ${country.name.common}</h3>

            <!--if all the values are not in the list  -->
            <p>Country Capital: ${country.capital? country.capital[0] :'no capital'}</p>

            <button onclick="countryDetails('${country.cca2}')">Details</button>
        `

        countryContainer.appendChild(createDiv);
    });
}

const countryDetails = (code) =>{
    //https://restcountries.com/v3.1/alpha/
    const countryApiUrl = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('clicked country details',code);
    // console.log(countryApiUrl);

    fetch(countryApiUrl)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails = country =>{
    console.log(country);
}

countryApi();