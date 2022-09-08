import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { GitHub, Widgets } from "@mui/icons-material";
import { Link } from "@mui/material";
function Projects(){
    return (
    
    <>
    <div className="row ps-2 pe-2">
    <h3 className="text-center mt-5 projects">My Noteworthy Projects</h3>
    <div className="col-lg-6 pt-5">
            <div className="container text-center p-4"  data-aos-once="true" data-aos="fade-left">
                <div className="row">
                <div className="col-lg-6">
                <Player
          className="player1 dashboard"
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_n5hsffgz.json"
          style={{ height: "150px", width: "150px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
            </div>
            <div className="col-lg-6  mt-5 ">
                <h3 className="mt-lg-5">Interactive Dashboard</h3>

                <h5>Reactjs / Nodejs / MongoDB / Redux / JWT / Cookies </h5>
                 <div className="links"> <a target="_blank" href="https://github.com/joel7448/Foodtokengenerator-frontend" className="GITHUB"><GitHub/></a>
                <a href="https://foodtokengenerator-frontend.vercel.app/admin/login" target="_blank" className="ui"><Widgets/></a></div>
                
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
          src="https://assets9.lottiefiles.com/packages/lf20_hu9cd9.json"
          style={{ height: "100px", width: "100px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
            </div>
            <div className="col-lg-6 mt-5  ">
                <h3 className="mt-lg-5">Ecommerce Site</h3>

                <h5>Reactjs / Nodejs / MongoDB / Redux / JWT / Cookies </h5>
               <div className="links"> <a target="_blank" href="https://github.com/joel7448/Foodtokengenerator-frontend" className="GITHUB"><GitHub/></a>
                <a target="_blank" href="https://foodtokengenerator-frontend.vercel.app/" className="ui"><Widgets/></a></div>
                </div>
                </div>
            </div>
            
           
        </div>
 </div>
 
   
       
   
    </>
    )
}

export default Projects