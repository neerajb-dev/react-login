import "./footer-links.styles.css";

const FooterLinks = ({ LINK, TYPE, title }) => {
    return (
        <div className="footerLinks__container d-flex flex-column">
            <h1 className="footerLinks--heading">{title}</h1>
            {
                LINK[TYPE].map((link) => {
                    return (
                        <a href="!#" className="footerLinks-links text-decoration-none text-secondary" target={"_blank"}>{link}</a>
                    )
                })
            }
        </div>
    )
};

export default FooterLinks;