import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, {
    next: { revalidate: 3600 },
  });
  const posts: Iposts[] = await response.json();

  return (
    <>
      {/* Date and Header */}
      <p className="text-right text-gray-500">{new Date().toLocaleTimeString()}</p>
      <h1 className="text-3xl font-bold text-fuchsia-500 text-center mb-8">POSTINGAN PAGE</h1>

      {/* Updated Table View */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6 mt-10">Table View</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-fuchsia-500 text-white">
              <th className="py-2 px-4 text-left">User ID</th>
              <th className="py-2 px-4 text-left">Post ID</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Body</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 text-gray-700">{post.userId}</td>
                <td className="py-2 px-4 text-gray-700">{post.id}</td>
                <td className="py-2 px-4 text-gray-700">{post.title.slice(0, 30)}...</td>
                <td className="py-2 px-4 text-gray-700">{post.body.slice(0, 50)}...</td>
                <td className="py-2 px-4">
                  <ViewUserButton userId={post.userId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Posts;