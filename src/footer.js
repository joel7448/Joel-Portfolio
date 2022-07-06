import './joel.jpeg'

function Footer (){
    return(<>
    
    <div className="footer">
        <hr></hr>
        <img className="profilepic" src="./joel.jpeg" ></img>
    <p className="connect">Connect with me on</p>
    <div class="container">
   
    <div class="btn tw-btn">
        
          <a href="https://www.linkedin.com/in/joel-a-b3a991198/">  <i class="fa fa-linkedin" aria-hidden="true" id="tw"></i></a>
        </div>
        <div class="btn fb-btn">
        <a href="https://www.facebook.com/joel.rocz">  <i class="fa fa-facebook" aria-hidden="true" id="fb"></i></a>
        </div>
        <div class="btn ig-btn">
        <a href="https://www.instagram.com/joel_jerene/"> <i class="fa fa-instagram" aria-hidden="true" id="ig"></i></a>
        </div>
        <div class="btn tw-btn">
        <a href="https://twitter.com/JoelJerene"> <i class="fa fa-twitter" aria-hidden="true" id="tw"></i></a>
        </div>
    </div>

    </div>

    </>)
}
export default Footer