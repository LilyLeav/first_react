import React from 'react'
import { Link } from 'react-router-dom';

const Submit = () => {
  return (
    <div className="intro">
        <h2>Want to submit your pet? Feel free to fill in this form!</h2>
        <div className='SubmitForm'>
            <h2>Pet Submission</h2>
            <form>
                <label> Pet Name: 
                    <input type="text"/>
                </label>
                <label> Submitter Name:
                    <input type="text"/> 
                </label>
                <label> Email:
                    <input type="text"/>
                </label>
                <label> Phone Number:
                    <input type="text"/>
                </label>
                <label> Pet Description:
                    <input type="text"/>
                </label>
                <label> Pet Gender:
                    <input type="text"/>
                </label>
                <label> Pet's Age:
                    <input type="text"/>
                </label>
            </form>
            <div className="enter">
                <Link to="/confirmation">
                    <button className="adopting"> Submit </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Submit