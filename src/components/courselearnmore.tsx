import axios from "axios";
import { useEffect, useState } from "react";
import { Tourcourses } from "./alltypes";
import { api } from "./home";
import { useParams } from "react-router-dom";

function Courselearnmore() {
    const { id } = useParams();
    const [courses, setCourses] = useState<Tourcourses[]>([]);

    const fetchCourses = () => {
        axios
            .get(`${api}/api/all/ourcourses`)
            .then((res) => setCourses(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const course = courses?.find((c) => c.id === Number(id));

    return (
        <div className="mt-10 mx-4 md:mx-10 mb-2 bg-gray-100">
            {/* Course Image */}
            <div className="flex justify-center">
                <img
                    src={course?.Course_Image}
                    alt={course?.Course_Name}
                    className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
                />
            </div>

            {/* Course Details */}
            <div className="mt-6 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{course?.Course_Name}</h1>
                <p className="mt-4 text-lg text-gray-600">{course?.Course_Description}</p>
            </div>

            {/* Responsive Layout for Course Information */}
            <div className="mt-10 md:grid md:grid-cols-2 md:gap-12">
                {/* Course Image */}
                <div className="mb-6 md:mb-0">
                    <img
                        src={course?.Course_Image}
                        alt={course?.Course_Name}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Description */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800">About the Course</h2>
                    <p className="text-lg text-gray-600">{course?.Course_Description}</p>
                </div>
            </div>
        </div>
    );
}

export default Courselearnmore;
