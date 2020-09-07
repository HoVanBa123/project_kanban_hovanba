import React, { Component } from 'react';
import './../Css/LoginSignup.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, NavLink  } from "react-router-dom";

class LoginSignup extends Component {
    render() {
        return (
            <div className='hero'>
                <div>
                    <div className='menu'>
                        <div>
                                <img src='/logo.svg' style={{height: '80px', width: '120px'}}/>
                                <Button variant="warning">
                                    <li >
                                        <NavLink to="/login"><b>Đăng nhập</b></NavLink>
                                    </li>
                                </Button>{' '}
                                <Button variant="danger">
                                    <li>
                                        <NavLink to="/signup"><b>Đăng ký</b></NavLink>
                                    </li>
                                </Button>
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
                                    <img src='/Hero.svg' style={{height: '100%', width: '100%'}}/>
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