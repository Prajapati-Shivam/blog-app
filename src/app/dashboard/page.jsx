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
      <header>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-0 lg:py-0'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='text-center sm:text-left'>
              <h1 className='text-2xl font-bold text-[#367dfd] sm:text-3xl'>
                Welcome, {session.user.username}!
              </h1>

              <p className='mt-1.5 text-sm text-gray-200'>
                Let&apos;s write a new blog post! 🎉
              </p>
            </div>

            <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
              <Link href={'/create-post'}>
                <button className='p-2 font-medium text-center min-w-24 bg-[#367dfd] text-white rounded'>
                  Create Post
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <hr className='my-4' />
      <MyPosts posts={posts} />
    </>
  );
};

export default Dashboard;
