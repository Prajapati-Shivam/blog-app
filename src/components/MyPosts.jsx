import { getPostById } from "@/lib/data";
import PostCard from "./postCard/PostCard";

const MyPosts = async ({ id }) => {
  const posts = await getPostById(id);
  if (!posts || posts.length === 0) {
    return (
      <p className="font-normal text-lg my-8 text-gray-400">
        No posts found. Try creating new posts :)
      </p>
    );
  }
  return (
    <>
      <h2 className="text-xl font-medium my-4">My Posts</h2>
      <div className="flex flex-wrap gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col w-[100%] md:w-[40%] xl:w-[30%] gap-5 mb-5"
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MyPosts;
