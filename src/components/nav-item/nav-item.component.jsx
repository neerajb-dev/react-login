import { Link } from "react-router-dom";

const NavItem = ({ navLinkName, toPath, Icon, className, onClick }) => {
    return (
        <li className={`nav-item ${className}`}>
            <Link to={`/${toPath}`} className="nav-link text-decoration-underline fs-5" onClick={onClick}>{Icon}{navLinkName}</Link>
        </li>
    )
};

export default NavItem;