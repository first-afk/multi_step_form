import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";

function Info() {
  const navigate = useNavigate();
  const [index, setIndex] = useState();

  return (
    <div>
      <div className="card">
        {Card()}
        <div className="mx-14 mt-10 flex flex-col">
          <h3 className="text-left text-pretty">Personal Info</h3>
          <p className="mt-1 text-left text-gray-400 text-pretty">
            Please provide your name, email address and phone number.
          </p>

          <div className="mt-5 text-left">
            <label htmlFor="full-name" className="font-medium leading-6">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="full-name"
                placeholder="e.g Stephen King"
                className="w-full rounded-md border-0 py-2.5 px-1.5 shadow-sm ring-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
              />
            </div>
          </div>
          <div className="mt-5 text-left">
            <label htmlFor="email" className="font-medium leading-6">
              E-mail Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="e.g you@example.com"
                className="w-full rounded-md border-0 py-2.5 px-1.5 shadow-sm ring-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
              />
            </div>
          </div>
          <div className="mt-5 text-left">
            <label htmlFor="number" className="font-medium leading-6">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                autoComplete="phone-number"
                placeholder="e.g xxx-xxxx-xxxx"
                className="w-full rounded-md border-0 py-2.5 px-1.5 shadow-sm ring-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white"
              />
            </div>
          </div>

          <div className="hidden lg:flex p-5 mt-10 justify-end">
            <button
              onClick={() => navigate("select-plan")}
              className="text-white"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden footer justify-end">
        <button onClick={() => navigate("select-plan")} className="text-white">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Info;
