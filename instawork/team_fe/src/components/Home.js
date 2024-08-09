import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TeamMemberList from "./TeamMemberList";
import NewTeamMemberModal from "./NewTeamMemberModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    teammembers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getTeamMembers = () => {
    axios.get(API_URL).then(res => this.setState({ teammembers: res.data }));
  };

  resetState = () => {
    this.getTeamMembers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <NewTeamMemberModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TeamMemberList
              teammembers={this.state.teammembers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
