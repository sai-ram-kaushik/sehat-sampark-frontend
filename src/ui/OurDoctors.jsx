import React from "react";
import Button from "../components/Button";

const OurDoctors = ({ ourDoctors }) => {
    const { title, doctors, buttonTitle } = ourDoctors;
    return (
        <div className="w-full py-10">
            <div className="flex items-center justify-between">
                <h3>{title}</h3>
                <Button title={buttonTitle} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-16 mt-5">
                {doctors.map((doctor, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center lg:items-start gap-1 cursor-pointer"
                        >
                            <img src={doctor.image} width={200} height={200} />
                            <h4>{doctor.name}</h4>
                            <p>{doctor.designation}</p>
                            <p>Experience: {doctor.experience}</p>
                            <p>Camps Organized: {doctor.campsOrganized}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OurDoctors;
