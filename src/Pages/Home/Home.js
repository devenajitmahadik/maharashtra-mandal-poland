import React from "react";
import Hero from "../../components/Hero/Hero";
import UpcomingEventsHighlights from "../../components/UpcomingEvents/UpcomingEventsHighlights";
import PhotoGalleryHighlights from "../../components/PhotoGallery/PhotoGalleryHighlights";

const Home = () => {
    return (
        <div className="home main-body">
            <Hero />
            <UpcomingEventsHighlights />
            <PhotoGalleryHighlights />
        </div>
    )
};

export default Home;