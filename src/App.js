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
        })
      )
      .catch((err) => console.log(err));
  };

  changeSorting = () => {
    if (this.state.order === "ascending") {
      this.setState({
        ...this.state,
        results: this.state.results.sort(util.descOrderName),
        order: "descending",
      });
    } else if (this.state.order === "descending") {
      this.setState({
        ...this.state,
        results: this.state.results.sort(util.ascOrderName),
        order: "ascending",
      });
    }
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col>
              <Form />
              <Table
                results={this.state.results}
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
