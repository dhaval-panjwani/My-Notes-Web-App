import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {

  const[notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/10/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '15/10/2022',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '15/10/2022',
    },
    {
      id: nanoid(),
      text: 'This is my fourth note!',
      date: '15/10/2022',
    },
    {
      id: nanoid(),
      text: 'This is my fifth note!',
      date: '25/10/2022',
    },
  ]);

  return (
    <div className="container max-w-[960px] mr-auto ml-auto pr-[15px] pl-[15px]">
      <NotesList notes={notes}/>
  </div>
  )
};

export default App;