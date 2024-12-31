import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Eye, BicepsFlexed, Activity } from 'lucide-react';
import joinus from '../assets/join_us_today.avif';
export const api = 'https://rackyu-django-server.onrender.com';
import { FadeLoader } from "react-spinners";
import { Tslider,Tourcourses } from "./alltypes";
import area from '../assets/seven area of focus grey.png'
const Home = () => {
  const [homepics, setHomepics] = useState<Tslider[]>([]);
  const [courses, setOurcouses] = useState<Tourcourses[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState(true); 

  const FetchHomepics = async () => {
    try {
      const response = await axios.get(`${api}/api/all/sliders`);
      setHomepics(response.data);
      setLoading(false); 
      console.log('hello')
    } catch (error) {
      console.log(error);
      setLoading(false); 
    }
  };

  const fetchOurcouses = async () => {
    try {
      const res = await axios.get(`${api}/api/all/ourcourses`);
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
      <div className="relative overflow-hidden w-full h-screen">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <FadeLoader color="#ff007f" />
          </div>
        ) : (
          <>
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {homepics.map((pics: any, index: number) => (
                <div key={index} className="w-full flex-shrink-0">
                <div className="relative w-full h-screen">
                  <img
                    src={pics.Image}
                    alt="sliding pictures"
                    className="w-full h-full object-cover"
                  />
                  {/* Centered Title and Description */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center px-4">
                    <h1 className="text-4xl font-bold mb-4 text-pink-600">{pics.Title}</h1>
                    <p className="text-lg">{pics.Description}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <button
              onClick={handlePrevClick}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextClick}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1"
            >
              &#8594;
            </button>
          </>
        )}
      </div>

      {/* Who we are */}
      <div className="mt-20 text-black">
        <h1 className="text-center font-bold text-2xl">Who We Are</h1>
        <p>
          Rotaract Club of Kirinyaga University was Chartered 10 years ago and continues to grow its membership. Our main goal being to execute Rotary International’s objectives in our world’s most persistent issues.
        </p>
        <p className="text-center mt-10">
          <a href="/our-history">
            <span className="text-center rounded-md text-blue-600 border-2 border-orange-500 p-1 text-xl hover:bg-pink-600 hover:text-white">
              Learn more
            </span>
          </a>
        </p>
      </div>

      {/* Our Mission, Vision, and Motto */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11 w-full text-center text-white bg-gray-800 p-2 rounded">
        <div className="vision">
          <div className="border-2 border-pink-600 rounded-full p-2 inline-block">
            <Eye />
          </div>
          <h1 className="text-pink-600 text-xl">Our Vision</h1>
          <p>
            “Together, we see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves.”
          </p>
        </div>
        <div className="mission">
          <div className="border-2 border-pink-600 rounded-full p-2 inline-block">
            <BicepsFlexed />
          </div>
          <h1 className="text-pink-600 text-xl">Our Mission</h1>
          <p>
            The mission of Rotary International is to provide service to others, promote integrity, and advance world understanding, goodwill, and peace through its fellowship of business, professional, and community leaders.
          </p>
        </div>
        <div className="motto">
          <div className="border-2 border-pink-600 rounded-full p-2 inline-block">
            <Activity />
          </div>
          <h1 className="text-pink-600 text-xl">Our Motto</h1>
          <p>Service Above Self</p>
        </div>
      </div>

      {/* Our Courses */}
      <div>
        <h1 className="text-center mt-10 font-bold text-2xl text-pink-600">Our Courses</h1>
        <img src={area} alt=""  className="mt-10 rounded"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5 rounded-md text-white ">
        {courses.length > 0 ? (
          courses.map((course: any) => (
            <div key={course.id} className="cursor-pointer text-center relative bg-gray-800 rounded-md hover:bottom-2 hover:shadow-xl hover:shadow-black">
              <img src={course.Course_Image} alt="" className="h-48 w-full rounded" />
              <h1 className="text-center my-5 font-bold text-2xl">{course.Course_Name}</h1>
              {/* <p>{course.description}</p> */}
              <Link to={`/Clearnmore/${course.id}/?query=${course.Course_Name}`}><button className="text-pink-600 hover:underline mb-2  cursor-pointer">Learnmore</button></Link>
            </div>
          ))
        ) : (
          <div className="flex w-full justify-center items-center gap-5 h-3/4">
          <FadeLoader color="#ff007f" />
          <br />
          <p>Please wait...</p>
        </div>
        )}
      </div>

      {/* Join Us Today */}
      <div className="mt-10 relative rounded">
        <img src={joinus} alt="" className="w-full h-56 rounded" />
        <a href="/en-us/join-us"><button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-md border-orange-600 bg-pink-600 text-white px-4 py-2 hover:bg-transparent hover:border-pink-600">
          Join Us Today
        </button></a>
      </div>
    </>
  );
};

export default Home;
