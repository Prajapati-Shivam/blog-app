import MyPosts from "@/components/MyPosts";
import { auth } from "@/lib/auth";
import { getPost } from "@/lib/data";
import Link from "next/link";

const Dashboard = async () => {
  const session = await auth();

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-[#367dfd]">
          Welcome, {session.user.username}
        </h2>
        <Link href={"/create-post"}>
          <button className="px-3 py-2 bg-white text-black font-semibold cursor-pointer border-none outline-none rounded">
            + New Post
          </button>
        </Link>
      </div>
      <hr className="my-4" />
      <MyPosts id={session?.user?._id} />
      {/* <button>Create new post</button> */}
    </>
  );
};

export default Dashboard;
