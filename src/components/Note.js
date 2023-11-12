import { MdDeleteForever } from 'react-icons/md';
import { PiDotsThreeCircleFill } from 'react-icons/pi';

const Note = ({ id, text, date, handleDeleteNote }) => {

    return (
        <div className='note'>
            <div className='note-header'>
                <PiDotsThreeCircleFill className='dot-icon'></PiDotsThreeCircleFill>
            </div>
            <div className='note-content'>
                <span>{text}</span>
            </div>
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