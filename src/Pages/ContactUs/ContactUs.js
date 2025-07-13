import Contact from "../../components/Contact/Contact";
import PageHeading from "../../components/PageHeading.js/PageHeading";

const ContactUs = () => {
    return (
        <div className="contact-us main-body">
            <PageHeading pageHeading="Contact Us" />
            <Contact />
        </div>
    );
};

export default ContactUs;