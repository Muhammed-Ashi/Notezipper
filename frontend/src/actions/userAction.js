import { loginRequest,loginFailed, loginSuccess,logOut} from "../reducers/userSlice"
import { registerRequest,registerSuccess,registerFailed } from "../reducers/userSlice"
import axios from "axios"

export function userLogin(email,password) {
    // fetchTodoByIdThunk is the "thunk function"
    return async function userLogin_Thunk(dispatch, getState) {
     try {
        dispatch(loginRequest("yes iam ok "))

        const config = {
            headers: {
              "Content-type": "application/json"
            }
          }
      
          const { data } = await axios.post("https://notezipper.top/api/user/login",
            { email, password }, config)
          console.log(data, 'DATAIS')
            if (data)  {
              
                dispatch(loginSuccess(data))
            }
      
        
     } catch (error) {
         dispatch(loginFailed(error.response.data))
        
     }
    }
  }

  
export function registerUser( name, picMessage, email, password) {
    // fetchTodoByIdThunk is the "thunk function"
    console.log("pic is came",picMessage)
    return async function registerUser_Thunk(dispatch, getState) {
     try {
        dispatch(loginRequest("yes iam ok "))
        const config = {
            headers: {
              'Content-type': 'application/json'
            }
      
          }
      
          const { data } = await axios.post('https://notezipper.top/api/user/',
            { name, picMessage, email, password }, config)
             dispatch(registerSuccess(data))
             
            localStorage.setItem('userinfo', JSON.stringify(data))
      
        
     } catch (error) {
       dispatch(registerFailed(error))
       console.log(error,'error is coming form userlogin ')
     }
    }
  }

  export  function singOut (){
    console.log("signout is working")
     return async function( dispatch ,getState){
           dispatch(logOut())
     }
  } 