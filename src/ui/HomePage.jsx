import React from "react";
import Camps from "./Camps";
import data from "../data/landing-page.json";
import Doctors from "./Doctors";
const HomePage = ({ homePage }) => {
    const { content } = homePage;
    return (
        <div className="w-full py-10 px-5 lg:px-10">
            <div className="grid grid-cols-1 lg;grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8">
                {content.map((list, index) => {
                    return (
                        <div
                            key={index}
                            className="min-w-[15rem] min-h-[7rem] shadow-lg rounded-xl p-5 border-2 border-secondary cursor-pointer"
                        >
                            <div className="flex flex-col items-end justify-end gap-2">
                                <h4 className="font-bold">{list.label}</h4>
                                <p>{list.count}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Camps ourCamps={data.camps} />
            <Doctors ourDoctors={data.ourDoctors} />
        </div>
    );
};

export default HomePage;
