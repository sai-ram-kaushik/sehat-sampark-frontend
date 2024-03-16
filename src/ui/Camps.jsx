import React, { useEffect, useState } from "react";
import axios from "axios";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Camps = ({ ourCamps }) => {
    const [ourcamps, setOurcamps] = useState([]);
    const { title, camps, buttonTitle } = ourCamps;

    useEffect(() => {
        // axios
        //     .get("https://sehatsampark-backend.onrender.com/get_all_camps", {
        //         headers: {
        //             "Access-Control-Allow-Origin": "*",
        //         },      
        //         mode: "cors",
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         //setOurcamps(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        const fetchData = async () => {
            try {
                const response = await fetch("https://sehatsampark-backend.onrender.com/get_all_camps", {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    mode: "cors",
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const data = await response.json();
                setOurcamps(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
    
        fetchData();
    },[]);
    console.log(ourCamps);

    return (
        <div className="py-10">
            <div className="flex items-start justify-between">
                <h2>{title}</h2>
                <Link to="/create-camp">
                    <Button title={buttonTitle} />
                </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 lg;grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8">
                {ourcamps.map((camp, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center lg:items-start gap-2 cursor-pointer"
                        >
                            {/* <img
                                src={camp.image}
                                width={250}
                                height={250}
                                className="rounded-xl"
                            /> */}
                            <h4 className="max-w-[400px]">{camp.camp_name}</h4>
                            <p>Category: {camp.amp_category}</p>
                            <p>Disease Focused: {camp.disease_focus}</p>
                            <p className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <SlCalender /> {camp.date}
                                </div>

                                {/* <div className="flex items-center gap-2">
                                    <MdAccessTime /> {camp.timePeriod}
                                </div> */}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Camps;
