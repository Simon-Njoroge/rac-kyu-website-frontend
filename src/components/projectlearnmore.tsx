import axios from "axios";
import { useState, useEffect } from "react";
import { api } from "./home";
import { Tproject } from "./alltypes";
import { useParams } from "react-router-dom";

function Projectlearnmore() {
  const { id } = useParams();
  const [projects, setProject] = useState<Tproject[]>([]);

  const fetchProjects = () => {
    axios
      .get(`${api}/api/all/projects`)
      .then((res) => setProject(res.data))
      .catch((error) => console.error("failed to load data", error));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const project = projects?.find((p) => p.id === Number(id));

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 mt-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src={project?.Project_Image}
          alt={project?.Project_Name}
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-white">{project?.Project_Name}</h1>
          <div className="mt-4">
            <p className="text-lg text-pink-600">
              <strong>Start Date:</strong> {project?.Start_Date}
            </p>
            <p className="text-lg text-pink-600">
              <strong>End Date:</strong> {project?.End_Date}
            </p>
          </div>
          <div className="mt-6 text-lg text-white max-h-60 overflow-auto leading-relaxed break-words">
            {project?.Description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectlearnmore;
