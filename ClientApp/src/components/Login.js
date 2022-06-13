import React, { Component } from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
export class Login extends Component {


    constructor(props) {
        super(props);
        this.state = { username: "", password: "", serverCallStatus: "", loading: true };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    async login(event,props) {
   
        const {
            username,
            password
        } = this.state;
        console.log(username, password);
        try {
           await axios.post('https://localhost:7072/api/Login/login', {
                username: username,
                password: password
            }).then((response) => {
                console.log(response);
                console.log(response.data);
                console.log(response.status);

                if (response.status == 200) {  //good
                    this.setState({ serverCallStatus: "Logging you in" });
                    this.props.history.push('/Home');
                    this.props.history.go('/Home');
                    
                } else {
                    this.setState({ serverCallStatus: "Bad username or password." });
                }


            });
        } catch (error) {
            this.setState({ serverCallStatus: "Bad username or password." });
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

  


    render() {
  

        return (
            <div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"  onChange={this.handleUsernameChange} placeholder="Username" />
                        <Form.Text className="text-muted">
                            We'll share your data with everyone. Even people you don't want to have your data.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={this.handlePasswordChange} placeholder="Password" />
                    </Form.Group>
                    <Button disabled={this.state.username == "" || this.state.password == "" }variant="primary" onClick={() => { this.login()}}>
                        Submit
                    </Button>
                </Form>
                {this.state.serverCallStatus}
          

            </div>
        );
    }




}
