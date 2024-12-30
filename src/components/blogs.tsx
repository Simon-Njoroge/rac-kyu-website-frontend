import axios from 'axios';
import { useState, useEffect } from 'react';
import { api } from './home';
import { FadeLoader } from 'react-spinners';
import { Tblogs } from './alltypes';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Blogs = () => {
  const [blogs, setBlogs] = useState<Tblogs[]>([]);
  const [likes, setLikes] = useState<Record<number, number>>({});

  const fetchBlogData = async () => {
    try {
      const res = await axios.get(`${api}/api/all/blogs`);
      setBlogs(res.data);
      const initialLikes = res.data.reduce((acc: Record<number, number>, blog: Tblogs) => {
        acc[blog.id] = 0;
        return acc;
      }, {});
      setLikes(initialLikes);
    } catch (error) {
      console.error('Failed to load blogs data', error);
    }
  };

  const handleLike = (id: number) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: prevLikes[id] + 1,
    }));
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <>
      <div className='bg-gray-100'>
        {/* Heading */}
        <div>
          <p className="bg-pink-600 text-center h-20 flex items-center mt-10 mx-0 justify-center text-white font-bold text-xl shadow-md">
            Blogs
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-0 sm:mx-10 mt-10 ">
          {blogs.length > 0 ? (
            blogs.map((blog: Tblogs) => (
              <div
                key={blog.id}
                className="relative hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 bg-gray-800 mb-2  rounded-lg shadow-md p-4"
              >
                {/* Blog Image */}
                <img
                  src={blog.Image}
                  alt={blog.Blog_Title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />

                {/* Blog Content */}
                <div className="space-y-2">
                  <p className="text-sm text-white">{new Date(blog.Created_on).toLocaleDateString()}</p>
                  <p className="text-sm text-white font-medium">
                    Author: {blog.author_name}
                  </p>
                  <h1 className="text-lg font-bold text-white text-center">
                    {blog.Blog_Title.toUpperCase()}
                  </h1>
                </div>

                {/* Learn More */}
                <Link to={`/Blearnmore/${blog.id}/?query=${blog.Blog_Title}`}><p className="mt-4  text-blue-600 text-center">view blog</p>
                </Link>
                {/* Like Button */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white font-semibold rounded-md shadow hover:bg-pink-500 focus:outline-none"
                    onClick={() => handleLike(blog.id)}
                  >
                    <FaThumbsUp />
                    Like
                  </button>
                  <p className="text-white">{likes[blog.id]} Likes</p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex flex-col items-center justify-center gap-5">
              <FadeLoader color="#ff007f" />
              <p className="mt-3 text-gray-500 text-lg">Loading blogs...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
