import { useEffect, useState } from "react";
import axios from "axios";
import { api } from './home';
import { FadeLoader } from "react-spinners";
import project from '../assets/projects.jpg';

interface proj {
    id: number,
    project: string,
    image: string,
    date: string,
    description: string
}

const Projects = () => {
    const [projects, setProject] = useState<proj[]>([]);

    const fetchProjects = () => {
        axios.get(`${api}/allprojects`)
            .then(res => setProject(res.data))
            .catch(error => console.error("failed to load data",error));
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <div className="mt-20 px-4 md:px-10">
                <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
                    Projects Done
                </p>
                <img src={project} alt="" className="w-full h-96 mt-5 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 px-4 md:px-10">
                {projects.length > 0 ? (
                    projects.map((project: proj) => (
                        <div key={project.id} className="relative w-full h-auto rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt={project.project} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-center text-lg font-semibold mb-2">{project.description}</p>
                                <p className="text-center text-sm text-gray-600">{project.date}</p>
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
        </>
    );
};

export default Projects;
