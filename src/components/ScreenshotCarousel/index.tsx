import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrowNext, CustomArrowPrev } from '../Projects/Carousel/CustomArrow';

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

const ScreenshotCarousel = () => {

    return (
        <div className='block not-prose pb-10 w-full'>
            <div className='max-w-[80vw] md:max-w-none m-auto'>
                <Slider {...settings}>
                    <img src="https://placekitten.com/1920/1080" />
                    <img src="https://placekitten.com/800/450" />
                    <img src="https://placekitten.com/1000/500" />
                </Slider>
            </div>
        </div>
    );
};

export default ScreenshotCarousel;