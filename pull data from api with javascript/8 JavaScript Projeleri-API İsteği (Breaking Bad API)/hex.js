let pTag = document.getElementById("pTag");
let button = document.getElementById("btn");

button.addEventListener("click",()=>{
    const url = "https://api.breakingbadquotes.xyz/v1/quotes";
    fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
            
        pTag.innerHTML = data.map(data=>
        `
            <h2>${data.quote}</h2>
            <p>${data.author}</p>
        `      
        );
    }).catch(e=>alert("hataaa"));
})
    






















