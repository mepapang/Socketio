import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Form, FormGroup, Label, Input} from 'reactstrap';

class ChatForm extends Component {
  state = {
    name: "",
  };

  onChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for='Username'>Username</Label>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Please enter your username'
            value={this.state.name}
            onChange={this.onChange}
          />
        </FormGroup>
        <Link to={{ pathname: "/chatroom", name: this.state.name }}>Join</Link>
      </Form>
    );
  }
}

export default ChatForm;
