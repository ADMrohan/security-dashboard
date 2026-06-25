import {Outlet} from "react-router-dom"

function Layout(){
    return (
        <div>
            <div className="Navbar-holder">Security Dashboard</div>
            <Outlet/>
        </div>
    );
}
export default Layout