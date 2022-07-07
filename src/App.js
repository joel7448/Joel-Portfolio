import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar';
import Animation from './animation';
import Footer from './footer';
import Frontpage from './Frontpage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';

function App() {
  
  return (
    <div >
      <BrowserRouter>
      <Routes>

<Route path='/' element={<Frontpage></Frontpage>}/>

<Route  path='/Joel-portfolio' element={<Animation ></Animation>}/>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
