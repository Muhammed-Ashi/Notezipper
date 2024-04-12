import React from 'react'
import {Form ,Button ,Card} from "react-bootstrap"
import { Navigate, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useState } from 'react'
import Markdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import './Createnote.css'
import { noteCreate, noteCreateAction } from '../../actions/noteAction'
function Createnote() {
  const [title, settitle] = useState("")
   const [content, setcontent] = useState("")
   const [category, setcategory] = useState("")
  
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const noteCreation = useSelector(state => state.createNote)  
   const {loading,notelist,error} = noteCreation

   const submitHandler = (e) => {
     e.preventDefault()
     if (!title || !content || !category) return
   dispatch(noteCreateAction(title,content,category))
    
          navigate('/mynote')
   }

   const ResetHandler = () => {
      settitle("")
      setcontent("")
      setcategory("")
   }
   
  return (
     <div>
      
      <h1 className='heading'>Create Note</h1>
    <Card>
            <Card.Header>Create a note</Card.Header>
            <Card.Body>
              <Form onSubmit={submitHandler} >
              <Form.Group className="mb-3" controlId="title">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the title"
          value={title}
          onChange={(e)=> settitle(e.target.value )}
        />

        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" placeholder="Enter the content"
          value={content}
          onChange={(e)=> setcontent(e.target.value )}
        />

        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>
   { content && (
     <Card>
      <Card.Header> Note Preview</Card.Header>
      <Card.Body>
        <Markdown>{content}</Markdown>
      </Card.Body>
     </Card>
   )}
    <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter the category"
          value={category}
          onChange={(e)=> setcategory(e.target.value )}
        />

        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>
      <Button type='submit' variant='primary'>Create Note</Button>
      <Button className='mx-4' variant='danger'onClick={ResetHandler}>Reset Fields</Button>
              </Form>
            </Card.Body>
<Card.Footer className='text-muted'>
  Creating on - {new Date().toLocaleDateString()}
</Card.Footer>
    </Card>
    
    </div>
  )
}

export default Createnote