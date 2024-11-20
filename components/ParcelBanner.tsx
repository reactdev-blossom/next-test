"use client";
import CustomButton from "./CustomButton";
import ScrollableCard from "./ScrollableCard";
import TransPortAvtar from "./TransPortAvtar";

const ParcelBanner = () => {
  const parcelCategories = [
    "Vehicle",
    "Animal",
    "Furniture",
    "Electronics",
    "Food",
    "Clothing",
    "Books",
    "Appliance",
    "Tools",
    "Toys",
    "Books",
    "Appliance",
    "Tools",
    "Toys",
  ];
  return (
    <>
      <div className="flex bg-white h-[40rem] max-w-[90rem] w-full mx-auto px-5 lg:px-28">
        <div className="h-full bg-white flex max-w-[90rem] w-full items-center flex-col mx-auto custom-shadow py-10 gap-4 relative rounded-[70px] z-20">
          <div className="flex absolute top-0 left-0 bg-white bg-opacity-60 h-full w-[9.25rem] z-10 rounded-tl-[70px] rounded-bl-[70px]"></div>
          <div className="flex absolute top-0 right-0 bg-white bg-opacity-60 h-full w-[9.25rem] z-10 rounded-tr-[70px] rounded-br-[70px]"></div>
          <div className="text-header flex flex-col justify-center items-center gap-3">
            <p className="text-[#FF8600] font-semibold text-[1.25rem] leading-[1.52rem]">
              How TransWeego Works
            </p>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#0C3227] font-semibold text-[2.5rem] leading-[2.62rem]">
                Lorem Ipsum is simply
              </p>
              <p className="text-[#0C3227] font-semibold text-[2.5rem] leading-[2.62rem]">
                dummy text
              </p>
            </div>
          </div>
          <div className="flex gap-5 overflow-scroll w-full hide-scrollbar  py-4 flex-row justify-center items-center">
            <ScrollableCard data={parcelCategories} />
          </div>
          <div className="flex gap-5 overflow-scroll w-full hide-scrollbar py-4  ">
            <TransPortAvtar data={parcelCategories} />
          </div>
          <div className="buttons flex gap-4">
            <span>
              <CustomButton
                text={"Send"}
                color={"text-white"}
                bgColor={"bg-[#FF8600]"}
              />
            </span>
            <span>
              <CustomButton
                text={"Transport"}
                color={"text-white"}
                bgColor={"bg-[#FFCF00]"}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ParcelBanner;
