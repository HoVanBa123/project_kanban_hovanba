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
        const password =  this.refs.textPassword.value
        if(email == '' || name == '' || password == '') {
            alert('Vui lòng kiểm tra lại và nhập đầy đủ thông tin')
        }
        const user = this.state.usrerInfor.concat([{email: email, name: name, password: password}])
        localStorage.setItem('userSignup', JSON.stringify(user))
        this.setState({
            usrerInfor: user
        });
        alert('bạn đã đăng ký thành công')
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