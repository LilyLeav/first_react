import React from 'react'
import { Link } from 'react-router-dom';

const Member = () => {
  return (
    <div className="container">
      <div className="membership-list">
        <h2>Feel free to subscribe our membership below!</h2>
        <h3>By subscribing our membership, you can ask us about a specific kind of breed that you've been looking for and we will find it for you!</h3>
        <div className="membership-price">
          <p className="member-name">
            Premium Membership
          </p>
          <p className="member-price">
            SGD$15/month
          </p>
        </div>
        <Link to="/memberform"> 
          <button className="adopting"> Subscribe </button>
        </Link>
      </div>
  </div>
  )
}

export default Member