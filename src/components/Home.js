import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="intro-pic">
      <h2>Welcome to Pet Heaven! </h2>
      <h3>Are you perhaps a cat lover? or maybe dog lover? It's a sign to adopt one from Pet Heaven!
          We've got different types of breed available!
          Planning to submit your pet? You can do it here in Pet Heaven!</h3>
      
      <img src='https://www.petfinder.com/static/b1ce1e9ea05afd11ea6581290fe6a872/86e4b/147650824-introducing-foster-pets-632x475.jpg' />
      
      <h3>For our lovely customers with membership, you can request for a specific breed or appearance for your beloved pet with the button below!</h3>
      <Link to="/AdoptForm">
        <button className="adopting">Custom Request</button>
      </Link>
    </div>
  )
}

export default Home