import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import json from './projects.json';
import { CustomArrowPrev, CustomArrowNext } from './CustomArrow';



const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomArrowPrev />,
    nextArrow: <CustomArrowNext />,
    responsive: [
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 800
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                speed: 700
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500
            }
        }
    ]
}


const Carousel = () => {



    return (
        <div
            className='flex flex-col w-full h-full justify-center align-center min-[400px]:px-[5%]'
        >
            <div
                className="align-center h-min w-full px-5 md:px-16 z-[5]"
            >
                <Slider {...settings}>
                    {json.map((props, i) => {
                        return <ProjectCard key={i} {...props} />
                    })}
                </Slider>

            </div>
        </div>
    );
};

export default Carousel;