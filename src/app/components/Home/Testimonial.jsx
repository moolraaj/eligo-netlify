'use client';
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useEffect, useState } from 'react';
import { emptyImage } from '../../../../public/assets/images';

function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    let api = allExportedApi();

    const loadTestimonials = async () => {
        try {
            const response = await api.fetchTestimonial();
            setTestimonials(response);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    };

    useEffect(() => {
        loadTestimonials();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % testimonials.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const getDesktopSlideStyle = (index) => {
        const relativeIndex = (index - currentSlide + testimonials.length) % testimonials.length;
        if (relativeIndex === 0) {
            return { opacity: 1, zIndex: 3, marginTop: '0px', marginLeft: '0px' };
        } else if (relativeIndex === 1) {
            return { opacity: 1, zIndex: 2, marginTop: '30px', marginLeft: '35px' };
        } else if (relativeIndex === 2) {
            return { opacity: 1, zIndex: 1, marginTop: '65px', marginLeft: '70px' };
        } else {
            return { opacity: 0, zIndex: 1, marginTop: '65px', marginLeft: '70px' };
        }
    };

    const getMobileSlideStyle = (index) => {
        const relativeIndex = (index - currentSlide + testimonials.length) % testimonials.length;
        if (relativeIndex === 0) {
            return { opacity: 1, zIndex: 3, marginTop: '0px', marginLeft: '0px' };
        } else if (relativeIndex === 1) {
            return { opacity: 1, zIndex: 2, marginTop: '25px', marginLeft: '30px' };
        } else if (relativeIndex === 2) {
            return { opacity: 1, zIndex: 1, marginTop: '50px', marginLeft: '55px' };
        } else {
            return { opacity: 0, zIndex: 1, marginTop: '50px', marginLeft: '55px' };
        }
    };

    const getMobileSlideStyle320to430 = (index) => {
        const relativeIndex = (index - currentSlide + testimonials.length) % testimonials.length;
        let marginTop, marginLeft;

        if (window.innerWidth <= 320) {
            marginTop = relativeIndex === 1 ? '10px' : '20px';
            marginLeft = relativeIndex === 1 ? '15px' : '30px';
        } else if (window.innerWidth <= 430) {
            marginTop = relativeIndex === 1 ? '15px' : '30px';
            marginLeft = relativeIndex === 1 ? '20px' : '35px';
        } else {
            marginTop = '25px';
            marginLeft = '30px';
        }

        if (relativeIndex === 0) {
            return { opacity: 1, zIndex: 3, marginTop: '0px', marginLeft: '0px' };
        } else if (relativeIndex === 1) {
            return { opacity: 1, zIndex: 2, marginTop, marginLeft };
        } else if (relativeIndex === 2) {
            return { opacity: 1, zIndex: 1, marginTop, marginLeft };
        } else {
            return { opacity: 0, zIndex: 0, marginTop, marginLeft };
        }
    };

    const getSlideStyle = window.innerWidth <= 430 ? getMobileSlideStyle320to430 : (window.innerWidth <= 600 ? getMobileSlideStyle : getDesktopSlideStyle);

    // Helper function to get the dot index cyclically
    const getActiveDotIndex = (index) => index % 3;

    return (
        <div className="testimonial_slider">
            {testimonials && testimonials.map((ele, index) => (
                <div
                    key={index}
                    className="testimonial_wrap"
                    style={getSlideStyle(index)}
                >
                    <div className="testi_image">
                        <img src={ele.acf.client_image || emptyImage.src} alt={ele.acf.client_name} />
                    </div>
                    <div className="testimonial_asking">
                        <p>{ele.acf.client_description}</p>
                    </div>
                    <div className="testimonial_name">
                        <h1>{ele.acf.client_name}</h1>
                    </div>
                    <div className="testimonial_address">
                        <p>{ele.acf.client_location}</p>
                    </div>
                </div>
            ))}
            <div className="dots">
                {Array.from({ length: 3 }).map((_, index) => (
                    <span
                        key={index}
                        className={getActiveDotIndex(currentSlide) === index ? 'dot active' : 'dot'}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
