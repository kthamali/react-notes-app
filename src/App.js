import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "10/11/2023"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "12/11/2023"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "15/11/2023"
    },
     {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "25/11/2023"
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);

  }


  return (
    <div className='conntainer'>
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );

}

export default App;
