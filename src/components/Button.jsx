import React from "react";

const Button = ({ title, className, onClick }) => {
    return (
        <button
            className={`px-5 py-2 rounded-full bg-secondary text-background hover:bg-background hover:text-primary duration-500 border-2 border-secondary ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
