import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {

  const initialNotes = [
    {
      id: nanoid(),
      text: 'Articulate the Product Roadmap to the team.',
      date: '16/10/2022',
    },
    {
      id: nanoid(),
      text: 'Strategize, Plan, Achieve!',
      date: '16/10/2022',
    },
    {
      id: nanoid(),
      text: 'Create the Login journey with UX Team.',
      date: '16/10/2022',
    },
    {
      id: nanoid(),
      text: 'Highlight the red flags in the upcoming Stakeholders meeting.',
      date: '16/10/2022',
    }
  ];

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app-data')) ?? initialNotes);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(true);

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
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />

        <div className='flex justify-center font-semibold' id={`${darkMode && 'by'}`}>Made with
          <span className='text-[#e25555] ml-2 mr-2'>   &#10084;   </span>
          by Dhaval Panjwani</div>

      </div>



    </div>
  )
};

export default App;