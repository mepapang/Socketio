import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { Redirect } from 'react-router-dom';

class Chatroom extends Component {
    state = {
       messages: [
           {text: 'Hi', member: 'FutureSkill'},
           {text: 'Hi', member: 'Papang'},
           {text: 'Good Bye', member: 'FutureSkill'},
           {text: 'Bye', member: 'Papang'}
       ],
       socket: null
    }

    componentDidMount() {
        if (this.state.socket == null) {
            const socket = socketIOClient("http://localhost:8080");
            socket.on("message", (message) => {
                this.addMessage(message);
            });
            this.setState({ socket:socket });

        }
        
    }

    onMessageSend = message => {
        this.addMessage(message);
        this.state.socket.emit("emit", {...message});
    };

    addMessage = message => {
        this.setState({ messages: [...this.state.messages, {...message}] });
    }
   
    render() {
        if (this.props.location.name == null) {
            return <Redirect to="/chat" />
        }

        // ------ ในการส่งค่าผ่าน Link จะถูกเก็บใน location จากหน้า Chatform ------
        const {name} = this.props.location;
        return (
            <div>
                <MessageList message={this.state.messages}/>
                <MessageForm onMessageSend={this.onMessageSend} currentMember={name}/>
            </div>
        );
    }
}

export default Chatroom;