import React from "react";
import healthcare from "../assets/healthcare.svg";
import Button from "../components/Button";
const CreateCamp = () => {
    return (
        <div className="w-full  px-5 lg:px-10 py-10">
            <div className="border-2 border-secondary p-5 rounded-xl">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-28">
                    <img src={healthcare} width={600} height={600} />

                    <form className="flex flex-col items-center gap-3">
                        <h3>Create Camp</h3>

                        <div className="mt-5 flex flex-col items-center gap-3">
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Camp Name
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Camp Theme
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Camp Category
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Disease Focus
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Venue
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Date
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Time
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Awareness Creation
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Age Group
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Assigned Doctor
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Assigned Staff
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Camp Capacity
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Expertise
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>

                                <div className="flex flex-col items-start gap-2">
                                    <label
                                        className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                        htmlFor="grid-first-name"
                                    >
                                        Prerequisites
                                    </label>
                                    <input type="text" placeholder="build" />
                                </div>
                            </div>
                        </div>

                        <Button title="Create Camp" className="w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCamp;
