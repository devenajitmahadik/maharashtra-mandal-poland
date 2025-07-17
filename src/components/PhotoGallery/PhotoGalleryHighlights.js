import { textToId } from "../../utils/helper";
import SectionHeading from "../Section/SectionHeading";
import PhotoGallery from "./PhotoGallery";
import "./PhotoGalleryHighlights.scss";

const PhotoGalleryHighlights = () => {
    const HEADING = "Photo gallery";
    return (
        <div className={`${textToId(HEADING)}-highlight-wrapper`}>
            <SectionHeading heading={HEADING} />
            <PhotoGallery />
        </div>
    )
};

export default PhotoGalleryHighlights;