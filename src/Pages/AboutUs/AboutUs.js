import About from "../../components/About/About";
import PageHeading from "../../components/PageHeading.js/PageHeading";

const AboutUs = () => {
    return (
        <div className="about-us main-body">
            <PageHeading pageHeading="About Us" />
            <About />
        </div>
    )
};

export default AboutUs;