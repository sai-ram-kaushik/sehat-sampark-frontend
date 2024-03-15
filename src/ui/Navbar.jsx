import React, { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleChange = () => {
        setNav(!nav);
    };
    return (
        <div className="w-full h-16 px-5 lg:px-10">
            <div className="flex items-center justify-between h-full">
                <h2>
                    Sehat<span>Sampark</span>
                </h2>

                <div
                    className="rounded-full bg-secondary p-2 text-background cursor-pointer"
                    onClick={handleChange}
                >
                    {nav ? (
                        <IoCloseSharp size={25} />
                    ) : (
                        <IoMenuSharp size={25} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
