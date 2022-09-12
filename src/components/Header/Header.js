import { Button } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
        <div>
             <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className='fs-2 text-decoration-none text-white ' to='/'> Navbar </Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end text-decoration-none">
          <Nav.Link ><Link className='fs-4 text-decoration-none text-white p-3' to='/home'>HOME</Link></Nav.Link>
            <Nav.Link><Link className='fs-4 text-decoration-none text-white p-3' to='/booking'>BOOKING</Link></Nav.Link>
            <Nav.Link><Link className='fs-4 text-decoration-none text-white p-3' to='/review'>REVIEW</Link></Nav.Link>
            <Nav.Link ><Link  className='fs-4 text-decoration-none text-white p-3' to='/dashboard'> DASHBOARD</Link></Nav.Link>
            <Nav.Link ><Link  className='fs-4 text-decoration-none text-white p-3' to='/blogs'> BLOGS</Link></Nav.Link>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
        </div>
    );
};

export default Header;