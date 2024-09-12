import Adminheader from "../../components/admin/header";
import Sidenav from "../../components/admin/sidenavbar";
import Copyright from "../../components/copyright";

const Admincontainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="overflow-hidden min-h-screen flex flex-col">
                <div>
                    <Adminheader />
                </div>
                <div className="flex flex-col md:flex-row flex-grow">
                    {/* Horizontal Sidenav on Small Screens */}
                    <div className="md:hidden">
                        <Sidenav />
                    </div>
                    <div className="flex flex-col md:flex-row flex-grow">
                        {/* Vertical Sidenav on Medium and Larger Screens */}
                        <div className="hidden md:block md:w-screen md:h-48 lg:w-1/5">
                            <Sidenav />
                        </div>
                        {/* Main Content Area */}
                        <div className="w-full md:w-3/4 lg:w-4/5 overflow-y-scroll p-4">
                            <div>{children}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Copyright />
                </div>
            </div>
        </>
    );
};

export default Admincontainer;
