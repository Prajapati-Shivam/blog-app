import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className="flex gap-10">
      <div className="hidden sm:flex w-[30%] relative h-[calc(100vh-200px)]">
        <Image
          src="https://images.pexels.com/photos/18898418/pexels-photo-18898418/free-photo-of-close-up-of-a-branch-with-green-and-yellow-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div className="font-bold text-4xl">Title</div>
        <div className="flex gap-4 sm:gap-8 items-center">
          <div className="flex gap-5 w-12 h-12">
            <Image
              src="https://images.pexels.com/photos/19877105/pexels-photo-19877105/free-photo-of-mong-c.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1"
              width={50}
              height={50}
              className="rounded-[50%] object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-gray-400 text-lg">Author</span>
            <span>John Doe</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-gray-400 text-lg">
              Published
            </span>
            <span>01.01.2024</span>
          </div>
        </div>
        <div className="text-gray-300 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit
          nobis veniam. Voluptas atque commodi error ipsa illum nesciunt
          possimus voluptates, maxime praesentium eaque odit tempore sit officia
          repellendus voluptatem.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
