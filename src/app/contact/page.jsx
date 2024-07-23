import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 p-5'>
      <div className='flex-1 w-auto h-[450px]'>
        <Image
          src='/contact.png'
          alt='contact image'
          width={450}
          height={450}
          className='rounded-lg shadow-md'
        />
      </div>
      <form
        action=''
        className='flex-1 flex w-full max-w-md flex-col gap-5 bg-gray-700 p-5 rounded-lg shadow-lg'
      >
        <input
          type='text'
          placeholder='Your name'
          className='p-3 rounded border bg-gray-600 outline-none focus:border-blue-500'
        />
        <input
          type='email'
          placeholder='Email Address'
          className='p-3 rounded border bg-gray-600 outline-none focus:border-blue-500'
        />
        <input
          type='number'
          placeholder='Phone Number (Optional)'
          className='p-3 rounded border bg-gray-600 outline-none focus:border-blue-500'
        />
        <textarea
          name='message'
          id=''
          cols='30'
          rows='4'
          placeholder='Message'
          className='p-3 rounded border bg-gray-600 outline-none focus:border-blue-500'
        ></textarea>
        <button className='px-4 py-3 bg-blue-500 text-white cursor-pointer font-bold border-none outline-none rounded hover:bg-blue-600 transition duration-200'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
