import userContext from "./usercontext"
import { useContext } from "react"
function Blogs(){

let data = useContext(userContext);

return (

<div className="row blog">
    <h1 className="myblogs">My Blogs</h1>
    <div className={data.teachers? "card mb-3 true" :"card mb-3 false"} style={{marginwidth:"540px"}}>
<div class="row g-0">
  <div class="col-md-4" style={{position:"relative",right:"12px"}}>
    <img  src="https://cdn.lynda.com/course/751323/751323-636854833232575341-16x9.jpg" class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h3 class="card-title" >DSA4U</h3>
      <h5 class="card-text"  >Zero to Hero - Data structures and Algos using JavaScript</h5>
      <p>Data structures and algorithms learning Blog includes competitive problems on data structures and algorithms along with conceptual learning </p>
     
    </div>
  </div>
</div>
</div></div>
)

}

export default Blogs