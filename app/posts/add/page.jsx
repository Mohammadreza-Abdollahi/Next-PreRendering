import Alert from "@/utilities/Alert";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const AddPost = () => {
  const addPostService = async (formData) => {
    "use server";
    const title = formData.get("title");
    const body = formData.get("body");
    const res = await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    });
    if (res.ok) {
      revalidateTag("getPosts");
      redirect("/posts");
    } else {
      alert("Error...");
    }
  };
  return (
    <section className="text-center">
      <h1 className="mt-5 mb-3 text-3xl">Add Post</h1>
      <div className="w-1/5 mx-auto">
        <form action={addPostService}>
          <div className="relative">
            <label className="absolute left-1.5 bg-white px-2" htmlFor="title">
              Title
            </label>
            <input
              className="w-full my-3 py-2 px-3 border-1 border-slate-400 rounded-md focus:border-blue-400 focus:outline-0"
              placeholder="Enter Title..."
              type="text"
              id="title"
              name="title"
            />
            <br />
          </div>
          <div className="relative">
            <label className="absolute left-1.5 bg-white px-2" htmlFor="title">
              Body
            </label>
            <input
              className="w-full my-3 py-2 px-3 border-1 border-slate-400 rounded-md focus:border-blue-400 focus:outline-0"
              placeholder="Enter Body..."
              type="text"
              id="body"
              name="body"
            />
            <br />
          </div>
          <button
            className="w-full mb-3 block py-3 text-lg rounded-md bg-blue-600 text-white hover:text-blue-600 hover:border-1 hover:border-blue-600 hover:bg-white transition-all duration-150"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPost;
