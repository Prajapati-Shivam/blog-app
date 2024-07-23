import Link from 'next/link';
import PostCard from './PostCard';

const MyPosts = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <p className='font-normal text-lg my-8 text-gray-400'>
        No posts found.{` `}
        <Link href='/create-post' className='hover:underline'>
          Create one now!
        </Link>
      </p>
    );
  }

  return (
    <section>
      <h2 className='text-xl font-medium my-4'>My Posts</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {posts.map((post) => (
          <article key={post._id} className='relative group'>
            <PostCard post={post} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyPosts;
