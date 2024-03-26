import MyPosts from "@/components/MyPosts";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getPostById } from "@/lib/data";

const Dashboard = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const postsFromDb = await getPostById(session.user._id);

  const posts = postsFromDb.map((post) =>
    post.toObject ? post.toObject() : post
  );
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
      <MyPosts posts={posts} />
    </>
  );
};

export default Dashboard;
