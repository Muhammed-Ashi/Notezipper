import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { loginReducer, registerReducer } from './reducers/userSlice'
import { noteListReducer, createNoteReducer, deleteNoteReducer, updateNoteReducer } from './reducers/noteSlice'
import { persistReducer, persistStore, Persistor, REHYDRATE } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session'; 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  noteList: noteListReducer,
  createNote: createNoteReducer,
  deleteNote: deleteNoteReducer,
  updatedNotes:updateNoteReducer
})

const initialstate = {}
const middileware = [thunk]


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["login"] // What you want to persist

}


var persistedReducer = persistReducer(persistConfig,rootReducer)



export const store = configureStore({
  reducer: persistedReducer
  
})
export const persistor = persistStore(store)