import axios from 'axios';
import { api } from '../home';
import { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface proj {
    id: number;
    project: string;
    date: string;
    description: string;
}

const Manageprojects = () => {
    const [projects, setProjects] = useState<proj[]>([]);
    const [editProject, setEditProject] = useState<proj | null>(null); // State for editing project

    const fetchProjectData = async () => {
        try {
            const res = await axios.get(`${api}/allprojects`);
            setProjects(res.data);
        } catch (error) {
            console.log("Failed fetching the projects", error);
        }
    };

    useEffect(() => {
        fetchProjectData();
    }, []);

    const handlePrdelete = async (id: number) => {
        try {
            await axios.delete(`${api}/deleteproject/${id}`);
            setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
            toast.success("Deleted successfully", {
                position: "top-right",
                theme: "colored",
            });
        } catch (error) {
            console.error("Failed to delete project", error);
        }
    };

    const handleEdit = (project: proj) => {
        setEditProject(project); // Set the project to be edited
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editProject) {
            try {
                await axios.put(`${api}/updateproject/${editProject.id}`, editProject);
                setProjects(prevProjects =>
                    prevProjects.map(project =>
                        project.id === editProject.id ? editProject : project
                    )
                );
                toast.success("Updated successfully", {
                    position: "top-right",
                    theme: "colored",
                });
                setEditProject(null); // Close the form after updating
            } catch (error) {
                console.error("Failed to update project", error);
                toast.error("Failed to update!!!");
            }
        }
    };

    return (
        <>
            <div className="w-full overflowy-y-scroll max-h-screen pl-2 pt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Project</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length > 0 ? (
                                projects.map((project: proj) => (
                                    <tr key={project.id}>
                                        <th>{project.id}</th>
                                        <td>{project.project}</td>
                                        <td>{project.date}</td>
                                        <td>{project.description}</td>
                                        <td>
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={() => handleEdit(project)}
                                            >
                                                <FaEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => handlePrdelete(project.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div className="flex gap-5 justify-center items-center w-full mb-2">
                                    <FadeLoader color="#EC4899" />
                                    <p>Loading projects data...</p>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Update Form */}
                {editProject && (
                    <div className="mt-5 p-4 bg-gray-100 rounded-md">
                        <h3 className="text-xl font-bold mb-3">Update Project</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                                <input
                                    type="text"
                                    value={editProject.project}
                                    onChange={e => setEditProject({ ...editProject, project: e.target.value })}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    value={editProject.date}
                                    onChange={e => setEditProject({ ...editProject, date: e.target.value })}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={editProject.description}
                                    onChange={e => setEditProject({ ...editProject, description: e.target.value })}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Update
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditProject(null)} // Close the form without saving
                                    className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                <ToastContainer />
            </div>
        </>
    );
};

export default Manageprojects;
