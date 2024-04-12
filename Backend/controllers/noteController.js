const Note = require('../models/noteModel')
const asyncHandler = require("express-async-handler")
const { ObjectId } = require('mongodb');

const getNotes = asyncHandler(async(req,res) => {
  
     const note = await Note.find()
        
     res.json(note)
})
 
const createNote = asyncHandler(async (req,res) => {
    console.log("from server createnote")
     const { title,content,category} = req.body
     if (!title || !content || !category ) {
        res.status(400)
        throw new Error("please fill all the fields")
     } else   {
        const note = await new Note ({user :req.user.id , title , content , category})
        note.save(function (err){
            if (err){
                console.log(err,"error from mongoose note creation")
            }
        }) 
        console.log(note,"checking not posting")
        
     }
})

const getNoteByid = asyncHandler (async (req,res,next) => {
  console.log("are you there")
    const note = await Note.find({user:ObjectId(req.params.id)})
    console.log(req.params.id,"just for ra")
  
    if (note) {
        res.json(note)
    }else {
        res.status(404).json({message :'message not found' })
    }
})

const UpdateNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
  console.log(req.params.noteId,"id coming from core")
    const note = await Note.findById(req.params.noteId);
           console.log(note,"notecontroller")
    if (note.user.toString() !== req.user.id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (note) {
      note.title = title;
      note.content = content;
      note.category = category;
  
      const updatedNote = await note.save();
      res.json(updatedNote);
      console.log(updatedNote,"updatedNote")
    } else {
      res.status(404);
      throw new Error("Note not found");
    }
  });
 const DeleteNote = (async(req,res,next) => {
  console.log('deleted handler ')
    try {
      const data = await Note.deleteOne({user:ObjectId(req.user.id),_id:ObjectId(req.params.id)})
        console.log(data,'delete errro checking ')
        res.json(data)
    } catch (error) {
       console.log(error, "error form delete hanadler  ") 
    
    }
      
 })
module.exports = {getNotes , createNote , getNoteByid,UpdateNote ,DeleteNote}