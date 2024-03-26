"use client";
import { addPost } from "@/lib/action";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const CreatePost = () => {
  const createSlug = (title) => {
    return title.toLowerCase().split(" ").join("-");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const slug = createSlug(data.title);
    try {
      toast.promise(addPost({ ...data, slug }), {
        loading: "Posting...",
        success: "Post created!",
        error: "Error creating post",
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-0 md:px-24 lg:px-36 py-10">
      <h2 className="text-2xl font-bold text-[#367dfd]">Create a new Post</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Title"
          className="p-2 rounded border-none outline-none bg-[#2d2b42]"
        />
        {errors.title && <span>Title is required</span>}
        <textarea
          {...register("desc", { required: true })}
          cols="30"
          rows="4"
          placeholder="Description"
          className="p-2 rounded border-none outline-none bg-[#2d2b42]"
        ></textarea>
        {errors.description && <span>Description is required</span>}
        <input
          type="text"
          {...register("img")}
          placeholder="Link to image"
          className="p-2 rounded border-none outline-none bg-[#2d2b42]"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-[#367dfd] text-white cursor-pointer font-bold border-none outline-none rounded"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
