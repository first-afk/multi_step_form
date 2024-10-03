import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";
import { BiSolidToggleLeft } from "react-icons/bi";
import { BiSolidToggleRight } from "react-icons/bi";
import arcade from "./../images/icon-arcade.svg";
import advanced from "./../images/icon-advanced.svg";
import pro from "./../images/icon-pro.svg";

function Plan() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const goBack = () => {
    navigate("/");
  };
  const addon = () => {
    {
      isOpen ? navigate("/add-on-monthly") : navigate("/add-on-yearly");
    }
  };

  return (
    <div>
    <div className="card ">
      {Card()}
      <div className="mx-10 lg:mx-14 mt-5 lg:mt-10 flex flex-col">
        <h3 className="text-left">Select your plan</h3>
        <p class="mt-1 text-left text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col justify-center items-center">
          {isOpen ? (
            <div className="flex py-8 plan">
              <div className="rounded-lg mx-2 lg:w-36 lg:h-40 ring-2 border-1 flex lg:flex-col lg:space-y-10 text-left px-5 arcade">
                <div className="">
                  <img
                    src={arcade}
                    alt=""
                    className="lg:h-[45px] lg:mt-5 items-center"
                  />
                </div>
                <div>
                  <h4 className="">Arcade</h4>
                  <p className="text-gray-400">$9/mo</p>
                </div>
              </div>
              <div className="rounded-lg mx-2 lg:w-36 lg:h-40 ring-2 border-1 flex lg:flex-col lg:space-y-10 text-left px-5 arcade">
                <div>
                  <img src={advanced} alt="" className="lg:h-[45px] lg:mt-5" />
                </div>
                <div>
                  <h4>Advanced</h4>
                  <p className="text-gray-400">$12/mo</p>
                </div>
              </div>
              <div className="rounded-lg mx-2 lg:w-36 lg:h-40 ring-2 border-1 flex lg:flex-col lg:space-y-10 text-left px-5 arcade">
                <div>
                  <img src={pro} alt="" className="lg:h-[45px] lg:mt-5" />
                </div>
                <div>
                  <h4>Pro</h4>
                  <p className="text-gray-400">$15/mo</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex py-8 plan">
              <div className="rounded-lg mx-2 lg:w-36 lg:h-40 ring-2 border-1 flex lg:flex-col lg:space-y-10 text-left px-5 arcade">
                <div>
                  <img src={arcade} alt="" className="lg:h-[45px] lg:mt-5" />
                </div>
                <div>
                  <h4 className="">Arcade</h4>
                  <p className="text-gray-400">$90/mo</p>
                  <h4 className="text-sm">2 months free</h4>
                </div>
              </div>
              <div className="rounded-lg mx-2 lg:w-36 lg:h-40 ring-2 border-1 flex lg:flex-col lg:space-y-10 text-left px-5 arcade">
                <div>
                  <img src={advanced} alt="" className="lg:h-[45px] lg:mt-5" />
                </div>
                <div>
                  <h4>Advanced</h4>
                  <p className="text-gray-400">$120/mo</p>
                  <h4 className="text-sm">2 months free</h4>
                </div>
              </div>
              <div className="rounded-lg mx-2 lg:w-36 lg:h-40 ring-2 border-1 flex lg:flex-col lg:space-y-10 text-left px-5 arcade">
                <div>
                  <img src={pro} alt="" className="lg:h-[45px] lg:mt-5" />
                </div>
                <div>
                  <h4>Pro</h4>
                  <p className="text-gray-400">$150/mo</p>
                  <h4 className="text-sm">2 months free</h4>
                </div>
              </div>
            </div>
          )}

          <div className="toggle w-full rounded-md h-10 flex justify-center gap-5 items-center font-semibold ">
            <p
              onClick={toggle}
              className={!isOpen ? "cursor-pointer  text-gray-400" : null}
            >
              Monthly
            </p>
            <span onClick={toggle} className="cursor-pointer ">
              {isOpen ? (
                <BiSolidToggleLeft size="2.5rem" />
              ) : (
                <BiSolidToggleRight size="2.5rem" />
              )}
            </span>
            <p
              onClick={toggle}
              className={isOpen ? "cursor-pointer  text-gray-400" : null}
            >
              Yearly
            </p>
          </div>
        </div>

        <div className="hidden lg:flex mt-10 p-5 items-center justify-between">
          <p
            onClick={() => navigate("/")}
            className="text-gray-400 text-sm cursor-pointer hover:text-blue-900 hover:font-bold"
          >
            Go Back
          </p>
          <button onClick={() => addon()} className="text-white">
            Next Step
          </button>
        </div>
      </div>
    </div>

    <div className="lg:hidden footer justify-between">
        
        <p
            onClick={() => navigate("/")}
            className="text-gray-400 text-sm cursor-pointer hover:text-blue-900 hover:font-bold"
          >
            Go Back
          </p>
          <button onClick={() => addon()} className="text-white">
            Next Step
          </button>
        </div>
    </div>
  );
}

export default Plan;
