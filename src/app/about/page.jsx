import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex gap-10">
      {/* Text container */}
      <div className="flex-1 flex flex-col gap-[50px]">
        <h2 className="text-2xl font-bold text-[#367dfd]"> About Agency.</h2>
        <h1 className="text-5xl font-bold">
          We create digital ideas which are bigger, bolder, braver and better.
        </h1>
        <p className="text-lg font-normal">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision We're world's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold text-[#367dfd] text-2xl">10 K+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[#367dfd] text-2xl">234 K+</h3>
            <p>People reached</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[#367dfd] text-2xl">5 K+</h3>
            <p>Service and plugins</p>
          </div>
        </div>
      </div>

      {/* Image container */}
      <div className="flex-1 relative">
        <Image
          src="/about.png"
          alt="about image"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
