import { api } from '../home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
import { ToastContainer,toast } from 'react-toastify';
interface Tcourses {
    id: number;
    area: string;
    picture: string;
    description: string;
}

const Managecourses = () => {
    const [courses, setCourses] = useState<Tcourses[]>([]);
    const [editCourse, setEditCourse] = useState<Tcourses | null>(null); // State to handle the course being edited

    const fetchcoursesdata = async () => {
        try {
            const res = await axios.get(`${api}/allareas`);
            setCourses(res.data);
        } catch (error) {
            console.error("failed to load our courses", error);
        }
    };

    useEffect(() => {
        fetchcoursesdata();
    }, []);

    const handleCdelete = async (id: number) => {
        try {
            await axios.delete(`${api}/deletearea/${id}`);
            setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
            toast.success("deleted successfully")
        } catch (error) {
            console.error("failed to delete course", error);
            toast.error("failed to delete!!!")
        }
    };

    const handleEdit = (course: Tcourses) => {
        setEditCourse(course); // Set the course to be edited
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editCourse) {
            try {
                await axios.put(`${api}/updatearea/${editCourse.id}`, editCourse);
                setCourses(prevCourses => 
                    prevCourses.map(course => course.id === editCourse.id ? editCourse : course)
                );
                toast.success("updated successfully")
                setEditCourse(null); 
            } catch (error) {
                console.error("Failed to update course", error);
                toast.error("failed to update!!!")
            }
        }
    };

    return (
        <>
            <div className="w-full overflow-y-scroll max-h-screen pl-2 pt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Area</th>
                                <th>Picture</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.length > 0 ? (
                                courses.map((course: Tcourses) => (
                                    <tr key={course.id}>
                                        <th>{course.id}</th>
                                        <td>{course.area}</td>
                                        <td><img src={course.picture} alt="" className="w-12 h-12" /></td>
                                        <td>{course.description}</td>
                                        <td>
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={() => handleEdit(course)}
                                            >
                                                <FaEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => handleCdelete(course.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div className="flex gap-5 justify-center items-center w-full mb-2">
                                    <FadeLoader color="#EC4899" />
                                    <p>Loading courses data...</p>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Update Form */}
                {editCourse && (
                    <div className="mt-5 p-4 bg-gray-100 rounded-md">
                        <h3 className="text-xl font-bold mb-3">Update Course</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Area</label>
                                <input
                                    type="text"
                                    value={editCourse.area}
                                    onChange={e => setEditCourse({ ...editCourse, area: e.target.value })}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Picture URL</label>
                                <input
                                    type="text"
                                    value={editCourse.picture}
                                    onChange={e => setEditCourse({ ...editCourse, picture: e.target.value })}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={editCourse.description}
                                    onChange={e => setEditCourse({ ...editCourse, description: e.target.value })}
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
                                    onClick={() => setEditCourse(null)} // Close the form without saving
                                    className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                <ToastContainer/>
            </div>
        </>
    );
};

export default Managecourses;
