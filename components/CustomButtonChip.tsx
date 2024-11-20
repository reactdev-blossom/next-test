import React from "react";
type CustomButtonChipProps = {
  text: string;
};
const CustomButtonChip: React.FC<CustomButtonChipProps> = ({ text }) => {
  return (
    <button
      className={`w-[12.43rem] min-w-[12.43rem] h-[4.19rem] min-h-[4.19rem] text-black hover:text-white hover:bg-[#FF8600] bg-[#F1F1F1] rounded-full font-semibold text-[15px] leading-[18.29px]`}
    >
      {text}
    </button>
  );
};
export default CustomButtonChip;