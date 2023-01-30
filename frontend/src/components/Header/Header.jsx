import React from 'react'
import {Nav,NavDropdown , Navbar , Form , Container , Button , }  from 'react-bootstrap' 
import { Link } from 'react-router-dom';
function Header() {
  return (
 
    <Navbar bg="primary" expand="lg"  >
    <Container fluid className='d-flex' >
      <Navbar.Brand >
        <Link to={'/'}>NotZipper</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Form className="d-flex ml-auto">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Nav
          className="ml-auto my-2 my-lg-0 d-flex"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
         
          <NavDropdown title="My Profile" id="navbarScrollingDropdown" >
            
          <NavDropdown.Item href="#action3" className='h-10'>My Profile</NavDropdown.Item>
          
            <NavDropdown.Item href="#action3" className='h-10'>Logout</NavDropdown.Item>
          
           
          </NavDropdown>
          <Nav.Link href="/mynote" >
            <Link to={'mynote'} > My Notes</Link></Nav.Link>
        
         
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>

   
  );
  
}

export default Header