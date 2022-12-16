import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, bgClass, icon } = card;
  return (
    <div>
      <div className="">
        <div className={`text-6xl bg-teal-400  rounded-lg py-6 px-4 text-white ${bgClass}`}>
          <div className="flex text-start justify-around items-center">
            <div className="">
              <img src={icon} alt="" />
            </div>
            <div className="">
              <h4 className="text-xl my-2">{name}</h4>
              <p className="text-sm my-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
