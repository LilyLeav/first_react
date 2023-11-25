import NavBar from './components/NavBar';
import './styles.css';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import About from './components/About';
import Home from './components/Home';
import Submit from './components/Submit';
import Member from './components/Member';
import MemberForm from './components/MemberForm';
import AdoptForm from './components/AdoptForm';
import Confirmation from './components/Confirmation';
import Login from './components/Login';

import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
    <Router>
   
      <NavBar />
     
      <div   className='container'>
     
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/funcat' element={ <Cats /> } />
            <Route path='/fundog' element={ <Dogs /> } />
            <Route path='/funsub' element={ <Submit />} />
            <Route path='/funmem' element={ <Member />} />
            <Route path='/memberform' element={ <MemberForm />} />
            <Route path='/adoptform' element={ <AdoptForm />} />
            <Route path='/confirmation' element={ <Confirmation />} />
            <Route path='/login' element={ <Login />} />
            </Routes>
       
      </div>
      </Router>
    </>

   
  );
}

export default App;