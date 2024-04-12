import React, { useEffect, useState } from 'react'
import {Alert} from 'react-bootstrap'
function  ErrorMessage({children}) {
  const [errorManager, seterrorManager] = useState(" ")
  // useEffect(() => {
  //    seterrorManager(children)
  // console.log(children,"yes")
  //   return () => {
  //      console.log("cleanup is happened ")
  //   seterrorManager("")
  //   }
  // }, []) 
  

  return (
  <Alert variant={'danger'} style={{fontSize:20}}>
           <span>{children}</span>
     </Alert>
  )
}

export default ErrorMessage