import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashBoard from '../Dashboard/DashBoard';
import Header from '../Header/Header';
import Packages from '../packages/Packages';
import Review from '../Review/Review';

const Home = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('packages.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    const headerImg = 'https://images.unsplash.com/photo-1619177383949-f03975e50b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y294JTIwYmF6YXIlMjBzZWElMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <Col xs={6}>
                        <h3 className='fs-1 fw-bold'>Your Next Tour </h3>
                        <h3 className='fs-1 fw-bold text-primary'>Is Your Best Tour</h3>
                        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts</p>
                        <button className='btn btn-primary'>More Info...</button>
                    </Col>
                    <Col xs={4}>
                        <img src={headerImg} alt="" />
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-primary text-center'>Our Packages</h2>
                    {
                        packages.map(packages => <Packages package={packages}></Packages>)
                    }

                </Row>
            </Container>

            {/* Review */}
            <Review></Review>
            <div className='d-flex'>
                <div className='mx-auto mt-5 mb-5'>
                    <Link className='fs-3 text-decoration-none text-primary' to='/review'><span className='text-center'>  See All Review</span></Link>
                </div>

            </div>


        </div>
    );
};

export default Home;