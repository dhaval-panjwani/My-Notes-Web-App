import { useState } from "react";

const AddNote = () => {
    const [noteText, setNoteText] = useState('');
    return (
        <div className="bg-[#67d7cc] flex flex-col min-h-[170px] p-4 rounded-xl
        mb-3 justify-between">
            <textarea
                rows='8'
                cols='10'
                placeholder="Type to add a note..."
                className="border-none resize-none bg-inherit
                    focus:outline-none">
            </textarea>

            <div className="flex items-center justify-between">
                <small>200 Remaining</small>
                <button className="bg-[#e1e1e1] border-none
                    rounded-[15px] pt-[5px] pb-[5px] pl-[10px] pr-[10px]
                    hover:cursor-pointer hover:bg-[#ededed]">Save</button>
            </div>
        </div>
    )
}

export default AddNote;