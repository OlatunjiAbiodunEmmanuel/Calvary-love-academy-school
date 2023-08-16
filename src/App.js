
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';
import Error404 from './Error404';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>

      <BrowserRouter>
    <Navigation/>

    <Routes>
    <Route path='/' element={<Main/>}/>
    {/* <Route path='/Contact' element={<Contact/>}/> */}
    {/* <Route path='/AMBASSADORS & LEMO CLUB' element={<Ambasado/>}/> */}
    <Route path='*' element={<Error404/>}/>
    </Routes>
    
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
