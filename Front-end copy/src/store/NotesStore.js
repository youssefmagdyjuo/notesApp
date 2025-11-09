import axios from "axios";
import { create } from "zustand";

export const useNotesStore = create((set) => ({
    curentId:null,
    set_curentId: (id) => set(()=>({curentId:id})),
    editMode:false,
    set_editMode:()=> set((state)=>({editMode:!state.editMode})),
    note: {
        title: '',
        content: ''
    },
    setTitle: (title) => set((state) => ({
        note: { ...state.note, title }
    })),
    setContent: (content) => set((state) => ({
        note: { ...state.note, content }
    })),
    notes: [],
    setNotes: (notes) => set(() => ({
        notes: notes
    })),
    fetchNotes: async () => {
        const { data } = await axios.get('/api/notes')
        set(() => ({ notes: data.data }))
    },
    deleteNote :async (id)=>{
        const {data} = await axios.delete(`/api/notes/${id}`)
        set(() => ({ notes: data.data }))
    },
}));