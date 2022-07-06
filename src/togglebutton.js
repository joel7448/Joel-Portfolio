import { useState } from "react";

function Togglebutton(){

const [light,dark]=useState(true)
var togglecolor="white";



let darkmode = ()=>{
   if(light==true){
    
    
    dark(false); 
     document.body.style="background-color:black ; color:white"
     
      
    

   }
   else if(light==false){
    
    
    dark(true);
      document.body.style="background-color:white ; color:black"
      
     
    
   }

}


    return (<button style={{backgroundColor:light?"white":"black"}}   onClick={()=>darkmode()} className="Toggle">
      {light?"🌙":"☀"}  </button>);
}

export default Togglebutton
