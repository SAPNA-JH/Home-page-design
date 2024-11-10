import React, { useState } from "react";
import { Bg, Logo } from "../Assets/image";
import { Data } from "../Utils/helper";

function Body() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  return (

    
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <img  className= " absolute top-0 h-80 object-cover " src={Bg} alt="" />
      <div className="p-4  bg-white h-max z-10  rounded-lg shadow-xl ">
        <div className="flex font-bold text-4xl p-5 gap-7">
          <img src={Logo} />
          FAQs
        </div>
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className=""
              onClick={() => {
                setOpen(!open);
                setCurrentIndex(index);
              }}
            >
              <div className="my-2 flex ">
                {item.key} <span className={`${open && currentIndex=== index ? " rotate-45y" : ""} mx-4`}> {item.icon}</span>
              </div>
              <div
                className={`${
                  open && currentIndex === index ? " block" : "hidden"
                }`}
              >
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
