import MyPosts from '@/components/MyPosts';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPostByUserId } from '@/lib/data';

const Dashboard = async () => {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }
  const postsFromDb = await getPostByUserId(session.user._id);

  const posts = postsFromDb.map((post) => JSON.parse(JSON.stringify(post)));
  return (
    <>
      <div className='flex flex-col sm:flex-row gap-4 items-center text-center sm:text-start justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-[#367dfd]'>
            Welcome, {session.user.username}
          </h2>
          <p className='mt-1.5 text-sm text-gray-200'>
            Let&apos;s write a new blog post! 🎉
          </p>
        </div>
        <Link href={'/create-post'}>
          <button className='p-2 font-medium text-center min-w-24 w-full bg-[#367dfd] text-white rounded'>
            Create Post
          </button>
        </Link>
      </div>
      <hr className='my-4' />
      <MyPosts posts={posts} />
    </>
  );
};

export default Dashboard;
