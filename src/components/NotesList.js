import React from 'react'
import Note from './Note.js'
import AddNote from './AddNote.js'
import '../index.css'

const NotesList = ({notes, handleAddnote, handleDelete}) => {
  return (
    <div className='notes-list'>
        {
            notes.map((note)=>(
                <Note 
                id={note.id} 
                text={note.text} 
                date={note.date}
                handleDelete={handleDelete}
                />
            ))
        }
        <AddNote handleAddnote={handleAddnote}/>
    </div>
  )
}

export default NotesList;

