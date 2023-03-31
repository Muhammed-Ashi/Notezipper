import React from 'react'
import Mainscreen from '../../components/Mainscreen'
import { Row, Col, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'
import {userUpdateProfile} from '../../actions/userActions'
import Loading from '../../components/Loading'
import './profileScreen.css'
function ProfileScreen() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pic, setPic] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [picMessage, setpicMessage] = useState("")
  const [picError, setPicError] = useState("")
  const [Error, setError] = useState("")
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userinfo } = userLogin

  const userUpdate = useSelector((state) => state.userUpdate)
  const { loading, error, success } = userUpdate
  const navigate = useNavigate()

  useEffect(() => {
    if (!userinfo) {
   navigate('/login')
    } else {
      setName(userinfo.name)
      setEmail(userinfo.email)
      setPic(userinfo.pic)
      console.log(pic)
    }

  }, [navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      dispatch(userUpdateProfile({name, email, password, pic}))
      console.log(name,"profilescreen")
    } else {
      setError('password Doesnt match')
    }


  }

  const postDetails = (pics) => {
    console.log(pics)
    if (!pics) {
      return setPicError('Please Select Image')
    }
    setPicError(null)
    if (pics.type === 'image/jpeg ' || pics.type === "image/png") {
      const data = new FormData()
      data.append("file", pics)
      data.append("upload_preset", "Notezipper")
      console.log(data, "frp")
      const baseUrl = "https://api.cloudinary.com/v1_1/dguueu7om/image/upload"
      fetch(baseUrl, {

        method: 'POST',
        body: data,


      }).then((res) => res.json())
        .then((data) => {
          console.log(data, "console")
          setPic(data.url)
        })
        .catch((err) => {
          console.log(err, "ndham")
        })
    } else {
      return setPicError('Please Select Image')
    }
  }
  return (
    <Mainscreen title={'Edit Profile'}>
      <div>
      {loading && <Loading/>}
        <Row className='profileContainer'>
          <Col md={6}>
            <Form onSubmit={submitHandler} >
              {Error && <ErrorMessage variant='danger'>{Error}</ErrorMessage>}
              {success && <ErrorMessage variant='success'>updated Successfully</ErrorMessage>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name
        " value={name} onChange={(e) => setName(e.target.value)} />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                  placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password"
                  placeholder="Password" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
              </Form.Group>
              {picError && <ErrorMessage variant='danger'>{picError}</ErrorMessage>}
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file"
                  onChange={(e) => { postDetails(e.target.files[0]) }} />
              </Form.Group>




              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>

            <img style={{ width: "80%", height: '80%',display:"flex",alignItems:"center" }} src={pic} alt={name} className="profilePic" />

          </Col>
        </Row>
      </div>
    </Mainscreen>
  )
}

export default ProfileScreen