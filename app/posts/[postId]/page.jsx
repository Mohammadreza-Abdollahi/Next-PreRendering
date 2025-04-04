import BackButton from "@/components/BackButton";
export const revalidate = 43200;// 12 Hour...
const getPostDetails = async (postId) => {
  const res = await fetch(`http://localhost:4000/posts/${postId}`);
  const post = await res.json();
  return post;
};
export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:4000/posts`);
  const posts = await res.json();
  return posts.map((post) => ({
    postId: String(post.id), 
  }));
};
const PostId = async ({ params }) => {
  const post = await getPostDetails(params.postId);
  return (
    <section className="mt-5">
      <BackButton />
      <h1 className="text-3xl my-3">PostID : {params.postId}</h1>
      <h1 className="text-2xl my-3">Post Title : {post.title}</h1>
      <h1 className="text-lg my-3">PostID : {post.body}</h1>
    </section>
  );
};
export default PostId;
