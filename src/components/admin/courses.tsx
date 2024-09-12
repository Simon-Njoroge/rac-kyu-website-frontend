import { api } from '../home'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
interface Tcourses {
    id: number,
    area: string,
    picture: string,
    description: string
}
const Managecourses = () => {
    const [courses, Fetchcourses] = useState<Tcourses[]>([])
    const fetchcoursesdata = async () => {
        await axios.get(`${api}/allareas`)
            .then(res => Fetchcourses(res.data))
            .catch(error => console.log("failed to load our courses", error))
    }
    useEffect(() => {
        fetchcoursesdata()
    }, [])
    return (
        <>
            <div className="w-full overflowy-y-scroll max-h-screen pl-2 pt-5">
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
                            {
                                courses.length > 0 ? (
                                    courses && courses.map((Dcourse:Tcourses) => {
                                        return (<>
                                            <tr key={Dcourse.id}>
                                                <th>{Dcourse.id}</th>
                                                <td>{Dcourse.area}</td>
                                                <td><img src={Dcourse.picture} alt="" className='w-12 h-12' /></td>
                                                <td>{Dcourse.description}</td>
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
                                    <p>Loading courses data...</p>
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
export default Managecourses