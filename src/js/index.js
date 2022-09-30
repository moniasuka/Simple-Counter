//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import {Counter} from "./component/counter.jsx";

//incializacion de las variables
let segundo = 0
let minuto = 0
let hora = 0
let segundo2 = 0
let minuto2= 0
let hora2 = 0

//funcion setInterval
let timer = setInterval(()=> {

if(segundo >= 10){
    segundo=0
    minuto++;
}
if(minuto >= 10)
{
    minuto=0
    hora++;
}

if(hora >= 10)
{
    hora=0
    segundo2++;
}

if(segundo2 >= 10)
{
    segundo2=0
    minuto2++;
}

if(minuto2 >= 10)
{
    minuto2=0
    hora2++;
}

//rendering your react application
ReactDOM.render(<Counter tiempo6={hora2} tiempo5={minuto2} tiempo4={segundo2} tiempo3={hora} tiempo2={minuto} tiempo={segundo} stop={timer}/>, document.querySelector("#app"));
segundo ++; 


},1000)




