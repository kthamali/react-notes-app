import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {

    const [newNoteText, setNewNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {
            setNewNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if(newNoteText.trim().length > 0) {
            handleAddNote(newNoteText);
            setNewNoteText('');
        }
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
                <small> {characterLimit - newNoteText.length} Remaining</small>
                <Button className='save' variant='secondary' onClick={handleSaveClick}>Save</Button>
            </div>
        </div>


    );


};

export default AddNote;