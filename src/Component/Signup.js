import React, { Component } from 'react';
import { Button, Container, Row, Col, FormControl, Form } from 'react-bootstrap';
import './../Css/Signup.css'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usrerInfor: [],
            email: '',
            name: '',
            password: ''
        }
        this.emailChange = this.emailChange.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    }
    
    signup() {
        const email = this.refs.textEmail.value
        const name = this.refs.textName.value
        const password = this.refs.textPassword.value
        const url = 'https://540ce9f86ca7.ngrok.io/api/auth/signup'
        const data = { "username": name, "email": email, "password": password }
        console.log(data)
        fetch(url,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function(res) { 
            if (res.status === 200) {
                alert("Dang ky thanh cong")
            }
            console.log(res) 
        })
        .catch(function(res){ console.log(res) })

    }
    emailChange(event) {
        this.setState({ email: event.target.value })
    }
    nameChange(event) {
        this.setState({ name: event.target.value })
    }
    passwordChange(event) {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
               <Container fluid>
                   <Row>
                       <Col>
                       </Col>

                       <Col className='interface'>
                            <img src='/logo.svg' style={{height: '100px', width: '150px'}}/>
                            <div className='item'>
                                <p><b>Đăng ký cho tài khoản bạn</b></p>
                                <input type='email' placeholder='Enter email address' size='40'
                                    value={this.state.email}
                                    ref='textEmail'
                                    onChange={this.emailChange}
                                />

                                <input type='text' size='40' placeholder='Enter full name'
                                    value={this.state.name}
                                    ref='textName'
                                    onChange={this.nameChange}
                                    
                                />

                                <input type='password' size='40' placeholder='Create password' 
                                    value={this.state.password}
                                    ref='textPassword'
                                    onChange={this.passwordChange}
                                /> <br />
                                <button onClick={() => this.signup()}>Sign up</button>
                            </div>
                       </Col>

                       <Col>
                       </Col>
                   </Row>
               </Container>
            </div>
        );
    }
}

export default Signup;