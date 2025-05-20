import { useState } from "react";
import axios from "axios";

interface PostFormProps {
  token: string;
}

const PostForm: React.FC<PostFormProps> = ({ token }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<"Need" | "Offer">("Need");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/posts",
        { title, description, type },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setDescription("");
      setType("Need");
      window.location.reload();
    } catch (err) {
      setError("Failed to create post");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-2xl mb-8 mt-8">
      <h2 className="text-xl font-bold mb-4">Create Post</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "Need" | "Offer")}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="Need">Need</option>
          <option value="Offer">Offer</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
