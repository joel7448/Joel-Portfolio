
import companyLogo from './mountainssnow.webp'
import {Link} from 'react-router-dom'

function Frontpage(){



    return (<>
<div className='cover'>

  <img className='firstpageimage' src={companyLogo}/>
 
  <div class="snowflakes" aria-hidden="true">
    
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
 
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
   <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❆
  </div>  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
</div>
<div class="button-box">
                <Link to='/Joel-portfolio' class="twenty-one"><span>Explore</span></Link></div>
</>
    );
}

export default Frontpage