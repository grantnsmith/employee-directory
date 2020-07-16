import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  state = {
    search: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { search, value } = event.target;

    // Updating the input's state
    this.setState({
      [search]: value,
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.search}
            search="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search for employee"
          />
        </form>
      </div>
    );
  }
}

export default Form;
