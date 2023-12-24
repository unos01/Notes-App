import NotesList from "./components/NotesList";
import './index.css'
import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hey all programmers 1",
      date: "15/12/2023",
    },
    {
      id: nanoid(),
      text: "Hey all programmers 2",
      date: "15/12/2023",
    },
    {
      id: nanoid(),
      text: "Hey all programmers 3",
      date: "15/12/2023",
    },
    {
      id: nanoid(),
      text: "Hey all programmers 4",
      date: "15/12/2023",
    },
    {
      id: nanoid(),
      text: "Hey all programmers 5",
      date: "15/12/2023",
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);


  const addNote = (text) => {
    // console.log(text)
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggle={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddnote={addNote}
          handleDelete={deleteNode}
        />
      </div>
    </div>

  );
}

export default App;
