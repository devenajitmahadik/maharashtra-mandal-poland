import { textToId } from "../../utils/helper";
import "./SectionHeading.scss";

const SectionHeading = (props) => {
    const { heading } = props;
    return (
        <div className={`section-heading ${textToId(heading)}`}>{heading}</div>
    )
}

export default SectionHeading;