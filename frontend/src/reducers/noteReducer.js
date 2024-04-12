 const {Notes_LOGIN_FAIL,Notes_LOGIN_REQUEST,Notes_LOGIN_SUCCESS,
     Note_CREATE_REQUEST, Note_CREATE_SUCCESS,Note_CREATE_FAIL, Note_UPDATE_REQUEST,
      Note_UPDATE_SUCCESS , 
       Note_UPDATE_FAIL , Note_DELETE_SUCCESS,Note_DELETE_REQUEST,Note_DELETE_FAIL} = require('../constants/notesConstants')

const immer = require("immer")
const {produce}= immer

export const noteCreateReducer = (state = {notes : []}, Action) => {
    switch (Action.type) {
        case Note_CREATE_REQUEST:
            return { loading: true };

        case Note_CREATE_SUCCESS: 
           let nextState = produce(state,(draftState)=>{
             draftState.notes.push(Action.payload[0])
           })
            return { loading: false,  };

        case Note_CREATE_FAIL:
            return { loading: false, error: Action.payload };

 

        default:
            return state

    }
}

export const listNoteReducer = (state = {notes:[]}, Action) => {
    switch (Action.type) {
      
        case Notes_LOGIN_REQUEST:
      
           
        case  Notes_LOGIN_SUCCESS:
            console.log("iam new array  ",Action.payload)
            console.log("iam state ",state)
           
                return { 
               
                    loading: false, notes:Action.payload };
        
        case Notes_LOGIN_FAIL:
         return{

         }
        default:
            return state

    }
}



export const noteUpdateReducer = (state = {notes : []}, Action) => {
    switch (Action.type) {
        case Note_UPDATE_REQUEST:
            return { loading: true ,error:Action.payload };

        case Note_UPDATE_SUCCESS: 
            return { loading: true, notes: Action.payload };

        case Note_UPDATE_FAIL:
            return { loading: false, error: Action.payload };

 

        default:
            return state

    }
}

export const noteDeleteReducer = (state = {notess:[]}, action) => {
    switch (action.type) {
        case Note_DELETE_REQUEST : 
        return {loading : true ,success:false}

        case Note_DELETE_SUCCESS : 
        return {loading:false ,success:action.payload}

        case Note_DELETE_FAIL : 
        return {loading : false , error :action.payload ,success : false}

        
        default:
            return state

    }
}