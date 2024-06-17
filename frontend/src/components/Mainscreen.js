import React from 'react'
import {Container,Row} from 'react-bootstrap'
import './mainScreen.css'
function Mainscreen({title,children}) {
  console.log(children,"njan")
  return (
    <div className='mainBack'>
        <Container>
            <Row>
                <div className='page'>
                  {title && (
                    <><h1 className='heading'>{title}</h1>
                    <hr />
                    </> 
                  )}
                 {children}
      
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Mainscreen