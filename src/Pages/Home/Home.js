import React from "react";
import Hero from "../../components/Hero/Hero";
import UpcomingEventsHighlights from "../../components/UpcomingEvents/UpcomingEventsHighlights";

const Home = () => {
    return (
        <div className="home main-body">
            <Hero />
            <UpcomingEventsHighlights />
        </div>
    )
};

export default Home;