import React from 'react';
import { Card } from 'react-bootstrap';
import pic5 from '../../Images/pic-5.jpg';
const Teacher = (props) => {
    const {name, title,description}=props.teacher;
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={pic5} />
            <Card.Header as="h5">{name}</Card.Header>
        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Teacher;