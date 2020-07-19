import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Click on "Name" to sort users alphabetically or use the search box to
          find a user.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
