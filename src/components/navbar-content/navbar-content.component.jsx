import "./navbar-content.styles.css";
import { RiCameraLensLine } from "react-icons/ri";
import NavItem from "../nav-item/nav-item.component";

const NavbarContent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0">
            <div className="container-fluid">
                {/* <a href="!#" className="navbar-brand p-2"><RiCameraLensLine /></a> */}
                <NavItem className="mx-3" toPath="" Icon={<RiCameraLensLine color="#fff" />} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid justify-content-between">
                        <NavItem navLinkName="Tour" toPath="tour" />
                        <NavItem navLinkName="Product" toPath="products" />
                        <NavItem navLinkName="Features" toPath="features" />
                        <NavItem navLinkName="Enterprise" toPath="enterprise" />
                        <NavItem navLinkName="Support" toPath="support" />
                        <NavItem navLinkName="Pricing" toPath="pricing" />
                        <NavItem navLinkName="Cart" toPath="Cart" />
                        <NavItem navLinkName="Login" toPath="Login" />
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavbarContent;