
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Packages = (props) => {
    const { name, img, about, price } = props.package;
    return (

        <Col xs={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Packages;