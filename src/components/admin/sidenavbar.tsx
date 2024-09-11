import { Link } from "react-router-dom";
const Sidenav = () => {
    return (
        <>
            <div className="bg-blue-950 h-screen w-48 text-white overflow-y-hidden">
                <ul className="bg-blue-950 mr-2">
                    <Link to="/managehome"><li className="cursor-pointer mb-2 bg-blue-950 text-white">Manage Home</li></Link>
                    <Link to="/managepresidents"><li className="cursor-pointer mb-2 bg-blue-950 text-white ">Manage Presidents</li></Link>
                    <Link to="/managecourses"> <li className="cursor-pointer mb-2 bg-blue-950 text-white">Manage Courses</li></Link>
                    <Link to="/manageprojects"><li className="cursor-pointer mb-2 bg-blue-950 text-white">Manage Projects</li></Link>
                    <Link to="/manageevents"><li className="cursor-pointer mb-2 bg-blue-950 text-white">Manage Events</li></Link>
                    <Link to="/manageGallery"><li className="cursor-pointer mb-2 bg-blue-950 text-white">Manage Gallery</li></Link>
                    <li className="cursor-pointer mb-2 bg-blue-950 text-white ">Logout</li>
                </ul>
            </div>
        </>
    );
}

export default Sidenav;
