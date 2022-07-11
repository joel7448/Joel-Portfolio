import { Player, Controls } from "@lottiefiles/react-lottie-player";
import React, { useState, useEffect, useContext } from "react"
import Techicons from "./techicons";
import Togglebutton from "./togglebutton";
import Typewriter from 'typewriter-effect';
import Footer from "./footer";
import Navbar from "./navbar";
import Aos from "aos";
import 'aos/dist/aos.css'
import {useRef} from "react"
import Blogs from "./Blogs";
import userContext, { UserProvider } from "./usercontext";



function Animation(props) {
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])

  
    const blog = useRef(null);
    const Contact = useRef(null);
  const scrolltoSection = (elementref)=>{
    window.scrollTo({
      top:elementref.current.offsetTop,
      behavior:'smooth'
    })
  } 
 
   let data = useContext(userContext);
  return (
    <>
 <UserProvider>
<ul class="nav justify-content-center">
  <li class="nav-item" >
    <a class="nav-link active" aria-current="page" href="#">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"  onClick={()=>scrolltoSection(blog)} >Blogs</a>
  </li>
  <li class="nav-item" onClick={()=>scrolltoSection(Contact)} >
    <a class="nav-link" href="#">Contact me</a>
  </li>

</ul>

<div id="navbar2">
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h2 style={{fontSize:"50px", marginTop:"10px"}} class="text-white h4 text-muted">Projects</h2>
    <h2 style={{fontSize:"50px", marginTop:"10px"}} class="text-white h4 text-muted" onClick={()=>scrolltoSection(blog)}>Blogs</h2>
    <h3 style={{fontSize:"50px", marginTop:"10px"}} class="text-muted"  onClick={()=>scrolltoSection(Contact)} >Contact me</h3>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav></div>
 <Togglebutton></Togglebutton>
 

 
 



  
 
   
 




  



    <div className="anime " data-Aos="fade-up">
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
  
    <div data-Aos="fade-left"><Techicons ></Techicons></div>
    <div data-Aos="fade-right" style={{padding:"100px"}} ref={blog}><Blogs></Blogs></div>
    <div  data-Aos="flip-left" ref={Contact}><Footer></Footer></div>
    </UserProvider>
    
       </>
  );
}

export default Animation;
