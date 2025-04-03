import BackButton from "@/components/BackButton";
export const revalidate = 0;
const getUserDetails = async (userId) => {
  const res = await fetch(`http://localhost:4000/users/${userId}`);
  const user = await res.json();
  return user;
};
const UserId = async ({ params }) => {
  const user = await getUserDetails(params.userId);
  return (
    <section className="mt-5">
      <BackButton />
      <h1 className="text-3xl my-3">UserID : {params.userId}</h1>
      <h1 className="text-2xl my-3">User Name : {user.name}</h1>
      <h1 className="text-2xl my-3">User Email : {user.email}</h1>
      <h1 className="text-lg my-3">Username : {user.username}</h1>
    </section>
  );
};
export default UserId;
