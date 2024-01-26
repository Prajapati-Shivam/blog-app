"use server";
import { revalidatePath } from "next/cache";
import { connectDb } from "./connectDb";
import { Post } from "./models";
import { signIn, signOut } from "./auth";

export const addPost = async (post) => {
  const { title, desc, slug, userId } = Object.fromEntries(post);

  try {
    connectDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new error("Error adding post");
  }
};

export const handleLogin = async () => {
  "use server";
  await signIn("google");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};
