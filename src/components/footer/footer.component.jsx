import "./footer.styles.css";
import { RiCameraLensLine } from "react-icons/ri";
import FooterLinks from "../footer-links/footer-links.component";

const Footer = () => {

    const LINKS = {
        features: [
            'Cool Stuff',
            'Random features',
            'Team feature',
            'Stuff for developers',
            'Another one',
            'Last time'
        ],
        resources: [
            'Resource Name',
            'Resource',
            'Another resource',
            'Final resource'
        ],
        about: [
            'Team',
            'Locations',
            'Privacy',
            'Terms'
        ]
    }

    return (
        <div className="footer__container row p-3 g-0">
            <div className="footer__icon col-md-3 d-flex justify-content-start justify-content-md-end">
                <div>
                    <RiCameraLensLine />
                    <p>&#169; 2017-2022 </p>
                </div>
            </div>
            <div className="col-md-9 d-flex flex-wrap justify-content-evenly gap-5 ">
                <FooterLinks LINK={LINKS} TYPE="features" title="Features" />
                <FooterLinks LINK={LINKS} TYPE="resources" title="Resources" />
                <FooterLinks LINK={LINKS} TYPE="about" title="About" />
            </div>
        </div>
    )
};

export default Footer;