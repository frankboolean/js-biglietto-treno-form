
// input nome
var nomeU= document.getElementById('nome-cognome');


// input km
var kmU= document.getElementById('km-percs');

// input età
var fasciaU= document.getElementById('fascia');

// bottone Genera e annulla
var annullaU=document.getElementById('bottone-annulla');
var generaU= document.getElementById('bottone-genera');
// altre val
var valNome;
var valKm;
var valEtà;
var prezzo;


// click su bottone salvo valori input li stampo in pagina

document.getElementById('bottone-genera').addEventListener("click",function(){

   valNome= nomeU.value;
   valKm= parseInt(kmU.value);
   valEtà= fasciaU.value;
   prezzo=Math.floor((0.21 * valKm)*100)/100;
   document.getElementById("offerta").innerHTML ="Biglietto Standard";
   document.getElementById('costoticket').innerHTML= prezzo + "€";

   // possibilità

   if (valEtà == "mino"){
     prezzo = Math.floor((prezzo - (prezzo * 20 / 100))*100)/100;
    document.getElementById("offerta").innerHTML ="Offerta giovani";
    document.getElementById('costoticket').innerHTML= prezzo + "€";
   }
   else if (valEtà == "maggio") {
     prezzo = Math.floor((prezzo - (prezzo * 40 / 100))*100)/100;
     document.getElementById("offerta").innerHTML ="Offerta over";
     document.getElementById('costoticket').innerHTML= prezzo +"€";
   }

   document.getElementById("nom-pass").innerHTML =valNome;
   document.getElementById('carrozza').innerHTML=  (Math.floor(Math.random()*10 +1));
   document.getElementById('codice').innerHTML = "93805"
   document.getElementsByName('costoticket').innerHTML= prezzo + "€"

})

// annullaU


document.getElementById('bottone-annulla').addEventListener("click", function(){
  document.getElementById("nom-pass").innerHTML =  "";
  document.getElementById('carrozza').innerHTML= "";
  document.getElementById('codice').innerHTML = "";
  document.getElementsByName('costoticket').innerHTML="0";
  document.getElementById("offerta").innerHTML = "";

})
