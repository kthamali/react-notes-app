import { MdDeleteForever } from 'react-icons/md';
import { PiDotsThreeCircleFill } from 'react-icons/pi';

const Note = ({ id, text, date, handleDeleteNote }) => {

    return (
        <div className='note'>
            <div className='note-header'>
                <PiDotsThreeCircleFill className='dot-icon'></PiDotsThreeCircleFill>
            </div>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(id)} 
                className='delete-icon' 
                size='1.3em' />
            </div>

        </div>

    );

};

export default Note;