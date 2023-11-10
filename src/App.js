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


  return (
    <div className='conntainer'>
      <NotesList notes={notes}/>
    </div>
  );

}

export default App;
