import React from 'react'
import { Link } from 'react-router-dom';

const Cats = () => {
  return (
    <div className="header">
      <h2>Available for adoption!</h2>
        <div className="pet-pic">
          <img src='https://www.purina.com.sg/sites/default/files/styles/ttt_image_510/public/2020-11/Hero-Small-Mobile-cats.jpg?itok=hEnG1ehe' />
          <div className="pet-name">
            <div className="name">Pocha</div>
            <Link to="/adoptform">
              <button className="adopting"> Adopt </button>
            </Link>
          </div>  
        </div>
  </div>
  )
}

export default Cats