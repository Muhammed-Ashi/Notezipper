import React from 'react'
import {Alert} from 'react-bootstrap'
function ErrorMessage({children}) {
    console.log(children)
  return (
  <Alert variant={'danger'} style={{fontSize:20}}>
           <span>{children}</span>
     </Alert>
  )
}

export default ErrorMessage