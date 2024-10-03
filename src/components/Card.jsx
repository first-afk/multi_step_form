import React from "react";
import bg from "./../images/bg-sidebar.svg";
import mobile from './../images/bg-mobile.svg'

function Card() {
  const tags = [
    { id: 1, hero: 1, h4: "STEP 1", p: "YOUR INFO" },
    { id: 2, hero: 2, h4: "STEP 2", p: "SELECT PLAN" },
    { id: 3, hero: 3, h4: "STEP 3", p: "ADD-ONS" },
    { id: 4, hero: 4, h4: "STEP 4", p: "SUMMARY" },
  ];

  return (
      <div className=" flex">
        <div className="lg:flex text-left absolute z-50 mt-10 query">
          <ul className="flex lg:flex-col text-white mx-14 unordered">
            {tags.map((item) => (
              <li key={item.id} className="bg space-x-3">
                <div className="hero">{item.hero}</div>
                <div className="hidden lg:block">
                  <h4 className="text-xs font-light">{item.h4}</h4>
                  <p className="font-bold">{item.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-lg text-black flex items-center justify-center absolute top-[10%] z-50 bg-pink-400 w-full left-0">
          <ul className="flex">
            <li>1</li>
            <li>4</li>
            <li>3</li>
            <li>2</li>
          </ul>
        </div>
        <img src={bg} alt="" className="hidden lg:flex img" />
        <img src={mobile} alt="" className="flex lg:hidden mobile " />
      </div>
  );
}

export default Card;
