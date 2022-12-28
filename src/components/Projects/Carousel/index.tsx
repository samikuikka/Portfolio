import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}


const Carousel = () => {



    return (
        <div
            className='flex flex-col w-full h-full justify-center align-center px-[5%]'
        >
            <div
                className="align-center h-min max-w-full px-16 z-[5]"
            >
                <Slider {...settings}>
                    {Array(6).fill(1).map((input, i) => {
                        return <ProjectCard key="i" />
                    })}
                </Slider>

            </div>
        </div>
    );
};

export default Carousel;