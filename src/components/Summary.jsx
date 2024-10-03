import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Summary() {
  const navigate = useNavigate();

  return (
    <div>
    <div className="card">
      {Card()}
      <div className="mx-10 lg:mx-14 mt-5 lg:mt-10 flex flex-col">
        <h3 className="text-left">Finishing up</h3>
        <p class="mt-1 text-left text-gray-400">
          Double-check everything looks OK before confirming.
        </p>
        <div></div>

        <div className="hidden lg:flex mt-10 items-center justify-between">
          <p
            onClick={() => navigate(-1)}
            className="text-gray-400 text-sm cursor-pointer hover:text-blue-900 hover:font-bold"
          >
            Go Back
          </p>
          <button onClick={() => navigate("")} className="text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>

    <div className="lg:hidden footer justify-between">
        
    <p
            onClick={() => navigate(-1)}
            className="text-gray-400 text-sm cursor-pointer hover:text-blue-900 hover:font-bold"
          >
            Go Back
          </p>
          <button onClick={() => navigate("")} className="text-white">
            Confirm
          </button>
        </div>
      
    </div>
  );
}

export default Summary;
