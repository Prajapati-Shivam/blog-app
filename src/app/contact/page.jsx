import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10'>
      <div className='flex-1 w-auto h-[450px]'>
        <Image
          src='/contact.png'
          alt='contact image'
          width={450}
          height={450}
        />
      </div>
      <form action='' className='flex w-full flex-col gap-5'>
        <input
          type='text'
          placeholder='Your name'
          className='p-2 rounded border-none outline-none bg-[#2d2b42]'
        />
        <input
          type='email'
          placeholder='Email Address'
          className='p-2 rounded border-none outline-none bg-[#2d2b42]'
        />
        <input
          type='number'
          placeholder='Phone Number (Optional)'
          className='p-2 rounded border-none outline-none bg-[#2d2b42]'
        />
        <textarea
          name='message'
          id=''
          cols='30'
          rows='4'
          placeholder='Message'
          className='p-2 rounded border-none outline-none bg-[#2d2b42]'
        ></textarea>
        <button className='px-4 py-3 bg-[#367dfd] text-white cursor-pointer font-bold border-none outline-none rounded'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
