import React from 'react';
import {Button,Card,Row,Col} from 'react-bootstrap'
import pic1 from '../../Images/pic-1.jpg';
import {Link} from 'react-router-dom'
const Home = () => {
    
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={pic1}/>
        <Card.Body>
          <Card.Title>Services</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Link to='/service'>
          <Button variant="primary">See All Service</Button>
          </Link>
        </Card.Body>
        
      </Card>
    </Col>
  ))}
</Row>
        </div>
    );
};

export default Home;