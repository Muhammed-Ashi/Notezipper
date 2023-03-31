const express =  require('express')
const router = express.Router()
const {getNotes, createNote, getNoteByid,UpdateNote, DeleteNote} = require ('../controllers/noteController')
const protect = require('../middilewares/authmiddilewares')

router.route('/').get(protect,getNotes)
router.route('/Createnote').post(protect,createNote)
router.route("/:id").put(protect,UpdateNote).get(getNoteByid).delete(protect,DeleteNote)


module.exports=router;
