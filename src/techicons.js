import { Player, Controls } from "@lottiefiles/react-lottie-player";
import html from './htmlicon.png'
import js from './jslogo.webp'
import svg from '../src/css.png'
import bootstrap from './bootstrap.png'
import nodejs from './nodejs.png'
import mongodb from './mongodb.webp'
import mysql from './mysql.png'
import github from './github.jpg'
import c from './C_Logo.png'
import redux from './REDUX.png'
import vscode from './vs code.png'
import npm from './npm.png'
function Techicons(){
let techstacks = [{url:"https://assets2.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"},{url:"https://assets4.lottiefiles.com/packages/lf20_ipzmqnqg.json"}]


    return (<>   
    <div className="row">
      <h1 className="thingsicodewith" style={{marginLeft:"550px"}}>Things I code with</h1>
    </div>
    <div className="row" >
      <div className="col-lg-6">
      <div ><Player
      className="player2" 
            autoplay
            loop
            src="https://assets8.lottiefiles.com/private_files/lf30_obidsi0t.json"
            style={{ height: "400px", width: "400px", marginRight: "150px" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player></div>
      </div>
        <div className="icon"  >
     
       <img className="techicons" style={{height:"50px", marginLeft:"34px" }} src={html}></img>
      
      
       <img className="techicons" style={{height:"50px",marginTop:"5px" , marginLeft:"-20px"}} src={js}></img>
       
       
       
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src={svg}></img>
      
          
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src={bootstrap}></img>
       
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>

       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"30px"}} src={nodejs}></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"10px"}} src={mongodb}></img>
     
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"15px"}} src={mysql}></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"40px"}} src={github}></img>
    
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"40 px"}} src={c}></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"30px"}} src={redux}></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src={vscode}></img>

       <img className="techicons" style={{height:"30px", marginTop:"5px" , marginLeft:"45px"}} src={npm}></img>
      
      </div>
        </div>
      </>
)

}

export default Techicons