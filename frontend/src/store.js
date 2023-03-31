import {combineReducers,applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer ,userUpdateReducer} from './reducers/userReducer'
import {noteListReducer,noteCreateReducer, noteUpdateReducer ,noteDeleteReducer }  from './reducers/noteReducer'
const  reducer = combineReducers({
         userLogin:userLoginReducer,
         registerUser:userRegisterReducer,
         noteList:noteListReducer,
         noteCreate:noteCreateReducer,
         noteUpdate:noteUpdateReducer,
         noteDelete : noteDeleteReducer,
         userUpdate : userUpdateReducer
})
 const initialstate = {}
const middileware = [thunk]

const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middileware))
)

export default store