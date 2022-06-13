import React, { Component } from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
export class Register extends Component {


    constructor(props) {
        super(props);
        this.state = { username: "", password: "", passwordConfirmation: "", serverCallStatus: "", loading: true };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlepasswordConfirmationChange = this.handlepasswordConfirmationChange.bind(this);
    }


    async register(event,props) {

        const {
            username,
            password,
            passwordConfirmation
        } = this.state;
        console.log(username, password, passwordConfirmation);
        try {
           await axios.post('https://localhost:7072/api/Register/register', {
                username: username,
                password: password,
                passwordConfirmation: passwordConfirmation
            }).then((response) => {
                console.log(response);
                console.log(response.data);
                console.log(response.status);

                if (response.status == 200) {  //good
                    this.setState({ serverCallStatus: "Registered" });
                    this.props.history.push('/Home');
                    this.props.history.go('/Home');
                    
                } else {
                    this.setState({ serverCallStatus: "Already exists or bad credentials." });
                }


            });
        } catch (error) {
            this.setState({ serverCallStatus: "Already exists or bad credentials." });
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
    handlepasswordConfirmationChange(event) {
        this.setState({
            passwordConfirmation: event.target.value
        });
    }
  


    render() {
  

        return (
            <div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username (6-15 characters)</Form.Label>
                        <Form.Control type="text"  onChange={this.handleUsernameChange} placeholder="Username" />
                        <Form.Text className="text-muted">
                            We'll share your data with everyone. Even people you don't want to have your data.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password (6-15 characters)</Form.Label>
                        <Form.Control type="password" onChange={this.handlePasswordChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password (6-15 characters)</Form.Label>
                        <Form.Control type="password" onChange={this.handlepasswordConfirmationChange} placeholder="Password Confirmation" />
                    </Form.Group>
                    <Button disabled={this.state.username == "" || this.state.password == "" || this.state.passwordConfirmation == ""}variant="primary" onClick={() => { this.register()}}>
                        Submit
                    </Button>
                </Form>
                {this.state.serverCallStatus}
          

            </div>
        );
    }




}
