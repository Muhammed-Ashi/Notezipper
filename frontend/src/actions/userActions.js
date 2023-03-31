import { USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS ,USER_UPDATE_FAIL,USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS} from "../constants/userConstants"
import axios from "axios"


export const login = (email, password) => async (dispatch) => {
  try {

    console.log()
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        "Content-type": "application/json"
      }
    }

    const { data } = await axios.post("api/user/login",
      { email, password }, config)
    console.log(data, 'DATAIS')


    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))

    console.log(data)
  } catch (error) {

    dispatch({ type: USER_LOGIN_FAIL, payload: 'invalied username or password ' })
    console.log(error, 'error checking ')


  }
}

export const logout = () => async (dispatch) => {
  console.log('THISfunctuin us')
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGIN_LOGOUT })
}

export const register = (name, password, email, picMessage) => async (dispatch) => {
     
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }

    }

    const { data } = await axios.post('/api/user/',
      { name, picMessage, email, password }, config)

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: 'UserAlreadyExists' })
    console.log(error, 'error checking in  registering ')


  }
}


export const userUpdateProfile = (user) => async (dispatch,getstate) => {
     console.log(user,"userobject")
  try {
    dispatch({ type: USER_UPDATE_REQUEST })

    
    const {
      userLogin: { userinfo }
    } = getstate()
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization : `Bearer ${userinfo.token}`

      }

    }

    const { data } = await axios.post('/api/user/profile',
       user , config)

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data })
    dispatch({type:USER_LOGIN_SUCCESS , payload : data})
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: 'cant update' })
    console.log(error, 'cant update')


  }
}