import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";
import { FACEBOOK, INSTAGRAM, socialMediaLinksList } from "../../constants/footer";
import { textToId } from "../../utils/helper";


const Footer = () => {
    const getRequiredFontAwesomeIcon = (name) => {
        switch(name) {
            case FACEBOOK:
                return faFacebook;
            case INSTAGRAM:
                return faInstagram;
            default:
                return faFacebook;
        }
    }
    return (
        <div id="footer" className="footer">
            <div className="social-media-links">
                {
                    socialMediaLinksList.map((listItem) => {
                        const classKeyName = textToId(listItem.name);
                        return (
                            <a
                                key={classKeyName}
                                className={`social-media-link ${classKeyName}`}
                                href={listItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={listItem.name}
                            >
                                <FontAwesomeIcon icon={getRequiredFontAwesomeIcon(listItem.name)} size="lg" />
                            </a>
                        )
                    })
                }
            </div>
            <div className="copyrights">© 2025 Maharashtra Mandal Poland. All rights reserved.</div>
        </div>
    )
};

export default Footer;