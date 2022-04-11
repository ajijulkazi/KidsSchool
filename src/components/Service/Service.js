import React from 'react';
import { Card } from 'react-bootstrap';
import pic1 from '../../Images/pic-1.jpg';

const Service = (props) => {
    const {title,imgToUrl,price,description}=props.service;
    return (
        <div>
            <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Header as="h5">{price}</Card.Header>
        <Card.Img variant="top" src={pic1} />
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

export default Service;