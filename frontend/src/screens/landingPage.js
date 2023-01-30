import React from 'react'
import './landingPage.css'
import {Container,Row , Button} from 'react-bootstrap'
function LandingPage() {
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
                           <Button size='lg' className='landingButton' >Login</Button>
                         </a>
                         <a href="">
                           <Button size='lg' className='landingButton' >Signup</Button>
                         </a>
                </div>
            </div>
            
          </Row>
        </Container>
    </div>
  )
}

export default LandingPage