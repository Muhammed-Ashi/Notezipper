
import { createSlice } from '@reduxjs/toolkit'



export const loginSlice = createSlice({
  name: 'login',
initialState:{
  userinfo:[],
   loading:false,
   loginError:""

},
  reducers: {
    loginRequest: (state) => {
      
    },
    loginSuccess: (state,action) => {
       console.log(state,"redux state")
       console.log(action.payload,"redux payload")
      state.userinfo.push(action.payload)
    },
    loginFailed: (state, action) => {
       state.loginError = action.payload
      console.log(action.payload,'error from login failed')
    },
    logOut: (state, action) => {
      state.userinfo=[]
      state.loginError = ""
    },
    errorCleanup: (state, action) => {
      state.loginError = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginRequest,loginSuccess,loginFailed,logOut,errorCleanup } = loginSlice.actions

export const  loginReducer =  loginSlice.reducer



  
 const registerSlice = createSlice({
    name: 'register',
    initialState:{
     userinfo:[],
     registerError:"",
     loading:false
    },
    reducers: {
       registerRequest: (state) => {
              state.loading=true
      },
       registerSuccess: (state ,action ) => {
              state.userinfo.push(action.payload)
      },
      registerFailed: (state, action) => {
      
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { registerRequest,registerSuccess,registerFailed} = registerSlice.actions
  
  export const  registerReducer = registerSlice.reducer