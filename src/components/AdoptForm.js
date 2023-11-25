import React from 'react'
import { Link } from 'react-router-dom';

const AdoptForm = () => {
  return (
    <div className='SubmitForm'>
        <h2>Adoption Form</h2>
        <form>
            <label> Pet Type (dog/cat): 
                <input type="text"/>
            </label>
            <label> Pet's Breed: 
                <input type="text"/>
            </label>
            <label> Pet's details: 
                <input type="text"/>
            </label>
            <label> Adopter's Name:
                <input type="text"/> 
            </label>
            <label> Email:
                <input type="text"/>
            </label>
            <label> Phone Number:
                <input type="text"/>
            </label>
            <label> Address:
                <input type="text"/>
            </label>
        </form>
        <div className="enter">
            <Link to="/confirmation">
                <button className="adopting"> Submit </button>
            </Link>
        </div>
    </div>
  )
}

export default AdoptForm