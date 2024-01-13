const countryApi = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    const countryContainer = document.getElementById('country-container')

    countries.forEach(country => {
        const createDiv = document.createElement('div');


        createDiv.innerHTML= `
            <h3>Country Name: ${country.name.common}</h3>

            <!--if all the values are not in the list  -->
            <p>Country Capital: ${country.capital? country.capital[0] :'no capital'}</p>
        `

        countryContainer.appendChild(createDiv);
    });
}
