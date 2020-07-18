import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import Table from "./components/Table";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import API from "./utils/API";

class App extends Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    this.findEmployees();
  }

  ascOrder = (a, b) => {
    var a = a.name.first,
      b = b.name.first;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  descOrder = (a, b) => {
    var a = a.name.first,
      b = b.name.first;
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  };

  findEmployees = () => {
    API.search()
      .then((res) =>
        this.setState({
          results: res.data.results.sort(this.ascOrder),
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col>
              <Form />
              <Table results={this.state.results} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
