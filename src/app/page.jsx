import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-10">
      {/* Text container */}
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="text-4xl md:text-5xl font-bold">
          Creative Thoughts Agency.
        </h1>
        <p className="text-lg">
          We are a creative agency that specializes in creating websites and
          applications that are both beautiful and functional.
        </p>
        <div className="flex gap-4">
          <button className="px-3 py-2 bg-[#367dfd] text-white cursor-pointer border-none outline-none rounded">
            Learn More
          </button>
          <button className="px-3 py-2 bg-white text-black cursor-pointer border-none outline-none rounded">
            Contact
          </button>
        </div>
        <div className="w-[500px] h-[50px] relative grayscale">
          <Image src="/brands.png" alt="brands" fill />
        </div>
      </div>

      {/* Image container */}
      <div className="flex-1 hidden md:flex relative">
        <Image src="/hero.gif" alt="hero image" fill />
      </div>
    </div>
  );
};

export default Home;
