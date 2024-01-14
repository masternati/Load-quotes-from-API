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
    console.log(countryApiUrl);

    fetch(countryApiUrl)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
    const displayCountry = document.getElementById('display-country');
    displayCountry.innerHTML = `
        <h2>Country Name: ${country.name.common}</h2>
        <h2>Country Code: ${country.cca2}</h2>
        <p>Country Flag- </p>
        <img src="${country.flags.png}" alt="">
    `


}

countryApi();