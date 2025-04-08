import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const AddUser = () => {
  const addUserService = async (formData) => {
    "use server";
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email
      }),
    });
    if (res.ok) {
      revalidateTag("getUsers");
      redirect("/users");
    } else {
      alert("Error...");
    }
  };
  return (
    <section className="text-center">
      <h1 className="mt-5 mb-3 text-3xl">Add User</h1>
      <div className="w-1/5 mx-auto">
        <form action={addUserService}>
          <div className="relative">
            <label className="absolute left-1.5 bg-white px-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full my-3 py-2 px-3 border-1 border-slate-400 rounded-md focus:border-blue-400 focus:outline-0"
              placeholder="Enter Title..."
              type="text"
              id="name"
              name="name"
            />
            <br />
          </div>
          <div className="relative">
            <label
              className="absolute left-1.5 bg-white px-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full my-3 py-2 px-3 border-1 border-slate-400 rounded-md focus:border-blue-400 focus:outline-0"
              placeholder="Enter Body..."
              type="text"
              id="username"
              name="username"
            />
            <br />
          </div>
          <div className="relative">
            <label className="absolute left-1.5 bg-white px-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full my-3 py-2 px-3 border-1 border-slate-400 rounded-md focus:border-blue-400 focus:outline-0"
              placeholder="Enter Email..."
              type="email"
              id="email"
              name="email"
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

export default AddUser;
