import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewTeamMemberForm extends React.Component {
  state = {
    pk: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    admin: false
  };

  componentDidMount() {
    if (this.props.teammember) {
      const { pk, first_name, last_name, email, phone_number, admin } = this.props.teammember;
      this.setState({ pk, first_name, last_name, email, phone_number, admin });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createTeamMember = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editTeamMember = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.teammember ? this.editTeamMember : this.createTeamMember}>
        <FormGroup>
          <Label for="first_name">First Name:</Label>
          <Input
            type="text"
            name="first_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.first_name)}
          />
          <Label for="last_name">Last Name:</Label>
          <Input
            type="text"
            name="last_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.last_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number">Phone:</Label>
          <Input
            type="text"
            name="phone_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone_number)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="admin">Admin:</Label>
          <Input
            type="checkbox"
            name="admin"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.admin)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewTeamMemberForm;
