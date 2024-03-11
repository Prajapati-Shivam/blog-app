import { auth } from "@/lib/auth";
import { getPost } from "@/lib/data";

const Dashboard = async () => {
  const session = await auth();
  const getAllPosts = async () => {
    const posts = await getPost(session?.user?._id);
    if (!posts || posts.length === 0) {
      return <p>No posts found</p>;
    }
    return <div>{posts[0].title}</div>;
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-[#367dfd]">
        Welcome, {session.user.username}
      </h2>
      <div>{getAllPosts()}</div>
      {/* <button>Create new post</button> */}
    </>
  );
};

export default Dashboard;
