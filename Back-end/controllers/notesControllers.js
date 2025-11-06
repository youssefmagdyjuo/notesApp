const note = require('../models/noteModel')


//GET ALL NOTES
const getNotes = async (req, res) => {
    try {
        const notes = await note.find({})
        res.status(200).json({
            succsess: true,
            data: notes,
            message: 'fetching data successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//ADD NEW NOTE
const addNote = async (req, res) => {
    try {
        const { title, content } = req.body
        if (!title || !content) {
            return res.status(400).json({
                succsess: false,
                message: 'fill inputs'
            })
        }
        const newNote = await note.create({ title, content })
        res.status(200).json({
            succsess: true,
            data: newNote,
            message: 'add note successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

//UPDATE  NOTE
const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body
        const updatedNote = await note.findByIdAndUpdate(id, { title, content })
        if (!updatedNote) {
            return res.status(404).json({
                succsess: false,
                message: `not found note with id :  ${id}`
            })
        }
        const updatedNoteDate = await note.findById(id);
        res.status(200).json({
            succsess: true,
            data: updatedNoteDate,
            message: 'update note successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//DELETE  NOTE
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params
        const deletedNote = await note.findByIdAndDelete(id)
        if (!deletedNote) {
            return res.status(404).json({
                succsess: false,
                message: `not found note with id :  ${id}`
            })
        }
        const notes = await note.find({})
        res.status(200).json({
            succsess: true,
            data:notes,
            message: 'note deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { getNotes, addNote, updateNote, deleteNote }