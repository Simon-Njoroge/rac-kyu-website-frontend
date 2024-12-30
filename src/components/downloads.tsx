import axios from "axios";
import { useState, useEffect } from "react";
import { api } from "./home";
import { ClipLoader } from "react-spinners";
import { Tdownload } from "./alltypes";

const Downloads = () => {
  const [downloads, setDownloads] = useState<Tdownload[]>([]);

  const fetchDownloads = async () => {
    try {
      const res = await axios.get(`${api}/api/all/download`);
      setDownloads(res.data);
    } catch (error) {
      console.error("Failed to load downloads", error);
    }
  };

  useEffect(() => {
    fetchDownloads();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        {/* Heading */}
        <div>
          <p className="bg-pink-600 text-center h-20 flex items-center justify-center md:mx-0 text-white font-bold text-xl mt-10 mx-0">
            Downloads
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto mx-0 sm:mx-10 md:mx-0 mt-10">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg mb-2">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Filetype</th>
                <th className="py-3 px-6 text-center">Description</th>
                <th className="py-3 px-6 text-center">Uploaded On</th>
                <th className="py-3 px-6 text-center">Options</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-600 text-sm font-light">
              {downloads.length > 0 ? (
                downloads.map((down) => (
                  <tr
                    key={down.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {down.title}
                    </td>
                    <td className="py-3 px-6 text-left">{down.file_type}</td>
                    <td className="py-3 px-6 text-center">{down.description}</td>
                    <td className="py-3 px-6 text-center">
                      {new Date(down.uploaded_on).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <a
                        href={down.url}
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
                      <p>Loading Downloads...</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Downloads;
