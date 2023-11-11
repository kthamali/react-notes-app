import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

    const [newNoteText, setNewNoteText] = useState();

    const handleChange = (event) => {
        setNewNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        handleAddNote(newNoteText);

    }

    return (
        <div className='note new'>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note....'
                value={newNoteText}
                onChange={handleChange}
                >
            </textarea>

            <div className='note-footer'>
                <small>200 remaining</small>
                <Button className='save' variant='secondary' onClick={handleSaveClick}>Save</Button>
            </div>
        </div>


    );


};

export default AddNote;