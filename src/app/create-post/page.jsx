'use client';
import { addPost } from '@/lib/action';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const CreatePost = () => {
  const createSlug = (title) => {
    if (title.includes(' ')) {
      return title.toLowerCase();
    } else {
      return title.toLowerCase().split(' ').join('-');
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const slug = createSlug(data.title);
    try {
      toast.promise(addPost({ ...data, slug }), {
        loading: 'Posting...',
        success: 'Post created!',
        error: 'Error creating post',
      });
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Error creating post');
    }
  };

  return (
    <div className='flex my-8'>
      <form
        className='flex flex-col gap-5 w-full'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='text-3xl font-bold text-[#367dfd]'>Create Post</h2>
        <input
          type='url'
          {...register('img')}
          placeholder='Link to image (optional)'
          className='border-2 border-dashed rounded p-2 border-[#367dfd] outline-none bg-transparent text-lg text-gray-300 w-full'
        />
        <input
          type='text'
          {...register('title', { required: true })}
          placeholder='Title'
          className='border-b-2 p-2 border-[#367dfd] outline-none bg-transparent text-2xl font-bold w-full'
        />
        {errors.title && <span>Title is required</span>}

        <div className='text-gray-300 text-lg'>
          <textarea
            {...register('desc', { required: true })}
            cols='30'
            rows='4'
            placeholder='Description'
            className='border-b-2 p-2 border-[#367dfd] outline-none bg-transparent text-lg text-gray-300 w-full'
          ></textarea>
          {errors.description && <span>Description is required</span>}
        </div>
        <button
          type='submit'
          className='px-4 py-3 bg-[#367dfd] text-white cursor-pointer font-bold border-none outline-none rounded'
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
