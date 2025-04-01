import BackButton from "@/components/BackButton";
import Link from "next/link";

const getPosts = async () => {
  const res = await fetch("http://localhost:4000/posts", {
    next: { tags: ["getPosts"] },
  });
  const posts = await res.json();
  return posts;
};
const Posts = async () => {
  const posts = await getPosts();
  return (
    <section className="text-center py-3">
      <h1 className="text-xl my-3">Posts Page</h1>
      <BackButton />
      <div className="px-3 my-3">
        <Link href="/posts/add">
          <button className="w-full block py-3 text-lg rounded-md bg-blue-600 text-white hover:text-blue-600 hover:border-1 hover:border-blue-600 hover:bg-white transition-all duration-150">
            Add Post
          </button>
        </Link>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col">
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <li
                className={`hover:bg-blue-50 hover:text-blue-800 border-b-2 pb-1 pt-4 border-blue-300 transition-all duration-150`}
              >
                {post.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Posts;
