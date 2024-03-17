import React, { useState } from "react";
import healthcare from "../assets/healthcare.svg";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
const DoctorForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm();


  const onSubmit = async (data) => {
    axios
      .post("https://sehatsampark-backend.onrender.com/create_users", data)
      .then((response) => {
        // Handle success
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });

    // Convert the combined data into an array containing a single element

    console.log("Final complete data: ", data);
  };

  return (
    <div className="w-full  px-5 lg:px-10 py-10">
      <div className="border-2 border-secondary p-5 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-28">
          <img src={healthcare} width={600} height={600} />

          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3>Create User</h3>

            <div className="mt-5 flex flex-col items-start gap-3">
              <div className="flex flex-col lg:flex-row items-start gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    {...register("full_name")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Disease_category
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("expertise_category")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    placeholder="Male/Female"
                    {...register("gender")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Age
                  </label>
                  <input type="number" placeholder="12" {...register("age")} />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Pincode
                  </label>
                  <input
                    type="number"
                    className="w-full"
                    placeholder="110019"
                    {...register("pincode")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Payment Status
                  </label>
                  <input
                    type="select"
                    placeholder="12"
                    className="w-full"
                    {...register("payment_status")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Prescriptions
                  </label>
                  <textarea {...register("prescriptions")} />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="w-full"
                    placeholder="+91545454545"
                    {...register("phone_number")}
                  />
                </div>
              </div>
            </div>

            <Button title="Create User" className="w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
