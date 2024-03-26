"use server";
import { revalidatePath } from "next/cache";
import { connectDb } from "./connectDb";
import { Post, User } from "./models";
import { auth, signIn, signOut } from "./auth";

export const addPost = async (props) => {
  const session = await auth();
  const userId = session.user._id;
  const { title, desc, slug, img } = props;

  try {
    connectDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new error("Error adding post");
  }
};

export const deletePost = async (id) => {
  try {
    connectDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const handleLogin = async () => {
  "use server";
  await signIn("google", { redirectTo: "/blog" });
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};
