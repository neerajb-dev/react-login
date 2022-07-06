import MainSection from "../../components/main-section/main-section.component";
import SectionItems from "../../components/section-items/section-items.components";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <div className="home">
            <MainSection />
            <SectionItems />
            <SectionItems />
            <Footer />
        </div>
    )
};

export default Home;