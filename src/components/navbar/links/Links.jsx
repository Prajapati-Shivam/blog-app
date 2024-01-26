"use client";
import { handleLogout } from "@/lib/action";
import Image from "next/image";
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
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
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
            {session.user?.isAdmin && (
              <Link
                href="/admin"
                className="p-2 font-medium text-center rounded-[20px] min-w-24"
              >
                Admin
              </Link>
            )}
            <form action={handleLogout}>
              <button className="font-bold p-2 cursor-pointer bg-white text-black rounded">
                Logout
              </button>
            </form>
          </>
        ) : (
          <Link
            href="/login"
            className="pl-0 p-2 font-medium text-center min-w-24 bg-white text-black rounded"
          >
            Login
          </Link>
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        className="block lg:hidden cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="flex lg:hidden flex-col pt-10 items-center fixed top-[100px] right-0 gap-3 w-1/2 h-[calc(100vh)] bg-[#2d2b42] z-40">
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
