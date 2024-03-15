import React from "react";
import { footer } from "../constants";

const Footer = () => {
    return (
        <div className="w-full px-5 lg:px-10 border-t border-gray-300">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0 py-5">
                <h3>
                    Sehat<span>Sampark</span>
                </h3>

                <div className="flex items-center gap-6 text-xl">
                    {footer.map((list, index) => {
                        return (
                            <div
                                key={index}
                                className="p-2 rounded-full bg-secondary text-background cursor-pointer"
                            >
                                <div>{list.icon}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;
