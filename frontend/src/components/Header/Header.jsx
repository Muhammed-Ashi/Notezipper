import React from 'react'
import {Nav,NavDropdown , Navbar , Form , Container , Button , }  from 'react-bootstrap' 
import { useDispatch,useSelector } from 'react-redux';
import { Link ,useNavigate  } from 'react-router-dom';
import { singOut } from '../../actions/userAction';
function Header({setsearch}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state)=> state.login)
  const {userinfo} = userLogin
  const logoutHandler = () => {
              dispatch(singOut())
              navigate('/')
  }
  return (
 
    <Navbar bg="primary" expand="lg"  >
    <Container fluid className='d-flex' >
      <Navbar.Brand >
        <Link  to={'/mynote'}>NotZipper</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Form className="d-flex ml-auto">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=> setsearch(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Nav
          className="ml-auto my-2 my-lg-0 d-flex"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
         
          <NavDropdown title="My Profile" id="navbarScrollingDropdown"
           style={{alignItems:'center',}}>
          <NavDropdown.Item  >
          <Nav.Link as={Link} to='/'>profile</Nav.Link>

          </NavDropdown.Item>

          
            <NavDropdown.Item style={{marginLeft:"5px"}}  onClick={logoutHandler} className='h-10'>Logout</NavDropdown.Item>
          
           
          </NavDropdown>
          <Nav.Link href="mynote" >
            <Link to={'mynote'} > My Notes</Link></Nav.Link>
        
         
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>

   
  );
  
}

export default Header