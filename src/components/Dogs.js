import React from 'react'
import { Link } from 'react-router-dom';

const Dogs = () => {
  return (
    <div className="header">
      <h2>Available for adoption!</h2>
      <div className="pet-pic">
        <img src='https://petsy.com.au/wp-content/uploads/2022/04/Rectangle-5.png' />
          <div className="pet-name">
            <div className="name">Pochi</div>
            <Link to="/adoptform">
              <button className="adopting"> Adopt </button>
            </Link>

          </div>  
        </div>
  </div>
  )
}

export default Dogs