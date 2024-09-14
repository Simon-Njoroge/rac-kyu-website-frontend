import { api } from '../home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

interface Gall {
  id: number;
  image: string;
  link: string;
  description: string;
}

const ManageGallery = () => {
  const [gallery, setGallery] = useState<Gall[]>([]);
  const [editGallery, setEditGallery] = useState<Gall | null>(null); // State for editing gallery

  const fetchGalleryData = async () => {
    try {
      const res = await axios.get(`${api}/allgalley`);
      setGallery(res.data);
    } catch (error) {
      console.error("error fetching gallery", error);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const handleGdelete = async (id: number) => {
    try {
      await axios.delete(`${api}/deletegallery/${id}`);
      setGallery(prevGallery => prevGallery.filter(galleryItem => galleryItem.id !== id));
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Failed to delete gallery", error);
      toast.error("Failed to delete!!!");
    }
  };

  const handleEdit = (galleryItem: Gall) => {
    setEditGallery(galleryItem); // Set the gallery item to be edited
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editGallery) {
      try {
        await axios.put(`${api}/updategallery/${editGallery.id}`, editGallery);
        setGallery(prevGallery =>
          prevGallery.map(galleryItem =>
            galleryItem.id === editGallery.id ? editGallery : galleryItem
          )
        );
        toast.success("Updated successfully");
        setEditGallery(null); // Close the form after updating
      } catch (error) {
        console.error("Failed to update gallery", error);
        toast.error("Failed to update!!!");
      }
    }
  };

  return (
    <>
      <div className="w-full pl-2 pt-5 max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Link</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {gallery.length > 0 ? (
                gallery.map((galleryItem: Gall) => (
                  <tr key={galleryItem.id} className="border-t">
                    <th className="px-4 py-2">{galleryItem.id}</th>
                    <td className="px-4 py-2">
                      <img src={galleryItem.image} alt="" className="w-12 h-12 object-cover rounded-md" />
                    </td>
                    <td className="px-4 py-2 max-w-96 max-h-96 flex-wrap flex">{galleryItem.link}</td>
                    <td className="px-4 py-2">{galleryItem.description}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(galleryItem)}
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleGdelete(galleryItem.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    <div className="flex gap-5 justify-center items-center w-full mb-2">
                      <FadeLoader color="#EC4899" />
                      <p>Loading gallery data...</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Update Form */}
        {editGallery && (
          <div className="mt-5 p-6 bg-gray-100 rounded-md max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Update Gallery</h3>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  value={editGallery.image}
                  onChange={e => setEditGallery({ ...editGallery, image: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Link</label>
                <input
                  type="text"
                  value={editGallery.link}
                  onChange={e => setEditGallery({ ...editGallery, link: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={editGallery.description}
                  onChange={e => setEditGallery({ ...editGallery, description: e.target.value })}
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
                  onClick={() => setEditGallery(null)} // Close the form without saving
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

export default ManageGallery;
