import React from 'react'
import { Form, Button, Card } from "react-bootstrap"
import { Navigate, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { noteUpdateAction} from '../../actions/noteAction'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import store from '../../store'

function SingleNote({ match }) {
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")
  const [category, setcategory] = useState("")
  const [date, setdate] = useState("")
const [validationError, setvalidationError] = useState("")

  const { noteId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const noteUpdates = useSelector(state => state.updatedNotes)
  const {  updatedNote,error, loading } = noteUpdates

  useEffect(() => {
     
          
    return () => {

    }
  }, [])


  const UpdateHandler = (e) => {
    e.preventDefault()
    
    if (!title || !content || !category){
         setvalidationError("Please fill all fields")
    }
       else {

    dispatch(noteUpdateAction(title, category, content,noteId   ))
    console.log(noteId,'SE')
    navigate('/mynote')
       }
     
  }

  const ResetHandler = () => {
    settitle("")
    setcontent("")
    setcategory("")
    setdate("")
  }

  return (
    <div>
      <h1 className='heading'>Edit Note</h1>
      <Card>
        <Card.Header>Edit your note</Card.Header>
        <Card.Body>
          <Form onSubmit={UpdateHandler} >
            <Form.Group className="mb-3" controlId="title">
              {/* {error  && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {validationError  && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter the title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />

              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control type="text" placeholder="Enter the content"
                value={content}
                onChange={(e) => setcontent(e.target.value)}
              />

              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>
            {content && (
              <Card>
                <Card.Header> Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter the category"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              />

              <Form.Text className="text-muted">

              </Form.Text>
            </Form.Group>
            <Button type='submit' variant='primary'>Update Note</Button>
            <Button className='mx-4' variant='danger' onClick={ResetHandler}>Reset Fields</Button>
          </Form>
        </Card.Body>
        <Card.Footer className='text-muted'>
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>

    </div>
  )
}

export default SingleNote