const url = "https://api.breakingbadquotes.xyz/v1/quotes";
let pTag = document.getElementById("pTag");

fetch(url)
.then((res)=> res.json())
.then((data)=>{
    pTag.innerHTML = data.map(data=>
        `
        <p>${data.author}</p>
        <p>${data.quote}</p>
        `
    );
}).catch(e=>alert("hataaa"));





















