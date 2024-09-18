import { api } from '../home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

interface GalleryItem {
  id: number;
  image: string;
  link: string;
  description: string;
}

const ManageGallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [editGalleryItem, setEditGalleryItem] = useState<GalleryItem | null>(null); // State to handle the gallery item being edited
  const [newGalleryItem, setNewGalleryItem] = useState<GalleryItem | null>(null); // State for handling adding a new gallery item

  const fetchGalleryData = async () => {
    try {
      const res = await axios.get(`${api}/allgalley`);
      setGalleryItems(res.data);
    } catch (error) {
      console.error("Failed to fetch gallery", error);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);
console.log(galleryItems)
  const handleDeleteGalleryItem = async (id: number) => {
    try {
      await axios.delete(`${api}/deletegallery/${id}`);
      setGalleryItems(prevGalleryItems => prevGalleryItems.filter(item => item.id !== id));
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Failed to delete gallery item", error);
      toast.error("Failed to delete!!!");
    }
  };

  const handleEditGalleryItem = (item: GalleryItem) => {
    setEditGalleryItem(item); // Set the gallery item to be edited
  };

  const handleUpdateGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editGalleryItem) {
      try {
        await axios.put(`${api}/updategallery/${editGalleryItem.id}`, editGalleryItem);
        setGalleryItems(prevGalleryItems =>
          prevGalleryItems.map(item => (item.id === editGalleryItem.id ? editGalleryItem : item))
        );
        toast.success("Updated successfully");
        setEditGalleryItem(null); // Close the form after updating
      } catch (error) {
        console.error("Failed to update gallery item", error);
        toast.error("Failed to update!!!");
      }
    }
  };

  const handleAddGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newGalleryItem) {
      try {
        const res = await axios.post(`${api}/addgallery`, newGalleryItem);
        setGalleryItems([...galleryItems, res.data]); // Add new gallery item to the list
        toast.success("Added successfully");
        setNewGalleryItem(null); // Close the form after adding
      } catch (error) {
        console.error("Failed to add gallery item", error);
        toast.error("Failed to add!!!");
      }
    }
  };

  return (
    <>
      <div className="w-full pl-2 pt-5 max-w-7xl mx-auto">
        <button
          onClick={() => setNewGalleryItem({ id: 0, image: '', link: '', description: '' })}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add New Gallery Item
        </button>
        <div className="overflow-x-auto mt-4">
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
              {galleryItems.length > 0 ? (
                galleryItems.map(item => (
                  <tr key={item.id} className="border-t">
                    <th className="px-4 py-2">{item.id}</th>
                    <td className="px-4 py-2">
                      <img src={item.image} alt="" className="w-12 h-12 object-cover rounded-md" />
                    </td>
                    <td className="px-4 py-2">{item.link}</td>
                    <td className="px-4 py-2">{item.description}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEditGalleryItem(item)}
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteGalleryItem(item.id)}
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
        {editGalleryItem && (
          <div className="mt-5 p-6 bg-gray-100 rounded-md max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Update Gallery</h3>
            <form onSubmit={handleUpdateGalleryItem}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  value={editGalleryItem.image}
                  onChange={e => setEditGalleryItem({ ...editGalleryItem, image: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Link</label>
                <input
                  type="text"
                  value={editGalleryItem.link}
                  onChange={e => setEditGalleryItem({ ...editGalleryItem, link: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={editGalleryItem.description}
                  onChange={e => setEditGalleryItem({ ...editGalleryItem, description: e.target.value })}
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
                  onClick={() => setEditGalleryItem(null)} // Close the form without saving
                  className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Add Form */}
        {newGalleryItem && (
          <div className="mt-5 p-6 bg-gray-100 rounded-md max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Add New Gallery Item</h3>
            <form onSubmit={handleAddGalleryItem}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  value={newGalleryItem.image}
                  onChange={e => setNewGalleryItem({ ...newGalleryItem, image: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Link</label>
                <input
                  type="text"
                  value={newGalleryItem.link}
                  onChange={e => setNewGalleryItem({ ...newGalleryItem, link: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newGalleryItem.description}
                  onChange={e => setNewGalleryItem({ ...newGalleryItem, description: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setNewGalleryItem(null)} // Close the form without adding
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
