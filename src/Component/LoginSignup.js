import React, { Component } from 'react';
import './../Css/Login.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, NavLink  } from "react-router-dom";
import RouterURL from './../RouterURL/RouterURL'

class LoginSignup extends Component {
    render() {
        return (
            <div className='hero'>
                <div>
                    <div className='menu'>
                        <div>
                                <img src='./../public/trello-logo-blue.svg' />
                                <Button variant="warning">
                                    <li>
                                        <NavLink to="/login">Đăng nhập</NavLink>
                                    </li>
                                </Button>{' '}
                                <Button variant="warning">
                                    <li>
                                        <NavLink to="/signup">Đăng ký</NavLink>
                                    </li>
                                </Button>{' '}  
                        </div>                                               
                    </div>
                    <div className='introduce'>
                        <Container>
                            <Row>
                                <Col>
                                    <h1>Trello giúp các nhóm làm việc có tính hợp tác hơn và làm được nhiều hơn.</h1>
                                    <h4>Các bảng, danh sách, và thẻ của Trello cho phép các nhóm tổ chức và ưu tiên các dự án một cách vui vẻ, linh hoạt và xứng đáng.</h4>
                                </Col>
                                <Col>
                                    <img src='./../public/hero-a.svg'  style={{width: '100%', height: '100%'}} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginSignup;