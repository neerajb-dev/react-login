import "./navbar-content.styles.css";
import { RiCameraLensLine } from "react-icons/ri";
import NavItem from "../nav-item/nav-item.component";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavbarContent = () => {

    const token = window.localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(()=> {
        if(token == null) {
            console.log(token);
            navigate("login")
        }
    }, [token])

    const handleSignOUt = () => {
        window.localStorage.clear();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0 shadow">
            <div className="container-fluid">
                <NavItem className="mx-3" toPath="" Icon={<RiCameraLensLine color="#fff" />} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto container-fluid justify-content-between">
                        <NavItem navLinkName="Tour" toPath="tour" />
                        <NavItem navLinkName="Product" toPath="products" />
                        <NavItem navLinkName="Features" toPath="features" />
                        <NavItem navLinkName="Enterprise" toPath="enterprise" />
                        <NavItem navLinkName="Support" toPath="support" />
                        <NavItem navLinkName="Pricing" toPath="pricing" />
                        <NavItem navLinkName="Cart" toPath="Cart" />
                        <NavItem navLinkName="Dashboard" toPath="dashboard" />
                        {token === null ? <NavItem navLinkName="Login" toPath="Login"/> : null }
                        {token !== null ? <NavItem navLinkName="Sign Out" toPath="Login" onClick={handleSignOUt} /> : null }
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavbarContent;