import Image from 'next/image';

const AboutPage = () => {
  const features = [
    {
      icon: '🖋',
      text: 'Write and share your thoughts and knowledge with others',
    },
    {
      icon: '📚',
      text: 'Explore a wide range of topics and ideas from various creators',
    },
    {
      icon: '🌱',
      text: 'Learn and grow with the community',
    },
    {
      icon: '🔍',
      text: 'Discover new perspectives and insights on different subjects',
    },
  ];

  return (
    <div className='flex flex-col items-center lg:flex-row gap-10 mb-5'>
      {/* Text container */}
      <div className='flex-1 flex flex-col gap-10'>
        <h2 className='text-2xl font-bold text-[#367dfd]'>About Us</h2>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          Welcome to thoughts. 💡
        </h1>
        <ul className='list-none space-y-4'>
          {features.map((feature, idx) => (
            <li
              key={idx}
              className='flex items-start space-x-3 text-lg font-normal'
            >
              <span className='text-2xl'>{feature.icon}</span>
              <span className='leading-relaxed'>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image container */}
      <div className='flex order-first lg:order-2 flex-1 relative'>
        <Image src='/about.png' alt='about image' width={500} height={500} />
      </div>
    </div>
  );
};

export default AboutPage;
