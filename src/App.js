import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import Table from "./components/Table";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import API from "./utils/API";
import util from "./utils/utils";

class App extends Component {
  state = {
    results: [],
    filteredResults: [],
    search: "",
    order: "ascending",
  };

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    API.search()
      .then((res) =>
        this.setState({
          results: res.data.results.sort(util.ascOrderName),
          filteredResults: res.data.results.sort(util.ascOrderName),
        })
      )
      .catch((err) => console.log(err));
  };

  changeSorting = () => {
    if (this.state.order === "ascending") {
      this.setState({
        ...this.state,
        filteredResults: this.state.results.sort(util.descOrderName),
        order: "descending",
      });
    } else if (this.state.order === "descending") {
      this.setState({
        ...this.state,
        filteredResults: this.state.results.sort(util.ascOrderName),
        order: "ascending",
      });
    }
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const filteredArr = this.state.results.filter((person) => {
      const name = person.name.first + " " + person.name.last;
      return name.toLowerCase().startsWith(event.target.value.toLowerCase());
    });
    this.setState({
      filteredResults: filteredArr,
    });
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col>
              <Form
                value={this.state.search}
                handleSearch={this.handleInputChange}
              />
              <Table
                results={this.state.filteredResults}
                order={this.state.order}
                sorting={this.changeSorting}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
