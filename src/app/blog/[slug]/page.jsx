import Image from 'next/image';
import { getPost } from '@/lib/data';
import { Suspense } from 'react';
import PostUser from '@/components/PostUser';

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const post = await getPost(params.slug);
  return (
    <div className='flex flex-col gap-6'>
      {post.img && (
        <div className='relative h-[300px] w-full'>
          <Image
            src={post.img ? post.img : '/blog.jpg'}
            alt='post image'
            className='object-cover rounded-lg'
            fill
          />
        </div>
      )}
      <div className='flex justify-between flex-col gap-4'>
        <div className='font-bold text-2xl md:text-4xl'>{post.title}</div>
        {post && (
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
        )}
      </div>
      <div className='text-gray-300 text-lg'>{post.desc}</div>
    </div>
  );
};

export default SinglePostPage;
