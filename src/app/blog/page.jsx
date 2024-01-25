import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "../../../lib/data";

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className="flex flex-wrap gap-5">
      {/* <PostCard /> */}
      {posts && posts.length === 0 && <div>No posts found</div>}
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col w-[100%] md:w-[40%] xl:w-[30%] gap-5 mb-5"
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
