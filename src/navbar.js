import Togglebutton from "./togglebutton"

function Navbar(props){
  return (<>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Blogs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact me</a>
  </li>

</ul>

<div id="navbar2">
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h2 style={{fontSize:"50px", marginTop:"10px"}} class="text-white h4 text-muted">Projects</h2>
    <h2 style={{fontSize:"50px", marginTop:"10px"}} class="text-white h4 text-muted">Blogs</h2>
    <h3 style={{fontSize:"50px", marginTop:"10px"}} class="text-muted">Contact me</h3>
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
 

 
 



  
 
   
 




  
</>)
}

export default Navbar