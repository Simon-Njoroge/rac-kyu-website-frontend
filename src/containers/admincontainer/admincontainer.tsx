import Adminheader from "../../components/admin/header"
import Sidenav from "../../components/admin/sidenavbar"
const Admincontainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>
                <div>
                    <Adminheader />
                </div>
                <div>
                    <div >
                        <Sidenav />
                    </div>
                    <div>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admincontainer