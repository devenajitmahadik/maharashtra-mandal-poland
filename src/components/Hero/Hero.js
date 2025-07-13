// import { Swiper, SwiperSlide } from "swiper/swiper-react.mjs";
// import { Autoplay } from "swiper/modules";
// import { heroImagesList } from "../../constants/hero";
// import { textToId } from "../../utils/helper";
// import "swiper/swiper.min.css";
import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-image-filter"></div>
            <div className="hero-heading">Welcome to Maharashtra Mandal Poland</div>
            {/* <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 3000}} loop={true}>
                    {heroImagesList.map((listItem) => {
                        return <SwiperSlide key={textToId(listItem.alt)}>
                            <img src={listItem.src} alt={listItem.alt} />
                        </SwiperSlide>
                    })}
            </Swiper> */}
        </div>
    )
};

export default Hero;