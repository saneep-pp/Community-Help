import { useState, useEffect } from "react";
import axios from "axios";
import { Post, TokenType } from "../../types";

interface PostListProps {
  token: TokenType;
}

const PostList: React.FC<PostListProps> = ({ token }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [useBackend, setUseBackend] = useState<boolean>(false); // Toggle for backend/sample data

  // Sample data
  const samplePosts: Post[] = [
    {
      _id: "1",
      title: "Need School Supplies",
      description:
        "Looking for notebooks, pencils, and backpacks for underprivileged kids.",
      type: "Need",
      userId: { username: "alice" },
      createdAt: "2025-05-18T10:00:00Z",
    },
    {
      _id: "2",
      title: "Offer Free Tutoring",
      description:
        "I can teach math and science to high school students on weekends.",
      type: "Offer",
      userId: { username: "bob" },
      createdAt: "2025-05-19T14:30:00Z",
    },
    {
      _id: "3",
      title: "Need Food Donations",
      description:
        "Collecting canned goods and non-perishables for a local food bank.",
      type: "Need",
      userId: { username: "charlie" },
      createdAt: "2025-05-20T09:15:00Z",
    },
    {
      _id: "4",
      title: "Offer Used Furniture",
      description:
        "Donating a sofa and dining table in good condition. Pickup only.",
      type: "Offer",
      userId: { username: "diana" },
      createdAt: "2025-05-20T11:45:00Z",
    },
    {
      _id: "5",
      title: "Free Used Furniture",
      description:
        "Donating a sofa and dining table in good condition. Pickup only.",
      type: "Offer",
      userId: { username: "sona" },
      createdAt: "2025-05-20T11:45:00Z",
    },
  ];

  useEffect(() => {
    if (useBackend) {
      const fetchPosts = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/posts", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setPosts(response.data);
        } catch (err) {
          setError("Failed to fetch posts");
        }
      };
      fetchPosts();
    } else {
      setPosts(samplePosts);
    }
  }, [token, useBackend]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Community Posts</h2>
        <button
          onClick={() => setUseBackend(!useBackend)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {useBackend ? "Use Sample Data" : "Fetch from Backend"}
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {posts.length === 0 ? (
        <p className="text-gray-600 text-center">No posts yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post._id}
              className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                post.type === "Need"
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : "bg-green-50 border-l-4 border-green-500"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-3">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Type: {post.type}</span>
                <span>By: {post.userId.username}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
