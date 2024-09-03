import axios from "axios";
import { api } from './home';
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
interface cour{
    id:number,
    area:string,
    picture:string,
    description:string
    image:string
}
const Courses = () => {
    const [courses, setCourses] = useState<cour[] >([]);
    
    const fetchCourses = () => {
        axios.get(`${api}/allareas`)
            .then(res => setCourses(res.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <>
            <div className="mt-10 px-4 md:px-10">
                <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
                    The Seven Areas Of Focus
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 px-4 md:px-10">
                {
                   
                   courses.length>0?( courses && courses.map((course: cour) => (
                        <div key={course.id} className="relative cursor-pointer text-center hover:bottom-2 hover:shadow-xl hover:shadow-black transition-transform duration-300">
                            <img src={course.image} alt="" className="h-48 w-full rounded-md object-cover" />
                            <h1 className="text-center my-4 font-bold text-xl md:text-2xl">{course.area}</h1>
                            <p className="text-sm md:text-base">{course.description}</p>
                            <button className="text-blue-500 mt-4 cursor-pointer text-sm md:text-base">Learn more</button>
                        </div>
                    ))):(
                        <div className="flex justify-center items-center w-full gap-5">
                            <FadeLoader  color="#ff007f" />
                            <p>loading our courses...</p>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Courses;
