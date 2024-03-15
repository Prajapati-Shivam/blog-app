import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  let date = new Date(post.createdAt);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        {post.img && (
          <div className="w-[90%] h-[400px] relative">
            <Image
              src={post.img}
              alt="blog image"
              className="object-cover"
              fill
            />
          </div>
        )}
        <span className="text-sm transform -rotate-90 relative">
          {/* Add date later */}
          {"01.01.2024"}
        </span>
      </div>
      <div className="flex gap-3 flex-col">
        <h3 className="font-bold text-xl w-[90%]">{post.title}</h3>
        <p className="text-gray-500 w-[90%]">
          {post.desc.length > 20 ? post.desc.slice(0, 20) + "..." : post.desc}
        </p>
        <Link href={`/blog/${post.slug}`}>READ MORE &rarr;</Link>
      </div>
    </div>
  );
};

export default PostCard;
