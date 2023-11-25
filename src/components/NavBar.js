import React from 'react';

import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
    <>
       
        <nav>
        <div className='menuitem'>
                <Link to='/'>Home</Link>    
                <Link to='/about'>About</Link>
                <Link to='/funcat' >Cats</Link>
                <Link to='/fundog' >Dogs</Link>
                <Link to='/funsub' >Submit Pet</Link>
                <Link to='/funmem' >Membership</Link>
                <Link to="/login" >Login</Link>
        </div>
        </nav>
    </>
    )
}

export default NavBar