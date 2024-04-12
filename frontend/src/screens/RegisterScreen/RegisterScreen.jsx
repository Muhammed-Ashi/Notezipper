import React, { useState,useEffect } from 'react'
import Mainscreen from '../../components/Mainscreen'
import {Form ,Button} from "react-bootstrap"
import ErrorMessage from '../../components/ErrorMessage'
import axios from 'axios'
import Loading from '../../components/Loading'
import { useDispatch,useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { registerUser } from '../../actions/userAction'
function RegisterScreen() {
      const [email, setEmail] = useState("")
   
      const [name, setName] = useState("")
      const [picError, setPicError] = useState("")
      
      const [password,setPassword] = useState("")
      const [confirmPassword,setconfirmPassword] = useState("")
      const [message, setMessage] = useState(null)
      const [picMessage, setpicMessage] = useState(null)
     

      const dispatch = useDispatch()
      const navigate = useNavigate()
      
       const register = useSelector((state) => state.register)
        const { loading , error , userinfo} = register
      
        useEffect(() => {
         if (userinfo[0]){
            navigate('/login')
            
         }
        
        }, [userinfo])
        
      const submitHandler =async (e) => {
   
        e.preventDefault()
        if (password !== confirmPassword ) {
           setMessage('password do not match')
        if (!picMessage){
          setPicError('please select Image')
        }
        }else  {
          dispatch(registerUser(name, picMessage, email, password))
          console.log(password,"error checking for mail")
                  
        }
   console.log(picMessage,'Picmessage')
        
      }

     const postDetails = (pics) => {
      console.log(pics,"pics console")
      if (!pics) {
        return setPicError('image type doesnt support ')
       }  else(
        setPicError("")
       )         
      if (pics.type === 'image/jpeg ' || pics.type === "image/png") {
                  const data = new FormData()
                  data.append("file",pics)
                  data.append("upload_preset","Notezipper")
                   console.log(data,"frp")
                  const baseUrl="https://api.cloudinary.com/v1_1/dguueu7om/image/upload"
                  fetch(baseUrl,{
                   
                    method:'POST',
                    body : data,
                    

                  }).then((res)=> res.json())
                    .then((data)=> {
                      console.log(data,"console")
                      setpicMessage(data.url)
                    })
                  .catch((err)=> {
                    console.log( err,"ndham")
                  
                  })
             }else {
               return setPicError('Please Select Image')
             }
     }
  return (
     <Mainscreen title={'Register'}>
      <div style={{ paddingLeft: '20px' ,paddingRight:'20px'}}> 
         <div className='loginContainer'>
          {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
          {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
          {loading && <Loading/>}
          
         <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name
        " value={name} onChange={(e)=> setName(e.target.value)}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
         placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password"
         placeholder="Password" value={confirmPassword} onChange ={(e)=>setconfirmPassword(e.target.value)} />
      </Form.Group>
      {picError && <ErrorMessage variant='danger'>{picError}</ErrorMessage>}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>upload Image</Form.Label>
        <Form.Control type="file"  
            onChange={(e)=> {postDetails(e.target.files[0])}} />
      </Form.Group>

  


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

         </div>
         </div>
     </Mainscreen>
  )
}

export default RegisterScreen