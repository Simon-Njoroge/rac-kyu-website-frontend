import axios from 'axios'
import { api } from '../home'
import { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface proj {
    id: number,
    project: string,
    date: string,
    description: string
}
const Manageprojects = () => {
    const [projects, Fetchprojects] = useState<proj[]>([])
    const fetchporjectdata = async () => {
        await axios.get(`${api}/allprojects`)
            .then(res => Fetchprojects(res.data))
            .catch(error => console.log("failed fetchng the projects", error))
    }
    useEffect(() => {
        fetchporjectdata()
    }, [])
    // console.log(projects)
    const handlePrdelete = async (id: number) => {
        try {
            toast.success("Deleted successfully", {
                position: "top-right",
                theme: "colored"
            });
            axios.delete(`${api}/deleteproject/${id}`)
            Fetchprojects(prevproj => prevproj.filter(project => project.id !== id));
            toast.success("Deleted successfully", {
                position: "top-right",
                theme: "colored"
            });
        }
        catch (error) {
            console.error("failed to delete project", error)
        }
    }
    return (
        <>
        
            <div className="w-full overflowy-y-scroll max-h-screen pl-2 pt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
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
                            {
                                projects.length > 0 ? (
                                    projects && projects.map((project: proj) => {
                                        return (<>

                                            <tr key={project.id}>
                                                <th>{project.id}</th>
                                                <td>{project.project}</td>
                                                <td>{project.date}</td>
                                                <td>{project.description}</td>
                                                <td>
                                                    <button className="text-blue-500 hover:text-blue-700">
                                                        <FaEdit />

                                                    </button>
                                                </td>
                                                <td>
                                                    <button className="text-red-500 hover:text-red-700" onClick={() => handlePrdelete(project.id)}>
                                                        <FaTrash />
                                                        <ToastContainer
                                                            position="top-right"
                                                            autoClose={5000}
                                                            hideProgressBar={false}
                                                            newestOnTop={false}
                                                            closeOnClick
                                                            rtl={false}
                                                            pauseOnFocusLoss
                                                            draggable
                                                            pauseOnHover
                                                            theme="light"

                                                        />
                                                        {/* Same as */}
                                                        <ToastContainer />

                                                    </button>
                                                </td>
                                            </tr>
                                        </>)
                                    })
                                ) : (
                                    <div className="flex gap-5 justify-center items-center w-full mb-2">
                                        <FadeLoader color="#EC4899" />
                                        <p>Loading projects data...</p>
                                    </div>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Manageprojects