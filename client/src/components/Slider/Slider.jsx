import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { useState } from "react";

import "./Slider.scss";

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImgs = [
        "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/886404/pexels-photo-886404.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);

    }

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
                <img src={sliderImgs[0]} alt=""/>
                <img src={sliderImgs[1]} alt=""/>
                <img src={sliderImgs[2]} alt=""/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}><WestOutlined/></div>
                <div className="icon" onClick={nextSlide}><EastOutlined/></div>
            </div>
        </div>
    )
}