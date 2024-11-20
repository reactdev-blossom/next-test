import React from "react";
import PrimaryButton, { SecondaryButton } from "./PrimaryButton";

const EventBanner = () => {
  return (
    <div className=" w-full min-h-[40rem] flex flex-row justify-start items-center overflow-hidden h-[16rem] z-[5]">
      <img
        src="/beautiful-mountain-road-landscape 1.png"
        alt="img"
        className="absolute w-full h-full object-cover z-10"
      />
      <div className="flex flex-col justify-center gap-4  items-start w-full h-full bg-[#000000b4] z-10">
        <p className="text-6xl text-white font-bold w-full justify-start flex flex-row ps-16">
          Revolutionize <br />
          Your Vehicle Transport
        </p>
        <p className="text-2xl text-white font-bold w-full justify-start flex flex-row ps-16">
          Drive Smart, Share More, Earn Big, Preserve Nature.
        </p>
        <div className="flex flex-row gap-4 justify-start items-start ps-16">
          <PrimaryButton className="capitalize  text-white text-[1.60rem] font-medium w-48 h-14">
            <h1>Send</h1>
          </PrimaryButton>
          <SecondaryButton className="capitalize  text-white text-[1.60rem] font-medium w-48 h-14">
            <h1>Transport</h1>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
