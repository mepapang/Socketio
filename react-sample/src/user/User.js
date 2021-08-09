import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

    state = {
        data: []
    };

    async componentDidMount() {
        const result = await axios.get('http://jsonplaceholder.typicode.com/users');
        this.setState({data: result.data});
    }

    onChange = event => {
        this.props.onNameChange(event.target.value);
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <td>
                            ID
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                            Email
                        </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(user => (
                            <tr> 
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>
            // <div>
            //     <input type="text" onChange={this.onChange}></input>
            // </div>
        );
    }
}

export default User;