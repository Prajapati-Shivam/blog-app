import Image from 'next/image';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      {/* <div className='text-2xl flex items-center'>
        <Loader2 size={32} className='mr-2 animate-spin' />
        Loading...
      </div> */}
      <Image src='/loading_gif.gif' alt='loading' width={200} height={200} />
    </div>
  );
};

export default Loading;
