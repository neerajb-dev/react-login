import "./main-section.styles.css";
import phonePic from "../../assets/phone.jpg";

const MainSection = () => {
    return (
        <div className="main__section">
            <div className="main__section--image">
                <img src={phonePic} alt="" className="section--image" />
            </div>
            <div className="title__container d-flex justify-content-center align-items-center flex-column position-absolute top-50 start-50 translate-middle p-5 rounded" >
                <h1 className="title fw-bold text-dark">Punny headline</h1>
                <p className="subtitle text-center p-2 text-dark">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
            </div>
        </div>
    )
};

export default MainSection;