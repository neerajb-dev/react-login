import {Outlet} from "react-router-dom";
import NavbarContent from "../navbar-content/navbar-content.component";

const Navbar = () => {
    return (
        <>
            <NavbarContent />
            <Outlet />
        </>
    )
};

export default Navbar;