import { api } from '../home'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
interface gall {
    id: number,
    image: string,
    link: string,
    description: string
}
const ManageGallery = () => {
    const [gallery, Fetchgallery] = useState<gall[]>([])
    const fetchgallerydata = async () => {
        await axios.get(`${api}/allgalley`)
            .then(res => Fetchgallery(res.data))
            .catch(error => console.error("error fetching gallery", error))
    }
    useEffect(() => {
        fetchgallerydata()
    }, [])
    return (
        <>
            <div className="w-full overflow-scroll  max-h-screen pl-2 pt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                      
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Link</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                gallery.length > 0 ? (gallery && gallery.map((gallerys: gall) => {
                                    return (
                                        <>
                                            <tr key={gallerys.id}>
                                                <th>{gallerys.id}</th>
                                                <td><img src={gallerys.image} alt="" /></td>
                                                <td>{gallerys.link}</td>
                                                <td>{gallerys.description}</td>
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
                                        </>
                                    )
                                })) : (
                                    <div className="flex gap-5 justify-center items-center w-full mb-2">
                                    <FadeLoader color="#EC4899" />
                                    <p>Loading gallery data...</p>
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
export default ManageGallery