import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  let date = new Date(post.createdAt);
  return (
    <div className="p-4 rounded-lg bg-[#2d2b42]">
      <div className="flex justify-between items-center mb-4">
        <div className="relative h-[300px] w-full">
          <Image
            src={post.img ? post.img : "/blog.png"}
            alt="blog image"
            className="object-cover rounded-lg"
            fill
          />
        </div>
      </div>
      <div className="flex gap-3 flex-col">
        <h3 className="font-bold text-xl w-[90%] truncate">{post.title}</h3>
        <p className="text-[#e5e5e5] w-[90%] line-clamp-3">{post.desc}</p>
        <div className="flex justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="text-indigo-500 font-semibold"
          >
            READ MORE &rarr;
          </Link>
          <span className="text-sm relative">{date.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
