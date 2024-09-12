import axios from 'axios'
import { api } from '../home'
import { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
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
                                                    <button className="text-red-500 hover:text-red-700">
                                                        <FaTrash />
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