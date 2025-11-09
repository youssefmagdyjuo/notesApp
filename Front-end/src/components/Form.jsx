import axios from 'axios'
import { useNotesStore } from '../store/NotesStore'
import { useState } from 'react'
export default function Form() {
    const [errorMeassage, set_errorMeassage] = useState('')
    const { note, setTitle, setContent, setNotes, editMode, set_editMode, curentId } = useNotesStore()
    // add new note
    const addNote = async () => {
        if (!editMode) {
            try {
                set_errorMeassage('')
                const { data } = await axios.post('/api/notes', {
                    title: note.title,
                    content: note.content
                })
                setNotes(data.data)
            } catch (error) {
                console.log(error)
                set_errorMeassage(error.response.data.message)
            }

        } else {
            try {
                const { data } = await axios.put(`/api/notes/${curentId}`, { 
                    title: note.title,
                    content: note.content 
                })
                setNotes(data.data)
            } catch (error) {
                console.log(error)
            }
            set_editMode()
        }
        setTitle('')
        setContent('')
    }
    return (
        <div>
            <form>
                <h1>Notes App</h1>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Title"
                    value={note.title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Content"
                    value={note.content}
                    onChange={(e) => { setContent(e.target.value) }} />
                <button
                    onClick={addNote}
                    type="button"
                    className="btn btn-primary"
                >
                    {
                        editMode ? 'Update' : 'Add'
                    }
                </button>
                {
                    errorMeassage ? <p style={{ color: 'red' }}>{errorMeassage}</p> : ''
                }
            </form>
        </div>
    )
}
