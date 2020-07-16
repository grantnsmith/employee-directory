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
    results: {},
    search: "",
  };

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    API.search()
      .then((res) => this.setState({ results: res.data }))
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
              <Table
                phone={this.state.results.phone}
                picture={this.state.results.picture}
                name={this.state.results.name}
                email={this.state.results.email}
                dob={this.state.results.dob}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
