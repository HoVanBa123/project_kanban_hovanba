import React, { Component } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: ''
        }
        this.emailChange = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    }
    login() {
        const email = this.refs.textEmail.value
        const password =  this.refs.textPassword.value
        const atr = localStorage.getItem('userSignup')
        const emp = JSON.parse(atr)
        const a = emp.find(x => x.email == email & x.password == password)
        if(email == '' || password == '') {
            alert('Vui lòng nhập đầy đủ thông tin')          
        } else {
            if(a == undefined) {
                alert('Tài khoản hoặc mật khẩu không đúng, vui lòng kiểm tra lại')
            } else {
                alert('Đăng nhập thành công')
            }
        }
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

                                <input type='email' placeholder='Nhập email' size='40'
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