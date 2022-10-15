import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return <div className="flex items-center justify-between">
        <h1 className="text-[2em] block mt-[0.67em] mb-[0.67em] ml-0 mr-0
            font-bold">
            My Notes App
        </h1>
        <button className="bg-[#e1e1e1] border-none
                    rounded-[15px] pt-[5px] pb-[5px] pl-[10px] pr-[10px]
                    hover:cursor-pointer hover:bg-[#ededed] font-semibold"
            onClick={ () => 
            handleToggleDarkMode
            ( (previousDarkMode) => !previousDarkMode )
            }
            >Toggle Theme</button>
    </div>
}

export default Header;