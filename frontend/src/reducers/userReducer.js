import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT,
USER_UPDATE_FAIL,USER_UPDATE_REQUEST,USER_UPDATE_SUCCESS } from "../constants/userConstants";
export const userLoginReducer = (state = {}, Action) => {
    switch (Action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };

        case USER_LOGIN_SUCCESS: 
        console.log(state,"userstate")
            return { loading: true, userinfo: Action.payload, };

        case USER_LOGIN_FAIL:
            return { loading: false, error: Action.payload };

 
        case USER_LOGIN_LOGOUT:
            return {};

        default:
            return state

    }
}

export const userRegisterReducer = (state = {}, Action) => {
    switch (Action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };

        case USER_LOGIN_SUCCESS: 
            return { loading: true, userinfo: Action.payload };

        case USER_LOGIN_FAIL:
            return { loading: false, error: Action.payload };

 
        case USER_LOGIN_LOGOUT:
            return {};

        default:
            return state

    }
}


export const userUpdateReducer = (state = {}, Action) => {
    switch (Action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };

        case USER_UPDATE_SUCCESS: 
            return { loading: false, success: Action.payload };

        case USER_UPDATE_FAIL:
            return { loading: false, error: Action.payload };

 

        default:
            return state

    }
}