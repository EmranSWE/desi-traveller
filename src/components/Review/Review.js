import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Review.css'
import Reviews from './Reviews/Reviews';
const Review = () => {
    const [review, setReview] = useState([]);
    console.log(review)
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <Container>
            <Row>
                <h2 className='text-primary text-center'>Our Customer Review</h2>
                {
                    review.map(reviews => <Reviews review={reviews}> </Reviews>)
                }
               
            </Row>
            
        </Container>


    );
};

export default Review;