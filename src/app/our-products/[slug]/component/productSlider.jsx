'use client'
import React, { useState, useEffect, useRef } from 'react';
import { emptyImage } from '../../../../../public/assets/images';

function ProductSlider({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const slideInterval = useRef(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setSlidesToShow(3);
    } else if (screenWidth >= 600) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    startSlideInterval();
    return () => stopSlideInterval();
  }, [currentSlide]);

  const startSlideInterval = () => {
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 2500);
  };

  const stopSlideInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
      visibleSlides.push(data[(currentSlide + i) % data.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="slider-container" onMouseEnter={stopSlideInterval} onMouseLeave={startSlideInterval}>
      <button className="prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <div className="slides">
        {getVisibleSlides().map((imageUrl, index) => (
          <div key={index} className="slide" onClick={() => openLightbox(imageUrl)}>
            <img src={imageUrl || emptyImage.src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>X</button>
            <img className="lightbox-image" src={lightboxImage || emptyImage.src} alt="lightbox" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSlider;
