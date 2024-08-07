import { useEffect, useState } from "react";
import axios from "axios";
import { api } from './home';

const Projects = () => {
    const [projects, setProject] = useState<string[] | undefined>([]);
    
    const fetchProjects = () => {
        axios.get(`${api}/allprojects`)
            .then(res => setProject(res.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <div className="mt-10 px-4 md:px-10">
                <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
                    Projects Done
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 px-4 md:px-10">
                {
                    projects && projects.map((project: any) => (
                        <div key={project.id} className="relative w-full h-60 group overflow-hidden rounded-md shadow-md transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt="" className="w-full h-48 object-cover" />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-center text-lg font-semibold mb-2">{project.description}</p>
                                <p className="text-center text-sm">{project.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Projects;
