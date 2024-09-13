import { api } from '../home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';

interface Prez {
  id: number;
  president_name: string;
  year: string;
  image: string;
}

const Managepresidents = () => {
  const [presidents, setPresidents] = useState<Prez[]>([]);
  const [loading, setLoading] = useState(true);
  const [editPresident, setEditPresident] = useState<Prez | null>(null); // State for editing president

  const fetchPresidentData = async () => {
    try {
      const res = await axios.get(`${api}/allpresidents`);
      setPresidents(res.data);
    } catch (error) {
      console.error("Error loading the presidents", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPresidentData();
  }, []);

  const handlePdelete = async (id: number) => {
    try {
      await axios.delete(`${api}/deletepresident/${id}`);
      setPresidents(prevPres => prevPres.filter(pres => pres.id !== id));
    } catch (error) {
      console.error("Failed to delete president", error);
    }
  };

  const handleEdit = (president: Prez) => {
    setEditPresident(president); // Set the president to be edited
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editPresident) {
      try {
        await axios.put(`${api}/updatepresident/${editPresident.id}`, editPresident);
        setPresidents(prevPres =>
          prevPres.map(pres => (pres.id === editPresident.id ? editPresident : pres))
        );
        setEditPresident(null); // Close the form after updating
      } catch (error) {
        console.error("Failed to update president", error);
      }
    }
  };

  return (
    <div className="w-full overflow-scroll max-h-screen pl-2 pt-5">
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>President Name</th>
              <th>Year</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <div className="flex gap-5 justify-center items-center w-full mb-2">
                    <FadeLoader color="#EC4899" />
                    <p>Loading presidents data...</p>
                  </div>
                </td>
              </tr>
            ) : (
              presidents.length > 0 ? (
                presidents.map((pres: Prez) => (
                  <tr key={pres.id}>
                    <th>{pres.id}</th>
                    <td>{pres.president_name}</td>
                    <td>{pres.year}</td>
                    <td>
                      <img src={pres.image} alt={pres.president_name} className="w-12 h-12 object-cover rounded-md" />
                    </td>
                    <td>
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEdit(pres)}
                      >
                        <FaEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handlePdelete(pres.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center">
                    No presidents data available.
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {/* Update Form */}
        {editPresident && (
          <div className="mt-5 p-4 bg-gray-100 rounded-md">
            <h3 className="text-xl font-bold mb-3">Update President</h3>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">President Name</label>
                <input
                  type="text"
                  value={editPresident.president_name}
                  onChange={e => setEditPresident({ ...editPresident, president_name: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="text"
                  value={editPresident.year}
                  onChange={e => setEditPresident({ ...editPresident, year: e.target.value })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  value={editPresident.image}
                  onChange={e => setEditPresident({ ...editPresident, image: e.target.value })}
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
                  onClick={() => setEditPresident(null)} // Close the form without saving
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

export default Managepresidents;
