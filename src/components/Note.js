import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, note, handleDeleteNote }) => {
    return <div className="flex flex-col min-h-[170px] p-4 rounded-xl
            mb-3 bg-[#fef68a] justify-between whitespace-pre-wrap">

        <span> {note.text} </span>

        <div className="flex items-center justify-between">
            <small> {note.date} </small>
            <MdDeleteForever className='delete-icon cursor-pointer' size='1.3em' onClick={ () => handleDeleteNote(id)} />
        </div>

    </div>
}

export default Note;