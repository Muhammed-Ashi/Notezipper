import React, { useLayoutEffect, useState } from 'react'
import Mainscreen from '../../components/Mainscreen'
import { Link } from 'react-router-dom'
import { Button, Card, Badge ,Accordion ,useAccordionButton} from 'react-bootstrap'
import axios from 'axios'
import notes from '../../data/note'
import { useEffect } from 'react'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log(),
    
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

function MyNotes() {
  const deleteHandler = (id) => {
    if (window.confirm('are you sure')){
         console.log(id)
    }
  }

  const [note, setNote] = useState()
   
  const fetchNotes =async () => {
           const data = await axios.get('/fetch')
           setNote(data)
  }

  useEffect(() => {
    // Update the document title using the browser API
            fetchNotes();
        
  });

  return (
    <Mainscreen title={'welcome back Ashiq Muhammed'}  >
      <Link to={'createnote'}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">Create New Note</Button>
        
      </Link>
     {notes.map((note)=>(
    
<Accordion>

<Card style={{margin:10}}>

<Card.Header style={{display : 'flex', justifyContent:'space-between'}} className="Card-Header">
<CustomToggle eventKey="0" >
  <span style={{fontSize:18,color:'black',cursor:'pointer',textDecoration:'none'}}>{note.title}
</span></CustomToggle>


    
      <div>
        <Button href={` /note/${note._id}`}>Edit</Button>
        <Button variant='danger' className='mx-2' onClick={()=> deleteHandler(note.id)}>Delete</Button>
      </div>
   
      </Card.Header>
      
      <Accordion.Collapse eventKey='0'>
      <Card.Body>
 
 <h4>
   <Badge bg='success'>{note.category}</Badge>
 </h4>

   <blockquote>
     <p>{note.content}</p>
     <footer className='blackquote-footer'>crated on date</footer>
   </blockquote>
 </Card.Body>

      </Accordion.Collapse>
     
   

     
    </Card>  
  
</Accordion>

      
     ))}
   

    </Mainscreen>
    
  )
}

export default MyNotes