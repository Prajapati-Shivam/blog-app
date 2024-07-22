import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-6'>
      {/* <PostCard /> */}
      {posts && posts.length === 0 && (
        <div className='text-gray-400 font-semibold text-xl'>
          No posts found
        </div>
      )}
      {posts.map((post) => (
        <div key={post._id} className='w-full'>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
