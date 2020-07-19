import React from "react";
import "./style.css";

function Form(props) {
  return (
    <div>
      <form className="form">
        <input
          value={props.search}
          onChange={props.handleSearch}
          type="text"
          placeholder="Search for employee"
        />
      </form>
    </div>
  );
}

export default Form;
