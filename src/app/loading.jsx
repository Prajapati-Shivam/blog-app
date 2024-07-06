import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='text-2xl flex items-center'>
        <Loader2 size={32} className='mr-2 animate-spin' />
        Loading...
      </div>
    </div>
  );
};

export default Loading;
