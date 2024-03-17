// import React, { useEffect, useState } from "react";
// import Button from "../components/Button";

// const Doctors = ({ ourDoctors }) => {
//     const days=[
//         {label:'Monday', data:'M'},
//         {label:'Tuesday',data:'T'},
//         {label:'Wednesday',data:'W'},
//         {label:'Thurday',data:'Th'},
//         {label:'Friday',data:'F'},
//         {label:'Saturday',data:'S'},
//         {label:'Sunday',data:'Su'}
//     ]
//     const [availableDays,setAvailableDays] =useState([])
//     const [doctors, setDoctors] = useState([]);
//     const { title, buttonTitle } = doctors;
    
    
   
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     "https://sehatsampark-backend.onrender.com/get_all_doctors",
//                     {
//                         method: "GET",
//                         headers: {
//                             "Access-Control-Allow-Origin": "*",
//                         },
//                         mode: "cors",
//                     }
//                 );

//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }

//                 const data = await response.json();
//                 console.log("Data from API:", data.doctor_data); // Log data received from the API
//                 const dataArray = Object.values(data);
//                 setDoctors(data.doctor_data);
//             } catch (error) {
//                 console.error("Fetch error:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     useEffect(() => {
//         const doctorUnavailableDays = doctors.map(doctor => doctor.unavailable_days).flat();
//         const filteredDays = days.filter(day => !doctorUnavailableDays.includes(day.data));
//         console.log('filterdays',filteredDays)
//         setAvailableDays(filteredDays);
//     }, [doctors]);
    
//     return (
//         <div className="w-full py-10">
//             <div className="flex items-start justify-between">
//                 <h2>{title}</h2>
//                 <Button title={buttonTitle} />
//             </div>

//             <div className="mt-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8">
//                 {doctors.map((doctor, index) => {
//                     return (
//                         <div
//                             key={index}
//                             className="flex flex-col items-center lg:items-start gap-1 cursor-pointer"
//                         >
//                             <img
//                                 src="https://source.unsplash.com/random/900x700/?indian_doctors"
//                                 width={250}
//                                 height={250}
//                                 className="rounded-xl"
//                             />
//                             <h4 className="font-bold">{doctor.full_name}</h4>
//                             <p>
//                                 Years of Experience:{" "}
//                                 {doctor.years_of_experience}
//                             </p>
//                             <p>Expertise: {doctor.expertise_category}</p>
//                             <p>Email: {doctor.email}</p>
//                             <p>Phone Number: {doctor.phone_number}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Doctors;


import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const Doctors = () => {
    const days=[
        {label:'Monday', data:'M'},
        {label:'Tuesday',data:'T'},
        {label:'Wednesday',data:'W'},
        {label:'Thurday',data:'Th'},
        {label:'Friday',data:'F'},
        {label:'Saturday',data:'S'},
        {label:'Sunday',data:'Su'}
    ]
    const [availableDays, setAvailableDays] = useState([]);
    const [doctors, setDoctors] = useState([]);
    // const { title, buttonTitle } = ourDoctors;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://sehatsampark-backend.onrender.com/get_all_doctors",
                    {
                        method: "GET",
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                        mode: "cors",
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                console.log("Data from API:", data.doctor_data); // Log data received from the API
                setDoctors(data.doctor_data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchData();
    }, []);

   

    
    
    return (
        <div className="w-full py-10">
            <div className="flex items-start justify-between">
                {/* <h2>{title}</h2> */}
                {/* <Button title={buttonTitle} /> */}
            </div>

            <div className="mt-5">
                <h3>Available Days:</h3>
                <ul>
                    {availableDays.map((day, index) => (
                        <li key={index}>{day.label}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8">
                {doctors.map((doctor, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center lg:items-start gap-1 cursor-pointer"
                        >
                            <img
                                src="https://source.unsplash.com/random/900x700/?indian_doctors"
                                width={250}
                                height={250}
                                className="rounded-xl"
                            />
                            <h4 className="font-bold">{doctor.full_name}</h4>
                            <p>
                                Years of Experience:{" "}
                                {doctor.years_of_experience}
                            </p>
                            <p>Expertise: {doctor.expertise_category}</p>
                            <p>Email: {doctor.email}</p>
                            <p>Phone Number: {doctor.phone_number}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Doctors;
