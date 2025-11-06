import { useState } from "react"

export default function Form() {
const [note,setNote]= useState({
    title:'',
    content:''
})

    return (
        <div>
            <form>
                <h1>Notes App</h1>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Title"
                    value={note.title}
                    onChange={(e)=>{setNote(prev => ({ ...prev, title: e.target.value }))}}
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Content"
                    value={note.content}
                    onChange={(e)=>{setNote(prev=>({...prev,content:e.target.value}))}}
                />
                <button type="button" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
