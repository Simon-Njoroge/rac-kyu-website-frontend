import { useState, useEffect } from "react";
import axios from "axios";
import { Tblogs } from "./alltypes";
import { useParams } from "react-router-dom";
import { api } from "./home";

function Bloglearnmore() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState<Tblogs[]>([]);

  const fetchBlogData = async () => {
    try {
      const res = await axios.get(`${api}/api/all/blogs`);
      setBlogs(res.data);
    } catch (error) {
      console.error("Failed to load blogs data", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const blog = blogs?.find((b) => b.id === Number(id));

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {blog ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={blog?.Image}
            alt={blog?.Blog_Title}
            className="w-full h-64 object-cover rounded-md"
          />
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-white">{blog?.Blog_Title}</h1>
            <p className="mt-4 text-gray-400 text-sm">
              <strong>Published on:</strong> {new Date(blog?.Created_on).toLocaleDateString()}
            </p>
            <p className="mt-6 text-lg text-white leading-relaxed">{blog?.Content}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700 font-semibold">
          Blog not found or loading...
        </p>
      )}
    </div>
  );
}

export default Bloglearnmore;
