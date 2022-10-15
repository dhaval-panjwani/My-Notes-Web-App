import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
    return <div className="flex items-center bg-[#e9e9e9]
        rounded-[10px] p-[5px] mb-6">

        <MdSearch size='1.3em' />
        <input placeholder="  Type to Search..." className="border-none bg-inherit
            focus:outline-none"
            onChange={ (event) => handleSearchNote(event.target.value)}></input>
    </div>
}

export default Search;