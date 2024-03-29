import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { GitHub, Widgets } from "@mui/icons-material";
import { Link } from "@mui/material";
function Projects(){
    return (
    
    <>
    <div className="row ps-2 pe-2 projectsection">
    <h3 className="text-center mt-5 projects">My Works</h3>
    <div className="col-lg-6 pt-5">
            <div className="container text-center p-4"  data-aos-once="true" data-aos="fade-left">
                <div className="row">
                <div className="col-lg-6">
                <Player
          className="player1 dashboard"
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_n5hsffgz.json"
          style={{ height: "100px", width: "100px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
            </div>
            <div className="col-lg-6  ">
                <h3 className="mt-lg-5">Interactive Dashboard</h3>

                <h5>Reactjs / Nodejs / MongoDB / JWT / Localstorage </h5>
                 <div className="links"> <a target="_blank" href="https://github.com/joel7448/Foodtokengenerator-frontend" className="GITHUB"><GitHub/></a>
                <a href="https://foodtokengenerator-frontend.vercel.app/admin/login" target="_blank" className="ui"><Widgets/></a></div>
                
                </div>
                </div>
            </div>
            
           
        </div>

        <div className="col-lg-6 pt-5 ps-2">
            <div className="container text-center p-4"  data-aos-once="true" data-aos="fade-left">
                <div className="row">
                <div className="col-lg-6 project1">
                <Player
          className="player1 ecommerce"
          autoplay
          loop
          src="https://assets1.lottiefiles.com/private_files/lf30_1h70d9xc.json"
          style={{ height: "130px", width: "180px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
            </div>
            <div className="col-lg-6 ">
                <h3 className="mt-lg-5">Food Token Generator</h3>

                <h5>Reactjs / Nodejs / MongoDB / JWT / Localstorage </h5>
               <div className="links"> <a target="_blank" href="https://github.com/joel7448/Foodtokengenerator-frontend" className="GITHUB"><GitHub/></a>
                <a target="_blank" href="https://foodtokengenerator-frontend.vercel.app/" className="ui"><Widgets/></a></div>
                </div>
                </div>
            </div>
            
           
        </div>
        <div className="col-lg-6 pt-5 ps-2">
            <div className="container text-center p-4"  data-aos-once="true" data-aos="fade-left">
                <div className="row">
                <div className="col-lg-6 ">
                <Player
          className="player1 ecommerce"
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_o6hQ8m.json"
          style={{ height: "100px", width: "100px", marginLeft:"40px"  }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
            </div>
            <div className="col-lg-6   ">
                <h3 className="mt-lg-5">Online Nursery platform</h3>

                <h5>Reactjs / Nodejs / MongoDB / JWT / Localstorage /Redux/ nodemailer</h5>
               <div className="links"> <a target="_blank" href="https://github.com/joel7448/ecommerce-frontend" className="GITHUB"><GitHub/></a>
                <a target="_blank" href="https://ecommerce-frontend-tawny.vercel.app/" className="ui"><Widgets/></a></div>
                </div>
                </div>
            </div>
            
            
           
        </div>
        <div className="col-lg-6 pt-5 ps-2">
            <div className="container text-center p-4"  data-aos-once="true" data-aos="fade-left">
                <div className="row">
                <div className="col-lg-6 ">
                <Player
          className="player1 ecommerce"
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_e1y24wm2.json"
          style={{ height: "100px", width: "100px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
            </div>
            <div className="col-lg-6   ">
                <h3 className="mt-lg-5">Nodemailer</h3>

                <h5>Reactjs / Nodejs / MongoDB / JWT / Localstorage /Redux</h5>
               <div className="links"> <a target="_blank" href="https://github.com/joel7448/nodemailerapp" className="GITHUB"><GitHub/></a>
                <a target="_blank" href="https://nodemailerapp.netlify.app/" className="ui"><Widgets/></a></div>
                </div>
                </div>
            </div>
            
            
           
        </div>
        
 </div>
 
   
       
   
    </>
    )
}

export default Projects