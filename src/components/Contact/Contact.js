import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <Container>
                <Row > 
                    <div className="map-container">
                      
                      <div >
                          
                      <Col className='User-container'>
                    <Container>
                        <Row>
                            <Col><div className="contact-container">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full Name" />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Label>Your Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Subject" />
                            <Form.Text className="text-muted">
                            * All fields are obligatory
                            </Form.Text>
                        </Form.Group>
                        
                        

                        </Form>
            </div></Col>
                            <Col><div className="text-container">
                    
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control placeholder="Enter Your Ask" as="textarea" rows={3} />
                    </Form.Group>
                        <div>
                    <Link to='/home'>
                    <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Link>
                    </div>

                </div></Col>
                        </Row>
                    </Container>
                    </Col>
                        <p className='p1-container'>Parents may also directly write to the concerned person by email, if required, instead of using the inquiry form given above.</p>
                          <div className='info-container'>
                          <p>
                              <strong>Telephone:</strong>
                              "58815222-3, 58817087-94"
                              <br />
                              <strong>Mobile:</strong>
                              "01810000000"
                              <br />
                              <strong>Email:</strong>
                              <Link to='/home'>Info@KidsSchool.com</Link>
                              <br />
                              <strong>Fax:</strong>
                              "58813141."
                          </p>
                          </div>
                      </div>
                      <Col >
                        <h1 className='card-container'>Contact Us</h1>
                        
                        <div className='map-container'>
                        <Map></Map>
                        </div>
                        
                      </Col>
                      </div>
                      
                    
                </Row>
                </Container>


                
        </div>
    );
};

export default Contact;