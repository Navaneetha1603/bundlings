import luckyNumber from './luckyNumber';
import '../css/style.css';
let div=document.createElement("div");
div.innerHTML=`ur lucky number is ${luckyNumber()}`;
document.body.appendChild(div);
console.log(luckyNumber());