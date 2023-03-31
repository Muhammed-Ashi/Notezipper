 const {Notes_LOGIN_FAIL,Notes_LOGIN_REQUEST,Notes_LOGIN_SUCCESS,
     Note_CREATE_REQUEST, Note_CREATE_SUCCESS,Note_CREATE_FAIL, Note_UPDATE_REQUEST,
      Note_UPDATE_SUCCESS , 
       Note_UPDATE_FAIL , Note_DELETE_SUCCESS,Note_DELETE_REQUEST,Note_DELETE_FAIL} = require('../constants/notesConstants')
 
export const noteListReducer = (state = {notes : []}, Action) => {
    switch (Action.type) {
        case Notes_LOGIN_REQUEST:
            return { loading: true };

        case Notes_LOGIN_SUCCESS: 
            return { loading: false, notes: Action.payload };

        case Notes_LOGIN_FAIL:
            return { loading: false, error: Action.payload };

 

        default:
            return state

    }
}

export const noteCreateReducer = (state = {notes : []}, Action) => {
    switch (Action.type) {
        case Note_CREATE_REQUEST:
            return { loading: true };

        case Note_CREATE_SUCCESS: 
            return { loading: false, notes: Action.payload };

        case Note_CREATE_FAIL:
            return { loading: false, error: Action.payload };

 

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

export const noteDeleteReducer = (state = {}, action) => {
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