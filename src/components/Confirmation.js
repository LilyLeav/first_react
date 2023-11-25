import React from 'react'
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="confirmation">
      <div className="confirmation-label">  
        <div class="notice-1">
          <h1>Thank you!</h1>
          <h3>A confirmation email has been sent to you</h3>
        </div>
        <div class="notice-1">
          <h4>If there is any changes or enquiries, please contact us by emailing to PetHeaven1@example.com!</h4>  
        </div>
        <div class="button-home">
          <Link to="/">
            <button className="adopting">Ok</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Confirmation