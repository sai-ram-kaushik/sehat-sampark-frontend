import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
const Camps = ({ ourCamps }) => {
    const { title, buttonTitle } = ourCamps;
    const [camps, setCamps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://sehatsampark-backend.onrender.com/get_all_camps",
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
                console.log("Data from API:", data.camp_data[0].camp_name); // Log data received from the API
                const dataArray = Object.values(data);
                setCamps(data.camp_data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchData();
    }, []);

    console.log("Camps:", camps.camp_data); // Log the camps state to inspect its content

    return (
        <div className="py-10">
            <div className="flex items-start justify-between">
                <h2>{title}</h2>
                <Link to="/create-camp">
                    <Button title={buttonTitle} />
                </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-start justify-start gap-8">
                {camps.length === 0 ? (
                    <p>No camps found</p>
                ) : (
                    camps.map((camp, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <img src="https://source.unsplash.com/random/900x700/?health-camp" className="rounded-xl" width={250} height={250} />
                            <h4 className="font-bold">{camp.camp_name}</h4>
                            <p>Camp Theme: {camp.camp_theme}</p>
                            <p>Camp Capacity: {camp.camp_capacity}</p>
                            <div className="flex items-center gap-2">
                                <p className="flex items-center gap-2"><SlCalender />{camp.date}</p>
                                <p className="flex items-center gap-2"><MdAccessTime />{camp.time_period.start_time} - {camp.time_period.end_time}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Camps;
