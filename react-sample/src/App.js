import React, { Component } from "react";
import "./App.css";
import User from "./user/User";
import { Route } from "react-router-dom";
import Chatroom from "./chat/Chatroom";
import ChatForm from "./chat/ChatForm";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class App extends Component {
  state = {
    name: "",
  };

  onNameChange = (name) => {
    this.setState({ name: name });
  };

  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/users'>User</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/chat'>Chat</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Route path='/users' component={User}></Route>
        <Route path='/chat' component={ChatForm}></Route>
        <Route path='/chatroom' component={Chatroom}></Route>
        {/* <div>
          <User onNameChange={this.onNameChange}/>
        </div> */}
      </div>
    );
  }
}

export default App;
