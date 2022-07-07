import { Player, Controls } from "@lottiefiles/react-lottie-player";
import React, { useState, useEffect } from "react"
import Techicons from "./techicons";
import Togglebutton from "./togglebutton";
import Typewriter from 'typewriter-effect';
import Footer from "./footer";
import Navbar from "./navbar";
function Animation(props) {
    

  
 

   
   
  return (
    <>
  <Navbar></Navbar> 
    <div className="anime ">
      <div className="row">
        <div className="col-lg-5">
          <Player
          className="Player"
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_9e8yoqkm.json"
            
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
        <div className="col-lg-7 pt-5 "  style={{ letterSpacing:"2px" }}>
          <h1 className="purple">Hey , I'm Joel</h1>
          
          <p style={{ marginTop: "20px", lineHeight: "30px" , letterSpacing:"2px" }}>
            I am a passionate full stack developer specialised in Reactjs and nodejs.
            I create amazing web applications to make the internet a better place.
            You can talk to me about <Typewriter
  options={{
    strings: ['HTML.', 'CSS.' , 'JavaScript.' , 'Reactjs.' , 'Nodejs.' , 'Mongodb.' , 'MySQL.' ,'RestfulAPIs.'],
    autoStart: true,
    loop: true,
  }}
></Typewriter>
          </p>
        </div>
      </div>
    </div>
  
    <Techicons></Techicons>

    <Footer></Footer>
       </>
  );
}

export default Animation;
