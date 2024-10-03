import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Yearly() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/select-plan");
  };

  const summary = () => {
    navigate("/summary");
  };

  return (
    <div>
      <div className="card ">
        {Card()}
        <div className="mx-10 lg:mx-14 mt-5 lg:mt-10 flex flex-col">
          <h3 className="text-left">Pick add-ons</h3>
          <p class="mt-1 leading-none text-left text-gray-400">
            Add-ons help enhance your gaming experience.
          </p>

          <div className="mt-5">
            <label htmlFor="default-checkbox" className="">
              <div className="flex items-center justify-between font-medium border-blue-800 border-2 rounded-md p-4 focus:outline-none focus:ring bg-violet-50 w-[280px] lg:w-[450px]">
                <div className="flex gap-3 items-center text-left ">
                  <div className="">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      class="form-checkbox rounded text-blue-800 shrink-0"
                    />
                  </div>
                  <div className="">
                    <h4 className="lg:text-lg text-sm">Online Services</h4>
                    <p className="text-sm  font-normal text-gray-500">
                      Access to multiplayer games
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm">+$10/yr</p>
                </div>
              </div>
            </label>
            <label htmlFor="default-checkbox1" className="">
              <div className="flex items-center justify-between font-medium border-blue-800 border-2 rounded-md p-4 focus:outline-none focus:ring bg-violet-50 mt-3 w-inherit">
                <div className="flex gap-3 items-center text-left ">
                  <div className="">
                    <input
                      id="default-checkbox1"
                      type="checkbox"
                      class="form-checkbox rounded text-blue-800 shrink-0"
                    />
                  </div>
                  <div className="">
                    <h4>Larger storage</h4>
                    <p className="text-sm font-normal text-gray-500">
                      Extra 1TB of cloud save
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm">+$20/yr</p>
                </div>
              </div>
            </label>
            <label htmlFor="default-checkbox2" className="">
              <div className="flex items-center justify-between font-medium border-blue-800 border-2 rounded-md p-4 focus:outline-none focus:ring active:bg-violet-50 mt-3 w-inherit">
                <div className="flex gap-3 items-center text-left ">
                  <div className="">
                    <input
                      id="default-checkbox2"
                      type="checkbox"
                      class="form-checkbox rounded text-blue-800 shrink-0"
                    />
                  </div>
                  <div className="">
                    <h4>Customizable Profile</h4>
                    <p className="text-sm font-normal text-gray-500">
                      Custom theme on your profile
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm">+$20/yr</p>
                </div>
              </div>
            </label>
          </div>

          <div className="hidden lg:flex mt-10 p-5 items-center justify-between">
            <p
              onClick={() => goBack()}
              className="text-gray-400 text-sm cursor-pointer hover:text-blue-900 hover:font-bold"
            >
              Go Back
            </p>
            <button onClick={() => summary()} className="text-white">
              Next Step
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden footer items-center justify-between">
        <p
          onClick={() => goBack()}
          className="text-gray-400 text-sm cursor-pointer hover:text-blue-900 hover:font-bold"
        >
          Go Back
        </p>
        <button onClick={() => summary()} className="text-white">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Yearly;
