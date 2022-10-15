import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes }) => {

    return (
        <div className="notes-list">
            {notes.map(( note ) => (
                <Note id={note.id} note={note}/>
            ))}
            <AddNote/>
        </div>

    );
};

export default NotesList;