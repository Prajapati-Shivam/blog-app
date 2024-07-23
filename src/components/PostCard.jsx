'use client';
import Image from 'next/image';
import { Trash } from 'lucide-react';
import { deletePost } from '@/lib/action';
import { toast } from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';

const PostCard = ({ post }) => {
  const path = usePathname();
  const navigate = useRouter();
  let date = new Date(post.createdAt);
  const handleDeletePost = (postId) => {
    try {
      let confirm = window.confirm(
        'Are you sure you want to delete this post?'
      );
      if (confirm) {
        deletePost(postId);
        toast.success('Post deleted successfully');
      }
    } catch (error) {
      toast.error('Failed to delete post');
      console.log(error);
    }
  };
  return (
    <div className='group relative block hover:cursor-pointer h-[250px]'>
      {path === '/dashboard' && (
        <div
          className='bg-red-500 cursor-pointer rounded-lg z-20 p-2 m-6 absolute top-0 right-0 hidden group-hover:block transition-opacity duration-300'
          onClick={() => handleDeletePost(post._id)}
        >
          <Trash />
        </div>
      )}

      <div
        onClick={() => navigate.push(`/blog/${post.slug}`)}
        className='p-4 sm:p-6 flex flex-col justify-between h-full relative'
      >
        <Image
          src={post.img ? post.img : '/blog.jpg'}
          alt='blog image'
          fill
          className='absolute object-cover rounded-md inset-0 opacity-75 transition-opacity group-hover:opacity-50'
        />
        <div className='relative'>
          <span className='text-sm relative'>{date.toLocaleDateString()}</span>

          <p className='text-xl font-bold text-white sm:text-2xl truncate'>
            {post.title}
          </p>
        </div>

        <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
          <p className='text-sm text-white line-clamp-3'>{post.desc}</p>
          <span className='text-indigo-300 font-semibold'>
            READ MORE &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
