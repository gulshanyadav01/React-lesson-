import React from "react"

import ReactDom from "react-dom"

var time= new Date().getHours();
var greeting =" ";
var cssStyle={};

if(time>=12 && time<=19){
    greeting="good after noon";
    cssStyle.color="red";
}
else if(time >19 && time <=24){
    greeting="good evening";
    cssStyle.color="black";
}
else{
    cssStyle.color="green";
    greeting="good Morning";
}
function App(){
    return(
        <>
        <div style={{background:"powderblue"}}>
        <h1>hello sir ,<span style={{color:"red"}}>{greeting}</span></h1>
        </div>
        </>
    );
}

export default App;