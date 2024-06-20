let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let showresult = document.querySelector('h1');

btn.onclick = Calc;

function Calc(e){
  
         let result =  txt.value * 0.025 + ' جنية ';
         txt.value = '';
         showresult.innerHTML = result;
      
    
  
}




