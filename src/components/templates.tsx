import axios from "axios"
import { useState, useEffect } from "react"
import { api } from "./home"
import { Ttemplates } from "./alltypes"
import { ClipLoader } from "react-spinners";
function Templates() {
    const [templates, setTemplates] = useState<Ttemplates[]>([])
    const fetchTemplates = async () => {
        try {
            const response = await axios.get(`${api}/api/all/templates`)
            setTemplates(response.data)
        }
        catch (error) {
            console.error('failed to fetch', error)
        }
    }
    useEffect(() => {
        fetchTemplates()
    })
    return (
        <>
            <div className="bg-gray-100">
                {/* Heading */}
                <div className="text-center mt-10 mx-0">
                    <h1 className="text-3xl font-bold text-white bg-pink-600 py-5 ">
                        Templates
                    </h1>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto mx-0 sm:mx-10 md:mx-0 mt-10">
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg mb-2">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Category</th>
                                <th className="py-3 px-6 text-center">Description</th>
                                <th className="py-3 px-6 text-center">Created at</th>
                                <th className="py-3 px-6 text-center">Preview</th>
                                <th className="py-3 px-6 text-center">psd file</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="text-gray-600 text-sm font-light">
                            {templates.length > 0 ? (
                                templates.map((temp) => (
                                    <tr
                                        key={temp.id}
                                        className="border-b border-gray-200 hover:bg-gray-100"
                                    >
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {temp.Name}
                                        </td>
                                        <td className="py-3 px-6 text-left">{temp.Category}</td>
                                        <td className="py-3 px-6 text-center">{temp.Description}</td>
                                        <td className="py-3 px-6 text-center">
                                            {new Date(temp.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <img src={temp.Image_url} alt={temp.Name} className="size-20 ease-in-out" />
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <a
                                                href={temp.Psd_file}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download
                                                className="bg-pink-600 hover:bg-pink-700 text-white py-1 px-4 rounded-md transition duration-200"
                                            >
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-10">
                                        <div className="flex flex-col items-center gap-3">
                                            <ClipLoader color="#ff007f" />
                                            <p>Loading Templates...</p>
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

export default Templates
