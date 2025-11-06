import axios from "axios";
import React, { useEffect, useState } from "react";

export default function List() {
    const [notes, setNotes] = useState([])
    useEffect(()=>{
        const fetchNotes = async()=>{
            const {data} = await axios.get('/api/notes')
            setNotes(data.data)
        }
        fetchNotes()
    },[])
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
                            <button type="button" className="btn btn-primary" >Edit</button>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
