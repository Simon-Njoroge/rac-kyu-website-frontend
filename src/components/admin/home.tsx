import { api } from '../home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';

interface Home {
  id: number;
  picture: string;
  description: string;
}

const Managehome = () => {
  const [home, setHome] = useState<Home[]>([]);
  const [loading, setLoading] = useState(true);
  const [editHome, setEditHome] = useState<Home | null>(null); // State for editing home item

  const fetchHomeData = async () => {
    try {
      const res = await axios.get(`${api}/allhomepic`);
      setHome(res.data);
    } catch (error) {
      console.error("Failed to load home", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${api}/deletehomepic/${id}`);
      setHome(prevHome => prevHome.filter(hom => hom.id !== id));
    } catch (error) {
      console.error("Failed to delete home", error);
    }
  };

  const handleEdit = (hom: Home) => {
    setEditHome(hom); // Set the home item to be edited
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editHome) {
      try {
        await axios.put(`${api}/updatehomepic/${editHome.id}`, editHome);
        setHome(prevHome =>
          prevHome.map(hom => (hom.id === editHome.id ? editHome : hom))
        );
        setEditHome(null); // Close the form after updating
      } catch (error) {
        console.error("Failed to update home", error);
      }
    }
  };

  return (
    <div className="w-full overflow-x-auto pl-2 pt-5 max-h-screen">
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Picture</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center">
                  <div className="flex gap-5 justify-center items-center w-full mb-2">
                    <FadeLoader color="#EC4899" />
                    <p>Loading home data...</p>
                  </div>
                </td>
              </tr>
            ) : (
              home.length > 0 ? (
                home.map(hom => (
                  <tr key={hom.id}>
                    <td>{hom.id}</td>
                    <td>
                      <img src={hom.picture} alt="Home" className="w-20 h-20 object-cover rounded-md" />
                    </td>
                    <td>{hom.description}</td>
                    <td>
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(hom)}
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(hom.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center">
                    No home data available.
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {/* Update Form */}
        {editHome && (
          <div className="mt-5 p-4 bg-gray-100 rounded-md">
            <h3 className="text-xl font-bold mb-3">Update Home</h3>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Picture URL</label>
                <input
                  type="text"
                  value={editHome.picture}
                  onChange={e => setEditHome({ ...editHome, picture: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={editHome.description}
                  onChange={e => setEditHome({ ...editHome, description: e.target.value })}
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
                  onClick={() => setEditHome(null)} // Close the form without saving
                  className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Managehome;
