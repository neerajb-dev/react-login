import "./section-items.styles.css";

const SectionItems = () => {
    return (
        <div className="section-items-container d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center p-5 gap-3">
            <div className="left-card bg-dark text-light w-100 w-sm-50" >
                <div className="text-content text-center h-100 pt-5 px-5 d-flex flex-column justify-content-center align-items-center">
                    <h1>Another Headline</h1>
                    <p>And an even wittier subheading.</p>
                    <div className="phone-shape bg-light"></div>
                </div>
            </div>
            <div className="right-card bg-light text-dark w-100 w-sm-50" >
                <div className="text-content text-center h-100 pt-5 px-5 d-flex flex-column justify-content-center align-items-center">
                    <h1>Another Headline</h1>
                    <p>And an even wittier subheading.</p>
                    <div className="phone-shape bg-dark"></div>
                </div>
            </div>
        </div>
    )
};

export default SectionItems;