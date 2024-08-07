import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Eye, BicepsFlexed, Activity } from 'lucide-react';
import joinus from '../assets/join_us_today.avif';

export const api = 'https://rac-kyu-backend.onrender.com';

const Home = () => {
  const [homepics, setHomepics] = useState<string[]>([]);
  const [courses, setOurcouses] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const FetchHomepics = async () => {
    try {
      const res = await axios.get(`${api}/allhomepic`);
      setHomepics(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOurcouses = async () => {
    try {
      const res = await axios.get(`${api}/allareas`);
      setOurcouses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchHomepics();
    fetchOurcouses();
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === homepics.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, homepics]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? homepics.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === homepics.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Image Slider */}
      <div className="relative overflow-hidden w-full h-screen">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {homepics.map((pics: any, index: number) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={pics.picture}
                alt="sliding pictures"
                className="w-full h-screen object-cover"
              />
              <p className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-4">
                {pics.description}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-gray-700"
        >
          &#8592;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-gray-700"
        >
          &#8594;
        </button>
      </div>

      {/* Who We Are */}
      <div className="mt-20 px-4 md:px-10">
        <h1 className="text-center font-bold text-2xl md:text-3xl">Who We Are</h1>
        <p className="mt-4 text-center">
          Rotaract Club of Kirinyaga University was Chartered 10 years ago and continues to grow its membership. Our main goal is to execute Rotary International’s objectives in our world’s most persistent issues.
        </p>
        <p className="text-center mt-10">
          <Link to="/our-history">
            <a className="inline-block text-blue-600 border-2 border-orange-500 p-2 rounded-md text-xl hover:bg-pink-600 hover:text-white transition-all">Learn More</a>
          </Link>
        </p>
      </div>

      {/* Vision, Mission, and Motto */}
      <div className="mt-20 px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="border-2 border-pink-600 rounded-full p-4 inline-block">
            <Eye />
          </div>
          <h1 className="text-pink-600 text-xl mt-4">Our Vision</h1>
          <p className="mt-2">“Together, we see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves.”</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-pink-600 rounded-full p-4 inline-block">
            <BicepsFlexed />
          </div>
          <h1 className="text-pink-600 text-xl mt-4">Our Mission</h1>
          <p className="mt-2">The mission of Rotary International is to provide service to others, promote integrity, and advance world understanding, goodwill, and peace through its fellowship of business, professional, and community leaders.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-2 border-pink-600 rounded-full p-4 inline-block">
            <Activity />
          </div>
          <h1 className="text-pink-600 text-xl mt-4">Our Motto</h1>
          <p className="mt-2">Service Above Self</p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="mt-10 px-4 md:px-10">
        <h1 className="text-center font-bold text-2xl text-pink-600">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {courses && courses.map((course: any) => (
            <div key={course.id} className="cursor-pointer text-center relative hover:bottom-2 hover:shadow-xl hover:shadow-black transition-all">
              <img src={course.image} alt="" className="h-48 w-full rounded-md object-cover" />
              <h1 className="my-5 font-bold text-xl">{course.area}</h1>
              <p>{course.description}</p>
              <button className="text-blue-500 mt-4">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us */}
      <div className="mt-10 relative">
        <img src={joinus} alt="Join Us Today" className="w-full h-56 object-cover" />
        <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-md border-orange-600 bg-pink-600 text-white px-4 py-2 hover:bg-transparent hover:border-pink-600 transition-all">
          Join Us Today
        </button>
      </div>
    </>
  );
};

export default Home;
