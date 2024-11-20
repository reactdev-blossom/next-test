import Link from "next/link";
import { ReactNode } from "react";

export default function layout({
  children,
  users,
  orders,
  vehicles,
}: {
  children: ReactNode;
  users: ReactNode;
  orders: ReactNode;
  vehicles: ReactNode;
}) {
  return (
    <div className="w-full h-full justify-start   items-center flex flex-row flex-wrap ">
      <div className="w-2/3 flex flex-row h-48 border border-gray-400 overflow-auto">
        {children}
      </div>
      <div className="w-1/3 flex flex-row h-48 border border-gray-400 overflow-auto">
        {users}
      </div>
      <div className="w-1/3 flex flex-row h-48 border border-gray-400 overflow-auto">
        {orders}
      </div>
      <div className="w-2/3 flex flex-col h-48 border border-gray-400 overflow-auto">
        <div className="w-full flex felx-row justify-start items-center gap-4 bg-red-500 text-white">
          <Link href={"/dashboard/pageone"}>Page 1</Link>
          <Link href={"/dashboard/pagetwo"}>Page 2</Link>
        </div>
        {vehicles}
      </div>
    </div>
  );
}
