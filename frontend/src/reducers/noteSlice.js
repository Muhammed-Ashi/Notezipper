
import { createSlice, current } from '@reduxjs/toolkit'


export const noteListSlice = createSlice({
  name: 'note',
  initialState: { notelist: [] },
  loading: false,
  error: "",
  reducers: {
    noteListRequest: (state) => {
      state.loading = true
    },
    noteListSuccess: (state, action) => {
      state.loading = false
      //destructure object 
      const { data, preState } = action.payload
      console.log(preState.length, 'prestate is working')
            //add new note
      if (preState.length  !== 0 && preState.length < data.length) {
        console.log('if is working?')

        let newNote = data.length - 1
        state.notelist.push(data[newNote])

      } 

      if (preState.length == 0) {
        data.map((obj) => {
          state.notelist.push(obj)
          console.log("else is working")
      })

    }
      console.log(data, preState, "data and preset")
    },
    noteListFailed: (state, action) => {
      state.value += action.payload
    }, 

     noteListDeleted: (state, action) => {
     console.log(state.notelist._id,"data from note list deleted")
               state.notelist = state.notelist.filter((items) =>
                items._id !== action.payload.id)
              
          }, 

          noteListUpdated: (state, action) => {
            console.log(action.payload,"payload form upated")
           let findIndex = state.notelist.findIndex((element) => element._id == action.payload._id)
           console.log(findIndex,'time consuking')
             state.notelist[findIndex] = action.payload
           
           
           
          }
         
       
  },
})

// Action creators are generated for each case reducer function
export const { noteListRequest, noteListSuccess, noteListFailed, noteListDeleted,noteListUpdated } = noteListSlice.actions

export const noteListReducer = noteListSlice.reducer




export const createNote_Slice = createSlice({
  name: 'note',
  initialState: { noteUpdate: [] },
  loading: false,
  error: "",
  reducers: {
    createNoteRequest: (state) => {
      state.loading = true
    },
    createNoteSuccess: (state, action) => {
      state.loading = false
      state.noteUpdate.push(action.payload)
    },
    createNoteFailed: (state, action) => {
      state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { createNoteRequest, createNoteSuccess, createNoteFailed } = createNote_Slice.actions

export const createNoteReducer = createNote_Slice.reducer



export const deleteNoteSlice = createSlice({
  name: 'note',
  initialState: { deletedNote: [] },
  loading: false,
  error: "",
  reducers: {
    deleteNoteRequest: (state) => {
      state.loading = true
    },
    deleteNoteSuccess: (state, action) => {
      state.loading = false
      state.deletedNote.push('IAM asiq')

    },
    deleteNoteFailed: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { deleteNoteRequest, deleteNoteSuccess, deleteNoteFailed } = deleteNoteSlice.actions

export const deleteNoteReducer = deleteNoteSlice.reducer


export const updateNoteSlice = createSlice({
  name: 'note',
  initialState: { updatedNote: [] },
  loading: false,
  error: "",
  reducers: {
    updateNoteRequest: (state) => {
      state.loading = true
    },
    updateNoteSuccess: (state, action) => {
      state.loading = false
      console.log(action.payload,'noteaction pay')
       state.updatedNote.push(action.payload)

    },
    updateNoteFailed: (state, action) => {
      state.error += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateNoteRequest, updateNoteSuccess, updateNoteFailed } = updateNoteSlice.actions

export const updateNoteReducer = updateNoteSlice.reducer
