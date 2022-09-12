import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Reviews = (props) => {
    const { img, about, name, ratings } = props.review;
    console.log(props)
    return (
       
            <Col xs={4}>
         <Card className='mt-5 ' style={{ width: '18rem' }}>
            <span className='img-round'> <Card.Img variant="top" src={img} /></span>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about<200? 'no': about+'yes'}
                </Card.Text>
                <Card.Text>
                    {ratings}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card></Col>
        
    );
};

export default Reviews;