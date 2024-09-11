import Adminheader from "../../components/admin/header"
import Sidenav from "../../components/admin/sidenavbar"
import Copyright from "../../components/copyright"
const Admincontainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="overflow-hidden ">
                <div>
                    <Adminheader />
                </div>
                <div className="flex ">
                    <div >
                        <Sidenav />
                    </div>
                    <div className="overflow-y-scroll">
                        <div>{children}</div>
                    </div>
                </div>
                <div >
                    <Copyright/>
                </div>
            </div>
        </>
    )
}
export default Admincontainer