import Image from 'next/image';

const AboutPage = () => {
  const features = [
    '🖋 Write and share your thoughts and knowledge with others',
    '📚 Explore a wide range of topics and ideas from various creators',
    '🌱 Learn and grow with the community',
    '🔍 Discover new perspectives and insights on different subjects',
  ];
  return (
    <div className='flex gap-10 mb-5'>
      {/* Text container */}
      <div className='flex-1 flex flex-col gap-[50px]'>
        <h2 className='text-2xl font-bold text-[#367dfd]'>About Us</h2>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          Welcome to our platform
        </h1>
        <ul className='list-inside'>
          {features.map((feature, idx) => (
            <li key={idx} className='text-lg font-normal'>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Image container */}
      <div className='hidden sm:flex flex-1 relative'>
        <Image
          src='/about.png'
          alt='about image'
          className='object-contain'
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
