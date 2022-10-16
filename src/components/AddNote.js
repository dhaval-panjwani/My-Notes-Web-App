import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0)
            setNoteText(event.target.value);
    }

    const handleSaveClick = (event) => {
        if (noteText.trim().length > 0)
            handleAddNote(noteText);
        setNoteText('');
    }

    return (
        <div className="bg-[#efe2ef] flex flex-col min-h-[170px] p-4 rounded-xl
        mb-3 justify-between">
            <textarea
                rows='8'
                cols='10'
                placeholder="Start typing to add a new note..."
                className="border-none resize-none bg-inherit
                    focus:outline-none font-semibold text-black placeholder-black"
                onChange={handleChange}
                value={noteText}>
            </textarea>

            <div className="flex items-center justify-between">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="bg-[#e1e1e1] border-none
                    rounded-[15px] pt-[5px] pb-[5px] pl-[10px] pr-[10px]
                    hover:cursor-pointer hover:bg-[#ededed] font-semibold"
                    onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;