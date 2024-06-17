

import { noteListRequest,noteListSuccess,noteListFailed, deleteNoteRequest, deleteNoteSuccess,
   deleteNoteFailed ,noteListDeleted} from '../reducers/noteSlice'
import { createNoteRequest,createNoteSuccess,createNoteFailed, } from '../reducers/noteSlice'
import { updateNoteRequest,updateNoteSuccess,updateNoteFailed,noteListUpdated } from '../reducers/noteSlice'
import axios from 'axios'




export function listNotes(id) {
  // fetchTodoByIdThunk is the "thunk function"
  console.log("notelist is working")
  return async function listNotes_Thunk(dispatch, getState) {
   try {
           dispatch(noteListRequest())

           const {
            login: { userinfo }
          } = getState()
       
           console.log(userinfo,"doesnt have jwt token")
          const config = {
            headers: {
              authorization: `Bearer ${userinfo[0].token}`
            }
          }
      
      const { data } = await axios.get(`http://notezipper.top/api/notes/${id}`,config) 
    
      if (data) {
        const { noteList:
          { notelist } } = getState()
         
           let fetchedObject = {
             data:data,
             preState:notelist
           }

        dispatch(noteListSuccess(fetchedObject))
          
      }
      
   } catch (error) {
       dispatch(noteListFailed(error))
       console.log(error,"notelist")
   }
  }
}


//note creation thunk 

export const noteCreateAction = (title, content, category) => async (dispatch, getstate) => {
  console.log("createnote")
  try {
    console.log(title, content, category, "fic")
    dispatch(createNoteRequest())

    const { login:
      { userinfo } } = getstate()
    console.log(userinfo[0].token, "useringo")
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userinfo[0].token}`

      }
    }

    const { data } = await axios.post("http://notezipper.top/api/notes/Createnote",
      { title, content, category }, config)
      const { noteList:
        { notelist } } = getstate()
      
     

    dispatch(createNoteSuccess(data))
  } catch (error) {
   
   let data ="Cant Create note...."
  dispatch(createNoteFailed(error))
  
  }
}


export const noteDeleteAction = (id ,cb) => async(dispatch,getState) => {
  console.log(id,"delete handler")
     try {
      
      dispatch(deleteNoteRequest())
      const {
        login: { userinfo }
      } = getState()
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userinfo[0].token}`
        }
      }
            
      const data = axios.delete(`http://notezipper.top/api/notes/${id}`,config )
          console.log(data,'from delete callback')
          const { noteList:
            { notelist } } = getState()
    // fetch updated data after deleted
         if (data){
          const { data } = await axios.get('api/notes/', config)
           console.log(data,"updated dat")
           dispatch(noteListDeleted({
             id:id,
             updatedDate:data
           }))
         }
    
     } catch (error) {
     dispatch(deleteNoteFailed("Cant delete note ..."))
}
}


export const noteUpdateAction = (title, category, content, noteId ,callback) => async(dispatch,getState) => {
     console.log(title, category, content, noteId,"update notes")
     try {
      
      dispatch(updateNoteRequest())
      const {
        login: { userinfo }
      } = getState()
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userinfo[0].token}`
        }
      }
      let url = `http://notezipper.top/api/notes/${noteId}`
          const { data } = await axios.put(url,
      { title, content, category }, config)
       
       if (data) {
        //update notelist to display updated notes
          dispatch(noteListUpdated(data))
         
       }
      dispatch(updateNoteSuccess(data))
       
          
    
     } catch (error) {
     dispatch(updateNoteFailed("Cant delete note ..."))
}
}