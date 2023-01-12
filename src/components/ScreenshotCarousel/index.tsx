import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrowNext, CustomArrowPrev } from '../Projects/Carousel/CustomArrow';
import './screenshots.css';


const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    prevArrow: <CustomArrowPrev />,
    nextArrow: <CustomArrowNext />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: false
            }
        }
    ]
}

interface CarouselProps {
    screenshots: [string];
}

const ScreenshotCarousel: React.FC<CarouselProps> = ({
    screenshots
}) => {

    return (
        <div className='block not-prose pb-10 w-full'>
            <div className='max-w-[80vw] md:max-w-none m-auto'>
                <Slider {...settings}>
                    {screenshots.map((src, i) => {
                        return (
                            <img src={src} />
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default ScreenshotCarousel;