import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { upcomingEventsHighlights } from "../../constants/upcomingEvents";
import UpcomingEventHighlightCard from "./UpcomingEventHighlightCard";
import "./UpcomingEventsHighlightCards.scss";

const UpcomingEventsHighlightCards = () => {
    const filteredEvents = upcomingEventsHighlights.filter((event) => {
        if (event.date) {
            return new Date(event.date) >= new Date();
        } else {
            return true
        }
    });

    return (
        <>
            {
                filteredEvents.length
                ?
                    <div className={`upcoming-events-cards-wrapper`}>
                    {filteredEvents.map((eventDetails) => {
                        return <UpcomingEventHighlightCard key={eventDetails.name} eventDetails={eventDetails} />
                    })}
                </div>
                :
                <div className="no-events-message">
                    <p>No events are scheduled at the moment.</p>
                    <p>Stay tuned & follow us on social media for updates!</p>
                </div>
            }
        </>
    )
};

export default UpcomingEventsHighlightCards;