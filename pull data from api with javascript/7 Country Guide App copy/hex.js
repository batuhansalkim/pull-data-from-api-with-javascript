let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click",()=>{
    let countryName =countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    //console.log(finalURL);
    fetch(finalURL)
    .then((res)=>res.json())
    .then((data)=>{

        console.log(data[0]);
        result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img" />
            <h2> ${data[0].name.common}</h2>
        `
            
       
    })
})















