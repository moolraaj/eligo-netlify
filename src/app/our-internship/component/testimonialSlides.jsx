import React, { useEffect, useState } from 'react';

function TestimonialSlides({ slides }) {
    const { testimonials_slider } = slides.acf;
    const newSlider = testimonials_slider[0];
    const { slider_images } = newSlider;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setCurrentSlide((currentSlide + 1) % slider_images.length);
            }
        }, 2500);

        return () => clearInterval(interval);
    }, [currentSlide, isPlaying, slider_images.length]);

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slider_images.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slider_images.length) % slider_images.length);
    };

    const handleMouseEnter = () => {
        setIsPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsPlaying(true);
    };

    return (
        <div className="intern_testimonial_slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="intern_slider">
                {slider_images && slider_images.map((image, index) => (
                    <div
                        key={index}
                        className={`intern_slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="prev" onClick={handlePrevSlide}>&#10094;</button>
            <button className="next" onClick={handleNextSlide}>&#10095;</button>
        </div>
    );
}

export default TestimonialSlides;
