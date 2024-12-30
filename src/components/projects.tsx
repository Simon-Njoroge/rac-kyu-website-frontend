import { useEffect, useState } from "react";
import axios from "axios";
import { api } from './home';
import { FadeLoader } from "react-spinners";
import project from '../assets/projects.jpg';
import { Tproject } from "./alltypes";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProject] = useState<Tproject[]>([]);

    const fetchProjects = () => {
        axios.get(`${api}/api/all/projects`)
            .then(res => setProject(res.data))
            .catch(error => console.error("failed to load data", error));
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <div className="bg-gray-100">
                <div className="mt-10 ">
                    <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
                        Projects Done
                    </p>
                    <img src={project} alt="" className="w-full h-96 mt-5 rounded" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 px-0 md:px-0">
                    {projects.length > 0 ? (
                        projects.map((project: Tproject) => (
                            <div key={project.id} className="relative bg-gray-800 w-full h-auto rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                                <img src={project.Project_Image} alt='' className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <p className="text-center text-lg font-semibold mb-2 text-white">{project.Project_Name}</p>
                                    <p className="text-center text-sm text-gray-600">{new Date(project.End_Date).toLocaleDateString()}</p>
                                    <Link to={`/Pjlearnmore/${project.id}/?query=${project.Project_Name}`}> <p className="text-center text-sm text-blue-500" >learnmore</p></Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex gap-5 justify-center items-center w-full">
                            <FadeLoader color="#ff007f" />
                            <p>loading projects...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Projects;
