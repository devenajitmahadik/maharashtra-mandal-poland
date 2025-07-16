import { textToId } from "../../utils/helper";
import SectionHeading from "../Section/SectionHeading";
import "./UpcomingEventsHighlights.scss";
import UpcomingEventsHighlightCards from "./UpcomingEventsHighlightCards";

const UpcomingEventsHighlights = () => {
    const HEADING = "Upcoming events";
    return (
        <div className={`${textToId(HEADING)}-highlight-wrapper`}>
            <SectionHeading heading={HEADING} />
            <UpcomingEventsHighlightCards />
        </div>
    )
};

export default UpcomingEventsHighlights;