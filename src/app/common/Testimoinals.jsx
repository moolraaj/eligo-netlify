'use client'
import React, { useState, useEffect } from "react";
import emptyImage from '../../../public/assets/empty.jpg'
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeTestimonial = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=about&fields=acf&acf_format=standard`);
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data[0]?.acf?.testimonials || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Automatic slide animation after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="page_outer testimonial_section_outer scrolling">
    <div className="page_inner testimonial_section_inner">
      <div className="testimonial_wrapper">
      <div className="testimonial-left-section">
        <h1>
          <span className="uderline-text">Testimonials</span>
          <span className="uderline-text">From Our</span>
          <span className="uderline-text">Valued Clients</span>
        </h1>
      </div>
      <div className="testimonial-right-section">
        {loading ? (
          <p>Loading testimonials...</p>
        ) : (
          testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={
                index === activeIndex
                  ? "testimonial-card active"
                  : "testimonial-card"
              }
              style={{ zIndex: testimonials.length - index }}
            >
              <img
                src={testimonials[activeIndex].client_image.url || emptyImage.src}
                alt="clientImg"
                className="client-img"
              />
              <div className="card-content">
                <p>{testimonials[activeIndex].client_review}</p>
                <h1>{testimonials[activeIndex].client_name}</h1>
                <h3>{testimonials[activeIndex].client_address}</h3>
              </div>
            </div>
          ))
        )}

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={
                index === activeIndex ? "dot active-dot" : "dot"
              }
              onClick={() => changeTestimonial(index)}
            />
          ))}
        </div>
      </div>
      </div>
      
    </div>
    </div>
  );
}

export default Testimonials;
