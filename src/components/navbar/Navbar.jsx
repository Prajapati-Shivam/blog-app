import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex items-center justify-between my-8">
      <Link href="/" className="text-3xl font-bold">
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
