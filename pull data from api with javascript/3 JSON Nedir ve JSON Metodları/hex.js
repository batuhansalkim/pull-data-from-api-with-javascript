let data = {
    kisiler:[
        {name:"Batuhan", surname:"salkım",age:"21"},
        {name:"Tunahan", surname:"salkım",age:"16"},
        {name:"Necla", surname:"salkım",age:"46"},
        {name:"Mustafa", surname:"salkım",age:"47"},
    ],
    islem:"Get",
  
}
//console.log(typeof data);
// var kayit = JSON.stringify(data); //stringe çevirir
// console.log(kayit);
// var cevir = JSON.parse(kayit);
// console.log(cevir);


var kisiler = document.getElementsByClassName("kisiler")[0];

for(let getir in data){
    
    var gelen = data[getir];
    if(getir == "kisiler"){
        
        for(isimler in gelen){
            kisiler.innerHTML += `<li>${gelen[isimler][ "name"] +  gelen[isimler][ "surname"]}</li>`
            
        }
    }
}





















