import axios from "axios";
import { api } from './home';
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import areas from '../assets/seven area of focus grey.png';
import { Tourcourses } from "./alltypes";
import { Link } from "react-router-dom";

const Courses = () => {
    const [courses, setCourses] = useState<Tourcourses[]>([]);

    const fetchCourses = () => {
        axios.get(`${api}/api/all/ourcourses`)
            .then(res => setCourses(res.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <>
            <div className="bg-gray-100">
                <div className="mt-10 px-0 md:px-0">
                    <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl md:text-2xl">
                        The Seven Areas Of Focus
                    </p>
                    <img src={areas} alt="Seven Areas of Focus" className="mt-5 mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-0 ">
                    {
                        courses.length > 0 ? (
                            courses.map((course: Tourcourses) => (
                                <div key={course.id} className="relative bg-gray-800 mb-2 cursor-pointer text-center hover:scale-105 hover:shadow-2xl hover:shadow-black transition-all duration-300 rounded-lg overflow-hidden">
                                    <img src={course.Course_Image} alt={course.Course_Name} className="h-48 w-full object-cover" />
                                    <div className="p-4">
                                        <h1 className="text-lg md:text-xl font-semibold text-white mb-3">{course.Course_Name}</h1>
                                        <Link to={`/Clearnmore/${course.id}/?query=${course.Course_Name}`}>
                                            <button className="text-blue-500 hover:underline text-sm md:text-base mt-4">Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full gap-5">
                                <FadeLoader color="#ff007f" />
                                <p className="text-gray-600">Loading our courses...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;
