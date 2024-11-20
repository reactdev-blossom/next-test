"use client";

import React, { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-sm bg-white w-10/12 overflow-hidden mx-auto relative -translate-y-[100px] rounded-[69px]  shadow-md shadow-black h-auto py-10 z-10 ">
      {children}
    </div>
  );
};

export default Card;
