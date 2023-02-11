let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");
 
searchBtn.addEventListener("click",()=>{
    let countryName = "turkey";
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL);
    fetch(finalURL)
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data[0]);
        console.log(data[0].capital);
        console.log(data[0].continents[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
    })
})




























