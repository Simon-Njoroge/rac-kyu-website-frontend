import axios from 'axios';
import { useState, useEffect } from 'react';
import { api } from './home';
import { FadeLoader } from 'react-spinners';

interface Tblog {
  id: number;
  title: string;
  image: string;
  descrition: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Tblog[]>([]);

  const Handleblogdata = async () => {
    try {
      const res = await axios.get(`${api}/allblogs`);
      setBlogs(res.data);
    } catch (error) {
      console.error('failed to load blogs data', error);
    }
  };

  useEffect(() => {
    Handleblogdata();
  }, []);

  console.log(blogs);

  return (
    <>
      <div>
        <p className="bg-pink-600 text-center h-20 flex items-center mt-20 mx-10 justify-center text-white font-bold text-xl">
          Blogs
        </p>
      </div>

      {/* Grid layout for blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 sm:mx-10 mt-10">
        {blogs.length > 0 ? (
          blogs.map((blog: Tblog) => {
            return (
              <div
                key={blog.id}
                className="cursor-pointer relative hover:-top-5 hover:shadow-md hover:shadow-black rounded-md hover:ease-in-out p-4 bg-white"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h1 className="my-5 text-center font-bold text-lg">
                  {blog.title.toUpperCase()}
                </h1>
                <p className="p-2 text-justify">{blog.descrition}</p>
              </div>
            );
          })
        ) : (
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <FadeLoader color="#ff007f" />
            <p className="mt-3">Loading blogs...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
