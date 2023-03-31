import React from 'react'
import './landingPage.css'
import {Container,Row , Button} from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import "./LoginScreen/LoginScreen.css"
import { useEffect } from 'react'
function LandingPage({history}) {
   const navigate = useNavigate()
  useEffect(() => {
     const userInfo = localStorage.getItem("userInfo")
    if (userInfo){
      navigate('/mynote')
    }else{
      navigate("/")
    }
  
   
  },[history] )
  
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