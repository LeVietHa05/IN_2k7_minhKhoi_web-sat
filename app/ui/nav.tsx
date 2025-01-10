"use client";

import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Practice", path: "/practice" },
];

export default function Nav() {
  const pathname = usePathname();
  if (!pathname) return null;
  return (
    <div
      className={classNames("fixed top-0 left-0 right-0 bg-gray-100", {
        hidden: ["/login", "/welcome"].includes(pathname),
      })}>
      <div className="w-[1440px] flex flex-rows justify-between px-[100px] py-[20px] mx-auto ">
        <div className="flex flex-rows">
          <div className="flex items-center">
            <Image
              src={"/SATBuddy.png"}
              width={188}
              height={58}
              alt="logo"></Image>
          </div>
          <div className="w-full max-w-md">
            {/* Navigation Bar */}
            <div className="flex justify-around text-base text-gray-500 leading-6 ml-6">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={classNames(
                      "px-3 py-3 flex-1 text-center mx-1  transition-all",
                      {
                        "border-b-2 border-blue-500 text-indigo-700 font-semibold":
                          pathname === item.path,
                        "hover:border-b-2 hover:border-blue-500":
                          pathname !== item.path,
                      }
                    )}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-rows">
          <div className="flex items-center">
            <Image
              src={"/notification.svg"}
              width={32}
              height={32}
              alt="noti"></Image>
          </div>
          <div className="flex items-center">
            <Image
              src={"/user1.png"}
              width={40}
              height={40}
              alt="user icon"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
