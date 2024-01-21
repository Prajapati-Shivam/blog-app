import Image from "next/image";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className="flex flex-col w-[100%] md:w-[40%] xl:w-[30%] gap-5 mb-5">
      <div className="flex justify-between items-center">
        <div className="w-[90%] h-[400px] relative">
          <Image
            src="https://images.pexels.com/photos/18898418/pexels-photo-18898418/free-photo-of-close-up-of-a-branch-with-green-and-yellow-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog image"
            className="object-cover"
            fill
          />
        </div>
        <span className="text-sm transform -rotate-90 relative">
          01.01.2024
        </span>
      </div>
      <div className="flex gap-3 flex-col">
        <h3 className="font-bold text-xl w-[90%]">title</h3>
        <p className="text-gray-500 w-[90%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          molestias eum nam consequatur eveniet beatae molestiae?
        </p>
        <Link href="/blog/post">READ MORE &rarr;</Link>
      </div>
    </div>
  );
};

export default PostCard;
