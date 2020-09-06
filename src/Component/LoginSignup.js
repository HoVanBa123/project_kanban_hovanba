import React, { Component } from 'react';
import './../Css/Login.css'
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import {BrowserRouter as Router, NavLink  } from "react-router-dom";
import RouterURL from './../RouterURL/RouterURL'
import hero from './../images/hero-a.svg'
import logo from './../images/trello-logo-blue.svg'

class LoginSignup extends Component {
    render() {
        return (
            <div className='hero'>
                <div>
                    <div className='menu'>
                        <div>
                                <img src={logo} />
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
                                    <Image src={hero} thumbnail />
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