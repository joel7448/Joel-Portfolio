import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import joel from './joel8.png'
import joel1 from './joel10.png'
import { useEffect, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Navbar from './navbar';
import About from './about';
import Skillsets from './skillsets';
import Projects from './Projects';
import Contact from './contact';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[])

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const Skills = useRef(null);
 const Project = useRef(null);
const contacts = useRef(null);
const scrolltoSection = (elementref)=>{
  window.scrollTo({
    top:elementref.current.offsetTop,
    behavior:'smooth'
  })
} 
  
  return (<div>
    {loading ? <Player
  className='player'
    autoplay
    loop
    src="https://assets1.lottiefiles.com/packages/lf20_x62chJ.json"
    style={{ height: '300px', width: '300px' }}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>:
  <>
   <div data-aos="fade-down"><nav  class="navbar navbar-expand-lg " >
    <div class="container-fluid">
     
      <a class="navbar-brand" href="#"><img className='joel' src={joel1}></img></a>
      <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse me-3" id="navbarSupportedContent">
        <ul class="navbar-nav   mb-lg-0 ">
          <li class="nav-item ">
            <a class="nav-link active  " aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" onClick={()=>scrolltoSection(Project)}>Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" onClick={()=>scrolltoSection(Skills)}>Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" onClick={()=>scrolltoSection(contacts)} >Contact</a>
          </li>
        
        </ul>
       
      </div>
    </div>
  </nav></div>
   <div> <About></About></div>
   <div ref={Skills} > <Skillsets  ></Skillsets></div>
   <div ref={Project}> <Projects></Projects></div>
   <div ref={contacts}><Contact></Contact></div>
    </>
    }
    </div>)
  ;
}

export default App;
