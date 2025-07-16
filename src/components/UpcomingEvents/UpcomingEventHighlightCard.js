import "./UpcomingEventHighlightCard.scss";

const UpcomingEventHighlightCard = (props) => {
    const { eventDetails } = props;

    return (
        <div className="upcoming-event-highlight-card">
            <div className="event-image-wrapper" style={{backgroundImage: `url(${eventDetails.imageUrl})`}}>
            </div>
            <div className="event-details-wrapper">
                <div className="event-heading">{eventDetails.name}</div>
                <div className="event-date">Date: {eventDetails.date || "To be anounced"}</div>
                <div className="event-venue">Venue: {eventDetails.venue || "To be anounced"}</div>
            </div>
        </div>
    );
};

export default UpcomingEventHighlightCard;