import React from "react";
import { Link } from "react-router-dom";

const MemberForm = () => {
  return (
    <div className="SubmitForm">
      <h2>Member Subscription</h2>
      <form>
        <label>
          {" "}
          Name:
          <input type="text" />
        </label>
        <label>
          {" "}
          Email:
          <input type="text" />
        </label>
        <label>
          {" "}
          Phone Number:
          <input type="text" />
        </label>
        <label>
          {" "}
          Address:
          <input type="text" />
        </label>
        <label>
          {" "}
          Gender:
          <input type="text" />
        </label>
        <label>
          {" "}
          Age:
          <input type="text" />
        </label>
      </form>
      <div className="enter">
        <Link to="/confirmation">
          <button className="adopting"> Submit </button>
        </Link>
      </div>
    </div>
  );
};

export default MemberForm;
