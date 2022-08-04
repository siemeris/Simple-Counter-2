//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

const SecondsCounter = (props) => {
    return (<div className="container-fluid">
        <div className="contador display-2 d-flex bg-dark justify-content-center">
            <div className="text-white">
        <i className="fa-regular fa fa-clock"></i></div>
        <div className="text-white">{props.digito3}</div>
        <div className="text-white">{props.digito2}</div>
        <div className="text-white">{props.digito1}</div>
            </div> 
    </div>)
}
let par1 = 0
let par2 = 0
let par3 = 0
function tick(){
    par1++;
    if (par1 >= 100) {
        par1 = 0;
        par2++;
        if (par2 < 10) {
            par2 = '0'+par2;
        }else{
            par2
        }
        if(par2 >= 100){
        par2 = 0;
        par3++;
            if(par3 < 10){
                par3 = '0'+ par3;
            }
            else{
                par3
            }
        }
        if(par3 >=100){
            par3 = 0;
            par2 = 0;
            par1 = 0;
        }
    }
}
setInterval(()=>{
    tick()
    if(par1 < 10){
        par1 = '0'+par1
    }
    ReactDOM.render(<SecondsCounter digito1={par1 > 0 ? par1 : par1="00"} digito2={par2 > 0 ? par2 : par2="00"} digito3={par3 >0 ? par3 : par3="00"}/>, document.querySelector("#app"));}, 1000)
