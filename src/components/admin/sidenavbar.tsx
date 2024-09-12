import { Link } from "react-router-dom";
import { FaHome, FaUserTie, FaBook, FaProjectDiagram, FaCalendarAlt, FaImage, FaSignOutAlt } from "react-icons/fa";

const Sidenav = () => {
    return (
        <>
            <div className="bg-blue-950 h-screen w-48 text-white overflow-y-hidden">
                <ul className="bg-blue-950 mr-2">
                    <Link to="/managehome">
                        <li className="cursor-pointer mb-2 flex items-center bg-blue-950 text-white">
                            <FaHome className="mr-2" /> Manage Home
                        </li>
                    </Link>
                    <Link to="/managepresidents">
                        <li className="cursor-pointer mb-2 flex items-center bg-blue-950 text-white">
                            <FaUserTie className="mr-2" /> Manage Presidents
                        </li>
                    </Link>
                    <Link to="/managecourses">
                        <li className="cursor-pointer mb-2 flex items-center bg-blue-950 text-white">
                            <FaBook className="mr-2" /> Manage Courses
                        </li>
                    </Link>
                    <Link to="/manageprojects">
                        <li className="cursor-pointer mb-2 flex items-center bg-blue-950 text-white">
                            <FaProjectDiagram className="mr-2" /> Manage Projects
                        </li>
                    </Link>
                    <Link to="/manageevents">
                        <li className="cursor-pointer mb-2 flex items-center bg-blue-950 text-white">
                            <FaCalendarAlt className="mr-2" /> Manage Events
                        </li>
                    </Link>
                    <Link to="/manageGallery">
                        <li className="cursor-pointer mb-2 flex items-center bg-blue-950 text-white">
                            <FaImage className="mr-2" /> Manage Gallery
                        </li>
                    </Link>
                    <li className="cursor-pointer mb-2 flex items-center bg-blue-950 text-white">
                        <FaSignOutAlt className="mr-2" /> Logout
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidenav;