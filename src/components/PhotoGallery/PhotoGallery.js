import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";

import "react-photo-album/dist/styles/rows.css";
import "yet-another-react-lightbox/dist/styles.css";
import "./PhotoGallery.scss";
import { highlightPhotos } from "../../constants/photoGallery";

const PhotoGallery = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div>
            <RowsPhotoAlbum
                photos={highlightPhotos}
                targetRowHeight={150}
                onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
                index={index}
                slides={highlightPhotos}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    )
};

export default PhotoGallery;