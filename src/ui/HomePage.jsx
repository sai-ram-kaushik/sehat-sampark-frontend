import React from "react";
import Button from "../components/Button";
import data from "../data/landing-page.json";
import OurDoctors from "./OurDoctors";
const HomePage = ({ homePage }) => {
    const { title, content, buttonTitle, image } = homePage;
    return (
        <div className="w-full py-10 px-5 lg:px-10">
            <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center gap-3 lg:gap-5">
                <h1>{title}</h1>
                <p className="max-w-[700px] lg:text-center">{content}</p>
                <Button title={buttonTitle} />
                <img src={image} width={700} height={700} />
            </div>

            <OurDoctors ourDoctors={data.ourDoctors} />
        </div>
    );
};

export default HomePage;
