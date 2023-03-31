import {
  Notes_LOGIN_FAIL, Notes_LOGIN_REQUEST, Notes_LOGIN_SUCCESS
  , Note_CREATE_FAIL, Note_CREATE_REQUEST, Note_CREATE_SUCCESS,
  Note_DELETE_FAIL,
  Note_DELETE_REQUEST,
  Note_DELETE_SUCCESS,
  Note_UPDATE_FAIL, Note_UPDATE_REQUEST, Note_UPDATE_SUCCESS
} from '../constants/notesConstants'
import{USER_UPDATE_SUCCESS} from '../constants/userConstants'
import axios from 'axios'
export const noteListAction = () => async (dispatch, getstate) => {
     
  try {
    dispatch({ type: USER_UPDATE_SUCCESS, payload: null})
    dispatch({
      type: Notes_LOGIN_REQUEST
    })
    const {
      userLogin: { userinfo }
    } = getstate()

    const config = {
      headers: {
        authorization: `Bearer ${userinfo.token}`
      }
    }

    const { data } = await axios.get('api/notes/', config)
    console.log(data, 'NOTEaCTION')
    dispatch({
      type: Notes_LOGIN_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: Notes_LOGIN_FAIL,
      payload: 'fetching notes failed'
    })
  }
}

export const noteCreateAction = (title, content, category) => async (dispatch, getstate) => {
  try {
    console.log(title, content, category, "fic")
    dispatch({
      type: Note_CREATE_REQUEST
    })

    const { userLogin:
      { userinfo } } = getstate()
    console.log(userinfo.token, "useringo")
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userinfo.token}`

      }
    }
    console.log(userinfo)

    const { data } = await axios.post("api/notes/Createnote",
      { title, content, category }, config)
    console.log(data, 'DATAIS')

    console.log(data, 'data')

    dispatch({
      type: Note_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: Note_CREATE_FAIL,
      payload: 'cant create note'
    })
  }
}


export const updateNoteAction = (title, content, category, id) => async (

  dispatch,
  getState
) => {
 

  try {
    
    dispatch({
      type: Note_UPDATE_REQUEST,
      payload:""
    });

    const {
      userLogin: { userinfo },
    } = getState();

    try {

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userinfo.token}`,
        },
      };

      const { data } = await axios.put(`/api/notes/${id}`,
        { title, content, category }, config)
      console.log(data, 'DATAIS')
      dispatch({
        type: Note_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error, "errro ac.")
    }


  } catch (error) {

    dispatch({
      type: Note_UPDATE_FAIL,
      payload: "cant update fail",
    });
  }
}


export const noteDeleteAction = (id) => async(dispatch,getstate) => {
     try {
      
      dispatch({type:Note_DELETE_REQUEST})
      
      const {
        userLogin: { userinfo }
      } = getstate()
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userinfo.token}`
        }
      }
  
      const data = axios.delete(`api/notes/${id}`,config ).catch((err)=> {
        console.log(err,"FROM axios delete")})
         
        dispatch({type:Note_DELETE_SUCCESS,
                   payload:data })
        
     } catch (error) {
       dispatch({type:Note_DELETE_FAIL,
      payload:'cant delete note'})
     }
}