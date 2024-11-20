"use client";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onclick?: () => void;
  className?: string;
  children: ReactNode;
}

const PrimaryButton = ({
  onclick = () => console.log("I was clicked"),
  className = "btn",
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={() => onclick()}
      className={`px-4 py-2 rounded-[43.5px] uppercase text-xs mx-2 bg-[#FF8600]  hover:bg-[#FFCF00] cursor-pointer flex flex-row justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

export const SecondaryButton = ({
  onclick = () => console.log("I was clicked"),
  className = "btn",
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={() => onclick()}
      className={`px-8 py-2 rounded-[43.5px] uppercase text-xs mx-2 hover:bg-[#FF8600]  bg-[#FFCF00] cursor-pointer flex flex-row justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
