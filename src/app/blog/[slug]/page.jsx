import Image from "next/image";
import { getPost } from "@/lib/data";
import { Suspense } from "react";
import PostUser from "@/components/PostUser";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className="flex gap-10">
      {post.img && (
        <div className="hidden sm:flex w-[30%] relative h-[calc(100vh-200px)]">
          <Image src={post.img} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-6">
        <div className="font-bold text-4xl">{post.title}</div>
        <div className="flex gap-4 sm:gap-8 items-center">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-gray-400 text-lg">
              Published
            </span>
            <span>01.01.2024</span>
          </div>
        </div>
        <div className="text-gray-300 text-lg">{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
