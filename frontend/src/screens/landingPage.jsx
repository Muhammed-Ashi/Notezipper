import React from 'react'
import './landingPage.css'
import {Container,Row , Button} from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import "./LoginScreen/LoginScreen.css"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function LandingPage({history}) {
   const navigate = useNavigate()
   
   const userLogin = useSelector(state => state.login)
  let { userinfo,success} = userLogin
   
  useEffect(() => {
    if (userinfo.length ==0){
       navigate('/')
    }else {
      navigate("/mynote")
    }
  },[] )
  
  return (
    <div className='main'>
        <Container>
          <Row>
            <div className='intro-text'>
                <div>
                    <h5 className='title'>welcome to Note Zipper</h5>
                    <p className='subtitle'>One safe place for your all notes.</p>
                    
                </div>
                <div className='buttonContainer' >
                       <a href="">
                           <Button size='lg' className='landingButton' ><Link to={'/login'}>Login</Link></Button>
                           </a>
                         <a href="">
                           <Button size='lg' className='landingButton' ><Link to={'/register'}>Signup</Link></Button>
                         </a>
                </div>
            </div>
            
          </Row>
        </Container>
    </div>
  )
}

export default LandingPage