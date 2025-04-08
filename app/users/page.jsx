import BackButton from "@/components/BackButton";
import Link from "next/link";
export const revalidate = 300;
const getUsers = async () => {
  const res = await fetch("http://localhost:4000/users",{next: {tags: ["getUsers"]}});
  const users = await res.json();
  return users;
};
const Users = async () => {
  const users = await getUsers();
  return (
    <section className="text-center py-3">
      <h1 className="text-xl my-3">Users Page</h1>
      <BackButton />
      <div className="px-3 my-3">
        <Link href="/users/add">
          <button className="w-full block py-3 text-lg rounded-md bg-blue-600 text-white hover:text-blue-600 hover:border-1 hover:border-blue-600 hover:bg-white transition-all duration-150">
            Add Post
          </button>
        </Link>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col">
          {users.map((post) => (
            <Link href={`/users/${post.id}`} key={post.id}>
              <li
                className={`hover:bg-blue-50 hover:text-blue-800 border-b-2 pb-1 pt-4 border-blue-300 transition-all duration-150`}
              >
                {post.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Users;
