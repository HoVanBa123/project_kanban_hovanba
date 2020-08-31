import React, { Component } from 'react';
import { Button, Container, Row, Col, FormControl, Form } from 'react-bootstrap';
import './../Css/Signup.css'

class Signup extends Component {
    render() {
        return (
            <div>
               <Container>
                   <Row>
                       <Col></Col>
                       <Col className='signup'>
                            <img />
                            <div>
                                <p>Sign up for your account</p>
                                <Form>
                                    <FormControl aria-label="Text input with checkbox" />
                                    <FormControl aria-label="Text input with checkbox" />
                                    <FormControl aria-label="Text input with checkbox" />
                                </Form>
                            </div>
                       </Col>
                       <Col>ABC</Col>
                   </Row>
               </Container>
            </div>
        );
    }
}

export default Signup;