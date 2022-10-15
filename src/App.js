import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {

  const initialNotes = [
		{
			id: nanoid(),
			text: 'You are Awesome!',
			date: '16/10/2022',
		},
		{
			id: nanoid(),
			text: 'Strategize, Plan, Achieve!',
			date: '16/10/2022',
		}
	];

	const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app-data')) ?? initialNotes);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
    document.title = "My Notes App"
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container max-w-[960px] mr-auto
          ml-auto pr-[15px] pl-[15px] min-h-screen">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
};

export default App;