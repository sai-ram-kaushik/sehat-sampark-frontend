import React, { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { menuList } from "../constants";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleChange = () => {
        setNav(!nav);
    };
    return (
        <div className="w-full h-16 px-5 lg:px-10">
            <div className="flex items-center justify-between h-full">
                <Link to="/">
                    <h2>
                        Sehat<span>Sampark</span>
                    </h2>
                </Link>

                <div className="hidden lg:flex items-center gap-6">
                    {menuList.map((link, index) => {
                        return (
                            <ul
                                key={index}
                                className="hover:text-secondary duration-500"
                            >
                                <Link to={link.path}>
                                    <li>{link.label}</li>
                                </Link>
                            </ul>
                        );
                    })}
                </div>

                <div
                    className="block lg:hidden rounded-full bg-secondary p-2 text-background cursor-pointer"
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
