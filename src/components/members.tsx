import { ClipLoader } from "react-spinners";
import axios from "axios";
import { Tmembers } from "./alltypes";
import { useState, useEffect } from "react";
import { api } from "./home";
const Members = () => {
    const [members, setMembers] = useState<Tmembers[]>([])
    const fetchMembers = async () => {
        try {
            const response = await axios.get(`${api}/api/all/members`)
            setMembers(response.data)
        }
        catch (error) {
            console.error('failed to fetch', error)
        }
    }
    useEffect(() => {
        fetchMembers()
    })
    return (
        <>
            <div className="bg-gray-100">
                {/* Heading */}
                <div>
                    <p className="bg-pink-600 text-center h-20 flex items-center justify-center md:mx-0 text-white font-bold text-xl mt-10 mx-0">
                        Members
                    </p>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto mx-0 sm:mx-10 md:mx-0 mt-10">
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg mb-2">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Course</th>
                                <th className="py-3 px-6 text-center">Year</th>
                                {/* <th className="py-3 px-6 text-center">Email</th>
                                <th className="py-3 px-6 text-center">Phone</th> */}
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="text-gray-600 text-sm font-light">
                            {members.length > 0 ? (
                                members.map((member) => (
                                    <tr
                                        key={member.id}
                                        className="border-b border-gray-200 hover:bg-gray-100"
                                    >
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {member.name}
                                        </td>
                                        <td className="py-3 px-6 text-left">{member.course}</td>
                                        <td className="py-3 px-6 text-center">{member.year}</td>
                                        {/* <td className="py-3 px-6 text-center">
                                            {member.email}
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            {member.Phone}
                                        </td> */}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-10">
                                        <div className="flex flex-col items-center gap-3">
                                            <ClipLoader color="#ff007f" />
                                            <p>Loading Members...</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Members