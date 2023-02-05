// var listele = document.getElementById("listele");
// let data = fetch("https://jsonplaceholder.typicode.com/photos")
// .then(response=>response.json())
// .then(veri=>{
//     veri.forEach(element => {
//       if(element.id<=9){
//           listele.innerHTML += `<li>${element.body}</li>` 
//       }
//     });  
// });

var listele = document.getElementById("album");

let data = fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>response.json())
.then(veri =>{
    veri.forEach(element=>{
        if(element.id<=30){
            listele.innerHTML += `<img src= "${element.url}" />`
        }
    })
})































