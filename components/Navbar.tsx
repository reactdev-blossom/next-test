"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Navigations = [
  { name: "home", pathname: "/" },
  { name: "about", pathname: "/about" },
  { name: "events", pathname: "/events" },
  { name: "contact", pathname: "/contact" },
  { name: "movies", pathname: "/movies" },
];
export function Navbar() {
  const pathname = usePathname();
  const [addFix, setAddFix] = useState(true);

  useEffect(() => {
    const handleScroll = (dets: WheelEvent) => {
      console.log("Scroll event triggered", dets.deltaY, window.scrollY); // Check if the scroll event is firing.
      // if (window.scrollY > 400)
      //   setAddFix(currentScrollY <= lastScrollY.current);
      if (dets.deltaY < 0) {
        // Scrolling up
        setAddFix(true); // Change this as needed based on the direction you want
        console.log("Scrolling up");
      } else {
        // Scrolling down
        setAddFix(false); // Change this as needed based on the direction you want
        console.log("Scrolling down");
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    const nav = document.querySelector("nav");
    const margin = nav?.clientHeight;
    if (main) {
      main.style.marginTop = addFix ? `${margin}px` : "0px";
    }
  }, [addFix]);
  return (
    <nav
      className={`h-12 flex flex-row justify-evenly items-center
     gap-5 w-full  bg-gray-200 text-black font-semibold  py-10  z-30 ${
       addFix
         ? "fixed top-0   transition-all delay-150 duration-800 ease-out translate-y-[0] "
         : "-translate-y-[100px]  transition-all delay-150 duration-[1500] ease-out relative"
     }`}
    >
      <div className="w-3/12 flex flex-row justify-center items-center">
        <Image src={"/globe.svg"} width={24} height={24} alt="logo" />
      </div>
      <div className="w-6/12 flex flex-row justify-center items-center gap-6">
        {Navigations.map(
          (menu: { name: string; pathname: string }, i: number) => (
            <Link
              key={i}
              href={{
                pathname: `${menu.pathname}`,
              }}
              className={`px-3 text-sm font-semibold uppercase h-full flex pb-2 flex-row justify-center items-center ${
                pathname === menu.pathname && "text-red-700 underline  "
              }`}
            >
              {menu.name}
            </Link>
          )
        )}
      </div>
      <div className="w-3/12 flex flex-row justify-center items-center">
        {[
          { name: <RiAccountCircleFill />, pathname: "/account" },
          { name: <TbLayoutDashboardFilled />, pathname: "/dashboard" },
        ].map((menu, i) => (
          <Link
            key={i}
            href={{
              pathname: `${menu.pathname}`,
            }}
            className={`px-3 text-lg font-semibold uppercase h-full flex pb-2 flex-row justify-center items-end ${
              pathname === menu.pathname && "text-red-700 underline  "
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
