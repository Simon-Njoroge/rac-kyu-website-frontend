const Sidenav = () => {
    return (
        <>
            <div className="bg-blue-900 h-full w-full">
                <ul className="bg-blue-950 ">
                    <li className="cursor-pointer">Manage Home</li>
                    <li className="cursor-pointer">Manage Presidents</li>
                    <li className="cursor-pointer">Manage Courses</li>
                    <li className="cursor-pointer">Manage Projects</li>
                    <li className="cursor-pointer">Manage Events</li>
                    <li className="cursor-pointer">Manage Gallery</li>
                    <li className="cursor-pointer">Logout</li>
                </ul>
            </div>
        </>
    );
}

export default Sidenav;
