import { useState } from "react";




import userContext from "./usercontext";
import { useContext } from "react";
function Togglebutton(){

const [light,dark]=useState(true)
var togglecolor="white";
let data = useContext(userContext); 
data.setteachers(light);

let darkmode = ()=>{
   if(light==true){
    
    
    dark(false); 
     document.body.style="background-color:black ; color:white"
     data.setteachers(light)
   
    

   }
   else if(light==false){
    
    
    dark(true);
      document.body.style="background-color:white ; color:black"
      data.setteachers(light)
    
   }

}


    return (<button style={{backgroundColor:light?"white":"black"}}   onClick={()=>darkmode()} className="Toggle">
      {light?"🌙":"☀"}  </button>);
}

export default Togglebutton
