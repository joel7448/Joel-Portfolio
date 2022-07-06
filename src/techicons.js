import { Player, Controls } from "@lottiefiles/react-lottie-player";
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
        <div className="icon" >
     
       <img className="techicons" style={{height:"60px" }} src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"></img>
      
      
       <img className="techicons" style={{height:"50px",marginTop:"5px" , marginLeft:"-20px"}} src="https://i0.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?ssl=1"></img>
       
       
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"></img>
      
          
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"></img>
       
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"30px"}} src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png"></img>
     
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"40px"}} src="https://icon-library.com/images/github-social-media-icon/github-social-media-icon-1.jpg "></img>
    
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"30px"}} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"></img>
      
       <img className="techicons" style={{height:"50px", marginTop:"5px" , marginLeft:"0px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"></img>

       <img className="techicons" style={{height:"30px", marginTop:"5px" , marginLeft:"45px"}} src="http://assets.stickpng.com/thumbs/62a75552223343fbc2207d0e.png"></img>
      
      </div>
        </div>
      </>
)

}

export default Techicons