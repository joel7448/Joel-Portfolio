import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";
import Aos from "aos";
import Typewriter from "typewriter-effect";

import { IconButton, Tooltip } from "@mui/material";



function Skillsets(){



    return (  <div className="row mt-5  m " style={{backgroundColor:"white"}}>
<h1 className="text-center skills">My Skills</h1>
    <div className="col-lg-6  skill" data-aos-once="true" data-aos="fade-right">
   
    <Player
              className="player1 "
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_uj8muwcq.json"
              style={{ height: "250px", width: "250px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
               
            </Player>
    </div>
   
    <div className="col-lg-6 skill x"  data-aos-once="true" data-aos="fade-left">
    
     
           <div   className="col-lg-2  "   >
         
    <svg    xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-14 -4 60 50" width="60px" height="80px"><path d="M 45.273438 2.324219 C 45.085938 2.117188 44.816406 2 44.535156 2 L 5.464844 2 C 5.183594 2 4.914063 2.117188 4.726563 2.324219 C 4.535156 2.53125 4.441406 2.808594 4.46875 3.089844 L 7.988281 42.515625 C 8.023438 42.929688 8.3125 43.273438 8.710938 43.390625 L 24.722656 47.960938 C 24.808594 47.988281 24.902344 48 24.996094 48 C 25.089844 48 25.179688 47.988281 25.269531 47.960938 L 41.292969 43.390625 C 41.691406 43.273438 41.976563 42.929688 42.015625 42.515625 L 45.53125 3.089844 C 45.558594 2.808594 45.464844 2.53125 45.273438 2.324219 Z M 36.847656 15.917969 L 18.035156 15.917969 L 18.484375 21.007813 L 36.394531 21.007813 L 35.050781 36.050781 L 24.992188 39.089844 L 24.894531 39.058594 L 14.953125 36.046875 L 14.410156 29.917969 L 19.28125 29.917969 L 19.492188 32.296875 L 25.050781 33.460938 L 30.507813 32.296875 L 31.089844 25.859375 L 14.046875 25.859375 L 12.722656 11.054688 L 37.28125 11.054688 Z"/></svg>
  </div>
 

    <div className="col-lg-2 " >
    <svg  xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-4 -5 50 50" width="100px" height="100px"><path d="M 8.21875 5 L 8.0625 5.8125 L 7.5625 8.6875 L 7.34375 9.875 L 21.46875 9.875 L 21.15625 11.6875 L 7.03125 11.6875 L 6.875 12.5 L 6.375 15.375 L 6.15625 16.53125 L 20.28125 16.53125 L 19.5625 20.59375 L 14.34375 23 L 10.25 20.75 L 10.46875 19.53125 L 10.6875 18.375 L 5.8125 18.375 L 5.6875 19.1875 L 5 23 L 4.84375 23.75 L 5.53125 24.09375 L 13.34375 27.90625 L 13.75 28.09375 L 14.15625 27.9375 L 23.3125 24.09375 L 23.8125 23.90625 L 23.9375 23.34375 L 27 6.1875 L 27.21875 5 Z M 9.875 7 L 24.8125 7 L 22.0625 22.46875 L 13.78125 25.875 L 7.09375 22.625 L 7.5 20.375 L 8.28125 20.375 L 8.03125 21.8125 L 8.65625 22.15625 L 13.8125 25 L 14.25 25.25 L 14.71875 25.03125 L 20.875 22.1875 L 21.34375 21.96875 L 21.4375 21.4375 L 22.46875 15.71875 L 22.6875 14.53125 L 8.5625 14.53125 L 8.6875 13.6875 L 22.84375 13.6875 L 22.96875 12.84375 L 23.65625 9.03125 L 23.875 7.875 L 9.75 7.875 Z"/></svg>
    </div>
    <div className="col-lg-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-14 -4 60 50" width="60px" height="80px">    <path d="M45.274,2.325C45.084,2.118,44.817,2,44.536,2H5.464C5.183,2,4.916,2.118,4.726,2.325S4.443,2.81,4.468,3.089l3.52,39.427 c0.037,0.412,0.324,0.759,0.722,0.873l16.01,4.573C24.809,47.987,24.902,48,24.994,48s0.185-0.013,0.274-0.038l16.024-4.573 c0.398-0.114,0.685-0.461,0.722-0.873l3.518-39.427C45.557,2.81,45.463,2.532,45.274,2.325z M12,29.004l7,1.942V11h4v26l-11-3.051 V29.004z M38.054,22L37,34.25L27,37v-4.601l6.75-1.855l0.25-3.75L27,28V11h12l-0.345,4H31v8L38.054,22z"/></svg>
    </div>
    <div className="col-lg-2 ">
     <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-15 0 60 40" width="68px" height="68px"><path d="M43.03,27.802c-1.747,0.009-3.261,0.429-4.53,1.054c-0.464-0.926-0.934-1.741-1.013-2.347 c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125c-0.007-0.089-0.109-0.518-1.117-0.526 c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.296,0.865-0.416,1.49c-0.177,0.914-2.012,4.174-3.055,5.879 c-0.341-0.666-0.631-1.252-0.691-1.716c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125 c-0.007-0.089-0.109-0.518-1.117-0.526c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.21,0.888-0.416,1.49 c-0.207,0.602-2.647,6.039-3.286,7.448c-0.326,0.718-0.609,1.295-0.809,1.689c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.012,0.026-0.034,0.071c-0.171,0.335-0.273,0.521-0.273,0.521s0.001,0.003,0.003,0.007c-0.136,0.246-0.281,0.475-0.353,0.475 c-0.05,0-0.151-0.656,0.022-1.555c0.363-1.886,1.235-4.828,1.227-4.929c-0.004-0.052,0.162-0.564-0.57-0.833 c-0.711-0.26-0.965,0.174-1.03,0.175c-0.063,0.001-0.11,0.153-0.11,0.153s0.793-3.308-1.512-3.308c-1.44,0-3.436,1.576-4.42,3.004 c-0.62,0.338-1.948,1.063-3.357,1.837c-0.541,0.297-1.093,0.601-1.617,0.89c-0.036-0.039-0.071-0.079-0.108-0.118 c-2.794-2.981-7.958-5.089-7.739-9.096c0.08-1.457,0.586-5.293,9.924-9.946c7.649-3.812,13.773-2.763,14.831-0.438 c1.512,3.321-3.273,9.494-11.216,10.384c-3.027,0.339-4.62-0.834-5.017-1.271c-0.417-0.46-0.479-0.481-0.635-0.394 c-0.254,0.141-0.093,0.547,0,0.789c0.237,0.617,1.21,1.712,2.87,2.256c1.46,0.479,5.013,0.742,9.311-0.92 c4.813-1.862,8.571-7.041,7.468-11.37c-1.123-4.403-8.423-5.85-15.332-3.396c-4.112,1.461-8.563,3.754-11.764,6.747 c-3.806,3.56-4.412,6.658-4.162,7.952c0.889,4.6,7.228,7.595,9.767,9.815c-0.125,0.069-0.243,0.134-0.35,0.193 c-1.273,0.63-6.105,3.159-7.314,5.831c-1.371,3.031,0.218,5.206,1.271,5.499c3.26,0.907,6.606-0.725,8.404-3.407 c1.798-2.681,1.578-6.172,0.753-7.766c-0.01-0.02-0.022-0.039-0.032-0.059c0.329-0.195,0.664-0.392,0.996-0.587 c0.648-0.38,1.284-0.735,1.836-1.036c-0.309,0.846-0.535,1.86-0.653,3.325c-0.138,1.721,0.567,3.945,1.49,4.82 c0.406,0.385,0.895,0.394,1.205,0.394c1.074,0,1.564-0.893,2.103-1.95c0.662-1.296,1.249-2.804,1.249-2.804 s-0.737,4.075,1.271,4.075c0.731,0,1.467-0.949,1.795-1.432c0.001,0.005,0.001,0.008,0.001,0.008s0.019-0.031,0.056-0.095 c0.076-0.116,0.119-0.19,0.119-0.19s0.002-0.008,0.004-0.021c0.294-0.51,0.946-1.674,1.924-3.594 c1.263-2.48,2.475-5.586,2.475-5.586s0.113,0.76,0.482,2.015c0.217,0.739,0.679,1.556,1.043,2.339 c-0.293,0.407-0.473,0.64-0.473,0.64s0.002,0.004,0.005,0.012c-0.234,0.311-0.497,0.646-0.772,0.974 c-0.997,1.188-2.185,2.544-2.344,2.936c-0.187,0.461-0.143,0.801,0.219,1.073c0.264,0.199,0.735,0.23,1.227,0.197 c0.896-0.06,1.527-0.283,1.838-0.418c0.485-0.171,1.05-0.441,1.58-0.831c0.978-0.719,1.568-1.748,1.512-3.111 c-0.031-0.751-0.271-1.495-0.574-2.198c0.089-0.128,0.178-0.256,0.267-0.387c1.542-2.255,2.738-4.732,2.738-4.732 s0.113,0.76,0.482,2.015c0.187,0.636,0.556,1.329,0.887,2.009c-1.45,1.178-2.349,2.547-2.662,3.445 c-0.577,1.661-0.125,2.414,0.723,2.585c0.384,0.078,0.927-0.098,1.335-0.271c0.508-0.168,1.118-0.449,1.688-0.868 c0.978-0.719,1.919-1.726,1.862-3.089c-0.026-0.62-0.194-1.236-0.422-1.828c1.229-0.512,2.821-0.797,4.848-0.56 c4.349,0.508,5.202,3.223,5.039,4.359c-0.163,1.137-1.075,1.761-1.38,1.95c-0.305,0.189-0.398,0.254-0.372,0.394 c0.037,0.204,0.178,0.196,0.438,0.152c0.358-0.06,2.283-0.924,2.366-3.022C50.102,30.703,47.55,27.778,43.03,27.802z M9.512,39.102 c-1.44,1.571-3.453,2.165-4.316,1.665c-0.932-0.54-0.563-2.854,1.205-4.521c1.077-1.016,2.468-1.952,3.391-2.529 c0.21-0.126,0.518-0.312,0.893-0.537c0.062-0.035,0.097-0.055,0.097-0.055l-0.001-0.002c0.072-0.043,0.147-0.088,0.223-0.134 C11.647,35.363,11.024,37.453,9.512,39.102z M20.005,31.968c-0.502,1.223-1.552,4.352-2.191,4.184 c-0.549-0.144-0.883-2.523-0.11-4.863c0.389-1.178,1.22-2.586,1.709-3.133c0.786-0.879,1.652-1.167,1.862-0.81 C21.544,27.8,20.32,31.201,20.005,31.968z M28.675,36.105c-0.213,0.111-0.408,0.181-0.498,0.127 c-0.067-0.04,0.088-0.186,0.088-0.186s1.084-1.167,1.512-1.698c0.248-0.309,0.537-0.676,0.85-1.086 c0.003,0.041,0.004,0.082,0.004,0.122C30.627,34.782,29.277,35.725,28.675,36.105z M35.354,34.582 c-0.159-0.113-0.132-0.478,0.389-1.614c0.205-0.446,0.672-1.198,1.485-1.916c0.094,0.295,0.152,0.578,0.15,0.842 C37.367,33.653,36.112,34.31,35.354,34.582z"/></svg>
    </div>

    <div className="col-lg-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-9 -2 60 50" width="70px" height="80px"><path d="M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9490442 22.90625 7.4003906 C 21.147758 5.9699557 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.402173 12.173992 10.761719 14.412109 C 10.886606 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671663 41.430886 26.366333 42.068604 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.411762 46.164908 36.746094 45.394531 C 38.080426 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.85335 39.195312 35.615234 C 39.031899 34.598012 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677708 15.800829 32.436969 15.435424 30.048828 15.220703 C 28.849094 13.558465 27.615953 12.046374 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015451 7.6275969 21.642578 8.9511719 C 22.266889 9.4590141 22.905452 10.045872 23.548828 10.671875 C 22.296955 12.025781 21.055175 13.553705 19.847656 15.230469 C 17.468002 15.449155 15.235261 15.818024 13.199219 16.3125 C 13.012686 15.546898 12.84964 14.799095 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.236451 12.677734 8.9121094 C 12.960128 7.5877677 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791064 13.028975 26.606064 13.9993 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.912587 18.402344 28.808594 C 17.668186 27.536996 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.550781 17.410156 C 33.198531 17.615819 34.745652 17.90154 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725727 19.244455 32.142026 18.315962 31.550781 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398795 20.758095 13.190852 22.834207 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 25 22 C 26.668699 22 28 23.331301 28 25 C 28 26.668699 26.668699 28 25 28 C 23.331301 28 22 26.668699 22 25 C 22 23.331301 23.331301 22 25 22 z M 34.619141 27.363281 C 35.143596 28.604493 35.599462 29.819048 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765554 28.981192 34.200846 28.17048 34.619141 27.363281 z M 15.341797 27.365234 C 15.762305 28.177437 16.200272 28.991753 16.671875 29.808594 C 17.041066 30.448052 17.418053 31.072363 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.646655 35.905245 22.092677 37.70929 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842786 33.979991 37.069087 34.989811 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.466746 43.24604 35.746094 43.662109 C 35.025442 44.078178 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.397794 28.314453 41.074219 C 27.678439 40.556858 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882145 35.473968 21.867188 34.101562 z"/></svg>
    </div>
    <div className="col-lg-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-21 -20 70 70" width="60px" height="60px"><path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.581015 12.484998 30.154506 14.841797 33.492188 C 14.278671 34.225786 14 35.114721 14 36 C 14 36.972222 14.318681 37.957881 15.001953 38.726562 C 15.685226 39.495244 16.75 40 18 40 C 19.25 40 20.314774 39.495244 20.998047 38.726562 C 21.681319 37.957881 22 36.972222 22 36 C 22 35.027778 21.681319 34.042119 20.998047 33.273438 C 20.314774 32.504756 19.25 32 18 32 C 17.417923 32 16.88232 32.117915 16.400391 32.3125 C 14.317709 29.317793 13 25.144037 13 20.486328 C 13 11.395328 17.935 4 24 4 C 29.419 4 33.923219 9.9093906 34.824219 17.650391 C 35.531219 17.919391 36.232734 18.222641 36.927734 18.556641 C 36.246734 9.2666406 30.71 2 24 2 z M 22 15 C 20.75 15 19.685226 15.504756 19.001953 16.273438 C 18.318681 17.042119 18 18.027778 18 19 C 18 19.972222 18.318681 20.957881 19.001953 21.726562 C 19.685226 22.495244 20.75 23 22 23 C 23.25 23 24.314774 22.495244 24.998047 21.726562 C 25.425092 21.246137 25.694239 20.67767 25.847656 20.083984 C 29.425245 19.930128 33.445887 20.987107 37.142578 23.203125 C 45.036578 27.935125 49.012859 36.186703 46.005859 41.595703 C 44.931859 43.526703 43.056938 44.897594 40.585938 45.558594 C 37.123937 46.486594 32.8715 45.916078 28.8125 44.080078 C 28.2265 44.551078 27.60675 44.996734 26.96875 45.427734 C 30.29375 47.106734 33.8125 47.996094 37.0625 47.996094 C 38.4735 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.277906 36.224406 46.978922 26.769281 38.169922 21.488281 C 34.19387 19.103202 29.825568 17.936523 25.886719 18.064453 C 25.744166 17.416386 25.4608 16.794034 24.998047 16.273438 C 24.314774 15.504756 23.25 15 22 15 z M 22 17 C 22.749999 17 23.185226 17.245244 23.501953 17.601562 C 23.81868 17.957881 24 18.472222 24 19 C 24 19.527778 23.81868 20.042119 23.501953 20.398438 C 23.185226 20.754756 22.749999 21 22 21 C 21.250001 21 20.814774 20.754756 20.498047 20.398438 C 20.18132 20.042119 20 19.527778 20 19 C 20 18.472222 20.18132 17.957881 20.498047 17.601562 C 20.814774 17.245244 21.250001 17 22 17 z M 9.1621094 23.332031 C 2.1981094 28.772031 -0.89795313 36.906406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.683281 8.8984375 47.488281 C 10.169438 47.828281 11.528453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.911031 46.787719 24.707031 44.511719 C 29.262758 41.780488 32.543671 37.933128 34.212891 33.978516 C 35.367764 33.923167 36.355158 33.449812 36.998047 32.726562 C 37.681319 31.957881 38 30.972222 38 30 C 38 29.027778 37.681319 28.042118 36.998047 27.273438 C 36.314774 26.504756 35.25 26 34 26 C 32.75 26 31.685226 26.504756 31.001953 27.273438 C 30.318681 28.042119 30 29.027778 30 30 C 30 30.972222 30.318681 31.957882 31.001953 32.726562 C 31.334027 33.100145 31.760237 33.407648 32.25 33.628906 C 30.681548 37.037695 27.715244 40.376565 23.677734 42.796875 C 18.927734 45.645875 13.596062 46.678594 9.4140625 45.558594 C 6.9420625 44.896594 5.0690938 43.526703 3.9960938 41.595703 C 1.4540938 37.022703 3.9149531 30.427766 9.5019531 25.634766 C 9.3569531 24.883766 9.2441094 24.114031 9.1621094 23.332031 z M 34 28 C 34.749999 28 35.185226 28.245244 35.501953 28.601562 C 35.81868 28.957881 36 29.472222 36 30 C 36 30.527778 35.81868 31.042118 35.501953 31.398438 C 35.185226 31.754756 34.749999 32 34 32 C 33.250001 32 32.814774 31.754756 32.498047 31.398438 C 32.18132 31.042119 32 30.527778 32 30 C 32 29.472222 32.18132 28.957882 32.498047 28.601562 C 32.814774 28.245244 33.250001 28 34 28 z M 18 34 C 18.749999 34 19.185226 34.245244 19.501953 34.601562 C 19.81868 34.957881 20 35.472222 20 36 C 20 36.527778 19.81868 37.042119 19.501953 37.398438 C 19.185226 37.754756 18.749999 38 18 38 C 17.250001 38 16.814774 37.754756 16.498047 37.398438 C 16.18132 37.042119 16 36.527778 16 36 C 16 35.472222 16.18132 34.957881 16.498047 34.601562 C 16.814774 34.245244 17.250001 34 18 34 z"/></svg>
    </div>
    <div className="col-lg-2 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-3 -3 50 50" width="180px" height="180px"><path d="M 8 1.0234375 C 7.736875 1.0234375 7.4742344 1.0924687 7.2402344 1.2304688 L 2.7402344 3.8789062 C 2.2832344 4.1469063 2 4.642875 2 5.171875 L 2 11.005859 C 2 11.554859 2.29925 12.059266 2.78125 12.322266 L 4.2558594 13.126953 C 4.4828594 13.250953 4.7286094 13.310547 4.9746094 13.310547 C 5.2386094 13.310547 5.4992812 13.239609 5.7382812 13.099609 C 6.1982812 12.826609 6.4726562 12.344594 6.4726562 11.808594 L 6.4726562 5.4648438 L 5.4726562 5.4648438 L 5.4726562 11.808594 C 5.4726562 12.065594 5.3025156 12.195281 5.2285156 12.238281 C 5.1555156 12.281281 4.959375 12.371047 4.734375 12.248047 L 3.2617188 11.445312 C 3.1007187 11.357312 3 11.188859 3 11.005859 L 3 5.171875 C 3 4.995875 3.0940938 4.8302344 3.2460938 4.7402344 L 7.7460938 2.0917969 C 7.9020937 1.9997969 8.0979062 2.0007969 8.2539062 2.0917969 L 12.753906 4.7402344 C 12.904906 4.8302344 13 4.995875 13 5.171875 L 13 11.009766 C 13 11.189766 12.900234 11.359219 12.740234 11.449219 L 8.2402344 13.900391 C 8.0902344 13.980391 7.9097656 13.980391 7.7597656 13.900391 L 6.8808594 13.419922 C 6.7108594 13.629922 6.5 13.810937 6.25 13.960938 C 6.17 14.010938 6.0897656 14.050078 6.0097656 14.080078 L 7.2792969 14.779297 C 7.5092969 14.899297 7.75 14.960938 8 14.960938 C 8.25 14.960938 8.4907031 14.899297 8.7207031 14.779297 L 13.220703 12.320312 C 13.700703 12.060313 14 11.559766 14 11.009766 L 14 5.171875 C 14 4.642875 13.717719 4.1469062 13.261719 3.8789062 L 8.7617188 1.2304688 C 8.5272187 1.0924688 8.263125 1.0234375 8 1.0234375 z M 9.4511719 5.3183594 C 7.8711719 5.3183594 7.0703125 5.8690781 7.0703125 6.9550781 C 7.0703125 8.1850781 8.4869687 8.3680781 9.1679688 8.4550781 C 9.2659688 8.4680781 9.352875 8.4791875 9.421875 8.4921875 L 9.7207031 8.5449219 C 10.760703 8.7189219 11 8.836875 11 9.171875 C 11 9.333875 10.999172 9.8242188 9.4511719 9.8242188 C 8.1381719 9.8242188 7.8691406 9.4346094 7.8691406 8.8496094 L 6.8691406 8.8496094 C 6.8691406 9.7516094 7.3171719 10.824219 9.4511719 10.824219 C 11.557172 10.824219 12 9.925875 12 9.171875 C 12 7.913875 10.777719 7.7076406 9.8867188 7.5566406 L 9.5996094 7.5078125 C 9.5166094 7.4928125 9.4119219 7.4788438 9.2949219 7.4648438 C 8.6589219 7.3828438 8.0703125 7.2650312 8.0703125 6.9570312 C 8.0703125 6.7340313 8.0691719 6.3193594 9.4511719 6.3183594 C 10.370172 6.3183594 10.837891 6.6207969 10.837891 7.2167969 L 11.837891 7.2167969 C 11.837891 6.2997969 11.209172 5.3183594 9.4511719 5.3183594 z"/></svg>
    </div>
    <div className="col-lg-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" width="70px" height="80px" viewBox="-1.8 -3 11 30"><path d="m10.562 9.518c-1.263-5.56-4.242-7.387-4.562-8.086-.262-.408-.508-.879-.711-1.372l-.022-.06c0 .019 0 .031-.005.049v.013.039.015.026.026.012s0 .009 0 .013v-.001.021c0 .003.001.007.001.011s0 .007-.001.011v.02.032l-.009.05v.01.006s0 .004 0 .006v.041h-.005v.016h-.036v.057h-.006v.046h-.024v.038.003s0 .002 0 .003v.01.005s0 .003 0 .005l-.023.017-.005.007v.022h-.005v.018h-.006v.045h-.006v.019h-.005v.018h-.005v.022h-.045v.015h-.005v.019h-.005v.015h-.006v.023h-.005v.006s0 0 0 0v.003s0 .002 0 .004c-.019.009-.035.021-.049.034-.003.003-.006.006-.009.01s0 0 0 0v.058h-.005v-.008h-.005v.01h-.005v.008h-.005v.022h-.061v.01h-.01v.02h-.03v.01h-.005v.006h-.01v.01h-.03v.006h-.005v.058h-.006v.01h-.005v.006h-.005v.006c-.004.006-.009.011-.014.016l-.012.01c-.014.01-.027.021-.039.032-.008.006-.015.011-.022.017l-.049.039-.074.062c-.057.047-.117.1-.186.159-.169.148-.37.338-.6.568l-.015.015c-2.234 2.374-3.637 5.553-3.729 9.059v.018c-.008.155-.013.336-.013.518 0 .22.007.439.02.656l-.001-.03v.009c.112 1.765.628 3.389 1.456 4.808l-.028-.052c.308.54.614.999.948 1.435l-.022-.03c.727.963 1.555 1.795 2.483 2.503l.031.023c.255.766.403 1.647.403 2.563 0 .076-.001.152-.003.227v-.011l.644.215c-.027-.303-.043-.655-.043-1.01 0-.533.035-1.058.102-1.572l-.006.061c.065-.257.186-.48.35-.664l-.001.002c.298-.213.559-.424.806-.651l-.006.006c.018-.019.028-.036.044-.054 2.227-2.09 3.614-5.051 3.614-8.337 0-.801-.082-1.582-.239-2.337l.013.074z"/></svg>
    </div>
    <div className="col-lg-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-4 -8 30 35" width="70px" height="70px"><path d="M 3.125 1 C 2.219 1 1.5030625 1.4805 1.1640625 2.3125 C 1.0570625 2.5695 1.0029531 2.8420469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6009375 4.8097188 1.9609375 5.2617188 C 2.0239375 5.3407187 2.080625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4637344 5.9219375 2.6470781 6.16125 2.7050781 6.28125 C 2.7240781 6.33625 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332187 8.16975 3.6992188 8.96875 C 3.8872187 9.29075 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332187 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 10 18.125 12 19 C 12 19 8.2507969 14.625438 7.5917969 11.898438 C 7.5917969 11.898437 6.874625 12.625375 6.265625 14.109375 C 6.083625 13.651375 6 13.135 6 12.5 C 6 11.873 6.2758125 10.471375 6.3828125 9.984375 L 6.4765625 9.5605469 L 6.2304688 9.203125 C 6.2264687 9.196125 5.7227344 8.4688906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6459375 5.7845781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1229531 4.115625 4.7900937 3.890625 4.4960938 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.133625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017188 3.3570312 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5643437 5.3300781 3.7773438 C 5.4560781 3.8463438 5.5486563 3.8940156 5.5976562 3.9160156 L 5.7714844 3.9921875 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189063 4.0456875 8.8789062 4.4296875 C 10.629906 5.1296875 11.598031 5.830375 12.582031 7.109375 C 14.906031 10.131375 15.763484 14.044984 15.771484 14.083984 L 15.896484 14.648438 L 16.443359 14.826172 C 16.462359 14.833172 17.992922 15.344641 19.419922 16.681641 C 17.624922 17.125641 17 18 17 18 C 17 18 17.476 18.928 19.75 20.375 C 21.125 21.25 21.875 21.875 23 23 C 23 23 21.875688 20.499813 20.304688 18.507812 C 21.500687 18.124813 22.970703 17.925781 22.970703 17.925781 L 22.060547 16.664062 C 20.562547 14.587063 18.553656 13.538859 17.597656 13.130859 C 17.265656 11.864859 16.262969 8.614625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.6867187 1.6898594 4.409 1 3.125 1 z M 7.1875 5 C 7.1875 5 6.75 5 6.25 5.125 L 7.625 6.9980469 C 8 6.5000469 8 5.9179688 8 5.9179688 C 8 5.9179688 7.7505 5.25 7.1875 5 z"/></svg>
    </div>
    
    <div className="col-lg-2 ">
    <i class="fa-brands fa-bootstrap pt-2 fa-3x " style={{marginLeft : "12px",marginTop:"7px"}}></i>
    
    </div>
    
    
      <div className="col-lg-2 ">
    <i class="fa-brands fa-aws  fa-3x" style={{marginLeft : "10px",marginTop:"17px"}}></i>
    </div>
    <div className="col-lg-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="0 -15 40 80" width="70px" height="80px"><path d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"/></svg>
    </div>
    <div className="col-lg-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-1.5 -4 32 32" width="74px" height="64px"><path d="M 0 10 L 0 21 L 9 21 L 9 23 L 16 23 L 16 21 L 32 21 L 32 10 L 0 10 z M 1.7773438 11.777344 L 8.8886719 11.777344 L 8.890625 11.777344 L 8.890625 19.445312 L 7.1113281 19.445312 L 7.1113281 13.556641 L 5.3339844 13.556641 L 5.3339844 19.445312 L 1.7773438 19.445312 L 1.7773438 11.777344 z M 10.667969 11.777344 L 17.777344 11.777344 L 17.779297 11.777344 L 17.779297 19.443359 L 14.222656 19.443359 L 14.222656 21.222656 L 10.667969 21.222656 L 10.667969 11.777344 z M 19.556641 11.777344 L 30.222656 11.777344 L 30.224609 11.777344 L 30.224609 19.445312 L 28.445312 19.445312 L 28.445312 13.556641 L 26.667969 13.556641 L 26.667969 19.445312 L 24.890625 19.445312 L 24.890625 13.556641 L 23.111328 13.556641 L 23.111328 19.445312 L 19.556641 19.445312 L 19.556641 11.777344 z M 14.222656 13.556641 L 14.222656 17.667969 L 16 17.667969 L 16 13.556641 L 14.222656 13.556641 z"/></svg>
    
    </div>
    <div className="col-lg-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="5 -3 20 30" width="80px" height="70px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
    
    </div>
    <div className="col-lg-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-8 -13 50 62" width="60px" height="63px"><path d="M 12 2 C 9.25 2 7 4.25 7 7 L 7 43 C 7 45.75 9.25 48 12 48 L 40 48 C 42.75 48 45 45.75 45 43 L 45 7 C 45 4.25 42.75 2 40 2 Z M 12 4 L 40 4 C 41.667969 4 43 5.332031 43 7 L 43 43 C 43 44.667969 41.667969 46 40 46 L 12 46 C 10.332031 46 9 44.667969 9 43 L 9 7 C 9 5.332031 10.332031 4 12 4 Z M 21.40625 9 L 16.46875 9.03125 C 16.46875 9.03125 16.472656 25.261719 16.5 25.1875 C 31.636719 19.296875 30.5 23.46875 30.5 23.46875 L 30.5 40.9375 L 35.25 40.9375 L 35.25 23.53125 C 35.25 13.941406 21.40625 19.40625 21.40625 19.40625 Z M 31.65625 9.03125 C 31.65625 9.03125 29.949219 12.972656 28.0625 15.28125 L 33.3125 15.28125 C 36.160156 11.59375 37.09375 9.03125 37.09375 9.03125 Z M 16.5625 30.96875 L 16.5625 40.90625 L 21.53125 35.9375 Z"/></svg>
    
    </div>
    <div className="col-lg-2 ">
   <svg xmlns="http://www.w3.org/2000/svg" fill="#080134" viewBox="-12 -12 74 74" width="68px" height="68px"><path d="M 31.880859 3 C 27.661475 3.013642 23.379516 3.9528594 19.330078 5.9199219 C 12.416078 9.2789219 7.1204219 15.247719 4.6074219 22.511719 C -0.63657812 37.637719 7.3749531 54.149578 22.501953 59.392578 C 37.628953 64.635578 54.140766 56.624047 59.384766 41.498047 C 61.928766 34.228047 61.453453 26.240266 58.064453 19.322266 C 53.036797 8.9744219 42.663731 2.9651371 31.880859 3 z M 31.533203 4.9863281 C 34.613636 4.9329984 37.755719 5.4107969 40.835938 6.4785156 C 47.596938 8.8225156 53.151391 13.755359 56.275391 20.193359 C 59.400391 26.631359 59.837141 34.048547 57.494141 40.810547 C 52.613141 54.890547 37.243109 62.34875 23.162109 57.46875 C 9.0811094 52.58875 1.6239062 37.217719 6.5039062 23.136719 C 10.316406 12.135938 20.531658 5.1767914 31.533203 4.9863281 z M 31.638672 8.3183594 C 30.803672 8.3063594 29.968719 8.3399688 29.136719 8.4179688 C 28.584719 8.4359688 28.152875 8.8982188 28.171875 9.4492188 C 28.189875 10.001219 28.652125 10.433063 29.203125 10.414062 C 29.244125 10.413063 29.287125 10.409344 29.328125 10.402344 C 30.080125 10.324344 30.834844 10.286063 31.589844 10.289062 C 32.136844 10.213062 32.517406 9.7081094 32.441406 9.1621094 C 32.382406 8.7381094 32.059672 8.3983594 31.638672 8.3183594 z M 25.052734 9.2421875 C 24.923656 9.2280156 24.7885 9.2397969 24.65625 9.2792969 C 17.61925 11.420297 12.025656 16.787469 9.5976562 23.730469 C 9.4016563 24.246469 9.6617344 24.823531 10.177734 25.019531 C 10.693734 25.215531 11.270797 24.957406 11.466797 24.441406 C 11.473797 24.424406 11.479375 24.406672 11.484375 24.388672 L 11.449219 24.423828 C 13.664219 18.065828 18.787469 13.147359 25.230469 11.193359 C 25.759469 11.035359 26.058391 10.478219 25.900391 9.9492188 C 25.781891 9.5524687 25.439969 9.2847031 25.052734 9.2421875 z M 44.9375 14.75 C 42.5555 14.75 40.626953 16.6805 40.626953 19.0625 C 40.626953 21.4445 42.5565 23.376953 44.9375 23.376953 C 45.5515 23.376953 46.133109 23.243719 46.662109 23.011719 L 43.498047 19.742188 C 43.432047 19.674187 43.396391 19.581328 43.400391 19.486328 C 43.403391 19.391328 43.446578 19.301281 43.517578 19.238281 L 47.535156 15.640625 C 46.811156 15.089625 45.9175 14.75 44.9375 14.75 z M 48.0625 16.105469 L 44.253906 19.517578 L 47.298828 22.664062 C 48.471828 21.893062 49.248047 20.5715 49.248047 19.0625 C 49.248047 17.9145 48.7935 16.878469 48.0625 16.105469 z M 47.982422 18.152344 C 48.117234 18.144234 48.249953 18.21475 48.314453 18.34375 C 48.332453 18.38075 48.7595 19.26225 48.1875 20.40625 C 48.1265 20.52925 48.003 20.599609 47.875 20.599609 C 47.823 20.599609 47.76875 20.5875 47.71875 20.5625 C 47.54575 20.4765 47.4755 20.26775 47.5625 20.09375 C 47.9715 19.27675 47.6985 18.677344 47.6875 18.652344 C 47.6055 18.479344 47.677609 18.2715 47.849609 18.1875 C 47.892609 18.16675 47.937484 18.155047 47.982422 18.152344 z M 39.408203 21.658203 C 38.765203 21.685953 38.0355 21.842 37.25 22.125 C 34.125 23.25 30.375 27.375 30.375 27.375 L 27.367188 30.863281 L 29.835938 33.289062 L 41.044922 21.962891 C 40.607422 21.731891 40.051203 21.630453 39.408203 21.658203 z M 41.601562 22.396484 L 30.333984 33.78125 L 31.789062 35.212891 L 40.25 26.630859 C 40.275 26.606859 42.099766 24.806031 42.009766 23.207031 C 41.926766 22.890031 41.791562 22.615484 41.601562 22.396484 z M 41.771484 25.876953 C 41.285484 26.589953 40.785188 27.085953 40.742188 27.126953 L 32.287109 35.701172 L 33.410156 36.806641 C 33.524156 36.702641 33.634047 36.606 33.748047 36.5 C 39.841047 30.85 41.123484 28.439953 41.771484 25.876953 z M 26.908203 31.394531 L 24.125 34.625 L 29.228516 33.675781 L 26.908203 31.394531 z M 29.720703 34.158203 L 27.962891 35.978516 L 31.083984 35.498047 L 29.720703 34.158203 z M 31.705078 36.111328 L 27.160156 36.810547 L 18.828125 45.433594 L 22.324219 48.871094 L 22.5 48.875 L 21.625 45.25 C 21.625 45.25 26.445578 43.060391 32.892578 37.275391 L 31.705078 36.111328 z M 51.742188 37.121094 C 51.358984 37.191078 51.037266 37.482469 50.947266 37.886719 C 50.834266 38.393719 51.127047 38.903594 51.623047 39.058594 L 53.552734 39.574219 C 54.091734 39.694219 54.626094 39.355406 54.746094 38.816406 C 54.859094 38.309406 54.564359 37.799531 54.068359 37.644531 L 52.140625 37.128906 C 52.005875 37.098906 51.869922 37.097766 51.742188 37.121094 z M 50.042969 41.828125 C 49.654844 41.794 49.265766 41.990219 49.072266 42.355469 C 48.826266 42.819469 48.981734 43.394875 49.427734 43.671875 L 51.158203 44.667969 C 51.640203 44.942969 52.254297 44.774969 52.529297 44.292969 C 52.804297 43.810969 52.636297 43.196875 52.154297 42.921875 L 50.423828 41.941406 C 50.301828 41.876656 50.172344 41.8395 50.042969 41.828125 z M 46.832031 45.832031 C 46.576406 45.832031 46.322453 45.93 46.126953 46.125 C 45.736953 46.515 45.736953 47.147109 46.126953 47.537109 L 47.539062 48.951172 C 47.929063 49.341172 48.561172 49.341172 48.951172 48.951172 C 49.341172 48.561172 49.341172 47.927109 48.951172 47.537109 L 47.539062 46.125 C 47.344063 45.93 47.087656 45.832031 46.832031 45.832031 z M 18.341797 45.9375 L 15.625 48.75 L 21.308594 48.853516 L 18.341797 45.9375 z M 42.669922 48.9375 C 42.541453 48.953781 42.415875 48.995453 42.296875 49.064453 C 41.821875 49.342453 41.659547 49.953688 41.935547 50.429688 L 42.925781 52.152344 C 43.184781 52.640344 43.788391 52.825406 44.275391 52.566406 C 44.763391 52.307406 44.948453 51.703797 44.689453 51.216797 C 44.678453 51.196797 44.66825 51.17525 44.65625 51.15625 L 43.660156 49.425781 C 43.451656 49.068781 43.055328 48.888656 42.669922 48.9375 z M 38.236328 50.886719 C 38.107875 50.867922 37.975297 50.873453 37.841797 50.908203 C 37.839797 50.909203 37.838891 50.908203 37.837891 50.908203 C 37.304891 51.050203 36.985906 51.599813 37.128906 52.132812 C 37.129906 52.134813 37.129859 52.135672 37.130859 52.138672 L 37.646484 54.068359 C 37.811484 54.595359 38.372437 54.887656 38.898438 54.722656 C 39.394438 54.567656 39.689172 54.059734 39.576172 53.552734 L 39.060547 51.623047 C 38.956297 51.222547 38.621688 50.943109 38.236328 50.886719 z"/></svg>
    
    </div>
    
    
    
    
    
    
    </div>
        </div>)
}

export default Skillsets