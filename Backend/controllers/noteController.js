const Note = require('../models/noteModel')
const asyncHandler = require("express-async-handler")
const { ObjectId } = require('mongodb');

const getNotes = asyncHandler(async(req,res) => {
    console.log("iam working,note api")
     const note = await Note.find()
     console.log(note,'notelist from database')
     res.json(note)
})
 
const createNote = asyncHandler(async (req,res) => {
    console.log("from server")
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
    const note = await Note.findById(req.params.id)
  
    if (note) {
        res.json(note)
    }else {
        res.status(404).json({message :'message not found' })
    }
})

const UpdateNote = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
  console.log(req.user,"id coming from core")
    const note = await Note.findById(req.params.id);
  
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
    } else {
      res.status(404);
      throw new Error("Note not found");
    }
  });
 const DeleteNote = (async(req,res,next) => {
  console.log('deleted')
      const data = await Note.deleteOne({user:ObjectId(req.user.id),_id:ObjectId(req.params.id)})
      console.log(data,"deleted")
 })
module.exports = {getNotes , createNote , getNoteByid,UpdateNote ,DeleteNote}