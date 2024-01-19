"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  let session = true;
  let isAdmin = true;
  const pathName = usePathname();
  return (
    <div className="">
      <div className="hidden items-center lg:flex">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathName === link.path && "bg-white text-black"
            } p-2 font-medium text-center rounded-[20px] min-w-24`}
          >
            {link.title}
          </Link>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <Link
                href="/admin"
                className="p-2 font-medium text-center rounded-[20px] min-w-24"
              >
                Admin
              </Link>
            )}
            <button className="font-bold p-2 cursor-pointer bg-white text-black">
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="pl-0 p-2 font-medium text-center min-w-24 bg-white text-black"
          >
            Login
          </Link>
        )}
      </div>
      <button
        className="block lg:hidden cursor-pointer font-bold"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className="flex lg:hidden flex-col justify-center items-center absolute top-[100px] right-0 gap-3 w-1/2 h-[calc(100vh)] bg-[#0d0c22]">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.title}
              className={`${
                pathName === link.path && "bg-white text-black"
              } p-2 font-medium text-center rounded-[20px] min-w-24`}
            >
              {link.title}
            </Link>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className="p-2 font-medium text-center rounded-[20px] min-w-24"
                >
                  Admin
                </Link>
              )}
              <button className="font-bold p-3 cursor-pointer">Logout</button>
            </>
          ) : (
            <Link
              href="/login"
              className="p-2 font-medium text-center rounded-[20px] min-w-24"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
