import React from "react";

const Navbar = () => {
    return (
        <div className="bg-blue-600  h-15 flex justify-between">
            <div className="pt-2 pl-2 text-white text-3xl font-bold">PyDo</div>
            <div className="pt-2 pr-8">
                <button className=" h-10 p-2 pr-2 bg-blue-500 text-lg text-white font-bold hover:bg-blue-600 rounded-lg cursor-pointer">
                    LogIn
                </button>
            </div>
        </div>
    );
};

export default Navbar;
