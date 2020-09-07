import React, { Component } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: '',
            loggedInUser: false
        }
        this.emailChange = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    }

    login() {
        const name = this.refs.textEmail.value
        const password =  this.refs.textPassword.value
        const url = 'https://540ce9f86ca7.ngrok.io/api/auth/signin'
        const data = { "username": name, "password": password }
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
        .then(async (res)  => { 
            if (res.status === 200) {
                const data = await res.json()
                console.log(data)
                localStorage.setItem('token', data.accessToken)
                this.props.history.push('/kanban');
            }
        })
        .catch(function(res){ console.log(res) })
    }
    emailChange(event) {
        this.setState({ email: event.target.value })
    }
    passwordChange(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        return (
           <div>
               <Container fluid>
                   <Row>
                        <Col></Col>
                        <Col className='interface'>
                            <img src='/logo.svg' style={{height: '100px', width: '150px'}}/>
                            <div className='item'>
                                <p><b>Đăng nhập cho tài khoản bạn</b></p>

                                <input type='email' placeholder='Nhập ten' size='40'
                                    value = {this.state.email}
                                    ref = 'textEmail'
                                    onChange={this.emailChange}
                                />

                                <input type='password' size='40' placeholder='nhập mật khẩu' 
                                    value={this.state.password}
                                    ref='textPassword'
                                    onChange={this.passwordChange}
                                /> <br />
                                <button onClick={() => this.login()}>Đăng nhập</button>
                            </div>
                        </Col>
                        <Col></Col>
                   </Row>
               </Container>
           </div>
        );
    }
}
export default Login;