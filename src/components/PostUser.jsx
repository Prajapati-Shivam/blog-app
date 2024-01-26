import React from "react";
import { getUser } from "@/lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className="flex gap-5 items-center">
      <div className="flex gap-5 w-12 h-12">
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          width={50}
          height={50}
          className="rounded-[50%] object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-gray-400 text-lg">Author</span>
        <span>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
