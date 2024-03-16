import React from "react";

const Doctors = ({ ourDoctors }) => {
    const { title, buttonTitle, doctors } = ourDoctors;
    return (
        <div className="w-full py-10">
            <div className="flex items-start">
                <h2>{title}</h2>
            </div>

            <div className="mt-5 grid grid-cols-1 lg;grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8">
                {doctors.map((doctor, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center lg:items-start gap-1 cursor-pointer"
                        >
                            <img
                                src={doctor.image}
                                width={250}
                                height={250}
                                className="rounded-xl"
                            />
                            <h4>{doctor.name}</h4>
                            <p>{doctor.designation}</p>
                            <p>Experience: {doctor.experience}</p>
                            <p>Camp organized: {doctor.campsOrganized}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Doctors;
