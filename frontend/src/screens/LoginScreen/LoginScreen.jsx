import React, { useState ,useEffect } from 'react'
import Mainscreen from '../../components/Mainscreen'
import { Form,Button ,Row ,Col}from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import{ useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';




function LoginScreen() {
  const [email, setemail] = useState("")
  const [password, setpassowrd] = useState("")
  

   const dispatch =  useDispatch()
   const navigate = useNavigate()
        
 const userLogin = useSelector((state)=> state.userLogin)
       
 const { 
  loading , error , userinfo} = userLogin


  useEffect(() => {
    if (userinfo){
           navigate('/mynote')
    }
  
  
  }, [userinfo])
  

     const submitHandler = async(e) => {
      e.preventDefault()
         console.log(email,password)
            dispatch(login(email,password))
       
     }
  return (
     <Mainscreen title={'Login'}>
        <div className='loginContainer'>
          {loading && <Loading/>}
          {error && <ErrorMessage >{error}</ErrorMessage>}
          <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        value={email}
         onChange={(e) => setemail(e.target.value)}
         type="email" placeholder="Enter email" />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
               value={password}
               onChange={(e) => setpassowrd(e.target.value)}
         type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row className='py-3'>
         <Col>
         New Customer ? <Link to={'/register'}> register here</Link>
         </Col>
    </Row>
    </div>
     </Mainscreen>

  )
}

export default LoginScreen