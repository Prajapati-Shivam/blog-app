import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex items-center flex-col md:flex-row gap-5 md:gap-10 my-6'>
      {/* Image container */}
      <div className='flex-1 flex items-center justify-center h-full w-auto'>
        <Image src='/hero.png' alt='hero image' width={500} height={500} />
      </div>
      {/* Text container */}
      <div className='flex-1 flex flex-col gap-[50px]'>
        <h1 className='text-4xl md:text-5xl text-wrap font-bold'>
          Ideas. Insights. Inspiration.
        </h1>
        <p className='text-lg'>
          Our platform welcomes aspiring writers, curious readers, and
          enthusiastic learners. Join us to create, explore, and grow in a
          dynamic space for sharing ideas and gaining insights. 🚀
        </p>
        <div className='flex gap-4'>
          <Link href={'/about'}>
            <button className='px-3 py-2 bg-[#367dfd] text-white cursor-pointer border-none outline-none rounded'>
              Learn More
            </button>
          </Link>
          <Link href={'/contact'}>
            <button className='px-3 py-2 bg-white text-black cursor-pointer border-none outline-none rounded'>
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
