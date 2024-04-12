import React, { useLayoutEffect, useState } from 'react'
import Mainscreen from '../../components/Mainscreen'
import { Link } from 'react-router-dom'
import { Button, Card, Badge, Accordion, useAccordionButton } from 'react-bootstrap'
import axios from 'axios'
import notes from '../../data/note'
import { useEffect ,useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listNotes, noteDeleteAction,  } from '../../actions/noteAction'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'
import noter from '../../data/note'
import './MyNotes.css'
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log()

  );

  return (
    <div
      type="button"
      style={{ backgroundColor: 'white' }}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}

function MyNotes({search}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const noteList = useSelector(state => state.noteList)
  const { loading, notelist, error } = noteList
  console.log(notelist,"notelid")
  const userLogin = useSelector(state => state.login)
  const { userinfo,success} = userLogin
  const noteDelete = useSelector(state => state.deleteNote)
   const {deletedNote} = noteDelete
  const [ignore, setignore] = useState(0 )
 let userId = userinfo[0] ? userinfo[0]._id : ""

    
  const deleteHandler = (id) => {
      
    dispatch(noteDeleteAction(id,(cb) =>{
          console.log(cb ,"lovy")
          
    }))
             
  
    
  }


  useEffect(() => {
    // Update the document title using the browser API
    
    dispatch( listNotes(userId))
     
         
       if (userinfo[0]){
        navigate('/mynote')
      
       } else {
        navigate('/')
       }
      
      
  }, [userinfo]);

  return (
     <div> {userinfo?
     <Mainscreen title={`welcome back  ${userinfo[0] ?.name} `}  >
      <Link to={'/createnote'}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg"><Link to={'/create'}>Create note</Link></Button>

      </Link>
      {error && < ErrorMessage />}
      {loading && <Loading />}
    
      {notelist?.slice().reverse().filter((filteredNote) => 
      filteredNote.title.toLowerCase().includes(search.toLowerCase())).map((note) => (

        <Accordion>

          <Card style={{ margin: 10 }}>

            <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }} className="Card-Header">
              <CustomToggle eventKey="0" >
                <span style={{ fontSize: 18, color: 'black', cursor: 'pointer', textDecoration: 'none' }}>{note.title}
                </span></CustomToggle>



              <div className='button-div'>

                <Button ><Link to={`/${note._id}`}>Edit</Link></Button>
                <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
              </div>

            </Card.Header>

            <Accordion.Collapse eventKey='0'>
              <Card.Body>

                <h4>
                  <Badge bg='success'>{note.category}</Badge>
                </h4>

                <blockquote>
                  <p>{note.content}</p>
                  <footer className='blackquote-footer'>crated on date
                    <cite className='source Title'>

                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>

            </Accordion.Collapse>




          </Card>

        </Accordion>


      ))}


    </Mainscreen>
 :"LOGIN"}
    </div>
     
  )
}

export default MyNotes