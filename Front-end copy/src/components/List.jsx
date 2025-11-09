import React, { useEffect } from "react";
import { useNotesStore } from '../store/NotesStore'

export default function List() {
    const { setTitle, setContent, notes, fetchNotes, deleteNote ,set_editMode,set_curentId} = useNotesStore()

    //fetch notes
    useEffect(() => {
        fetchNotes()
    }, [])
    //update note
    const editNote = (id) => {
        const note = notes.find(n => n._id === id)
        setTitle(note.title)
        setContent(note.content)
        set_editMode()
        set_curentId(id)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr key={note._id}>
                            <td>{note.title}</td>
                            <td>{note.content}</td>
                            <td>
                                <button
                                    onClick={() => { editNote(note._id) }}
                                    type="button"
                                    className="btn btn-primary"
                                >Edit</button>
                                <button
                                    onClick={() => { deleteNote(note._id) }}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
