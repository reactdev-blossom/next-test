import React from "react";
type ButtonProps = {
  text: string;
  color: string;
  bgColor: string;
};
const CustomButton: React.FC<ButtonProps> = ({ text, color, bgColor }) => {
  return (
    <button
      className={`w-[15rem] h-[4rem] ${bgColor} ${color} rounded-full font-semibold text-lg`}
    >
      {text}
    </button>
  );
};
export default CustomButton;
