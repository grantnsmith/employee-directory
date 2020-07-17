import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      {props.results.map((result) => (
        <tbody>
          <tr>
            <td>
              <img src={result.picture.thumbnail} alt="thumbnail"></img>
            </td>
            <td>
              {result.name.first} {result.name.last}
            </td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.date}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;
