import React, { useState } from 'react';

const InternTestimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || !testimonials.acf || !testimonials.acf.internship_testimonials || testimonials.acf.internship_testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.acf.internship_testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonials.acf.internship_testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const testimonial = testimonials.acf.internship_testimonials[currentIndex] || {};

  const getYouTubeID = url => {
    const regExp = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const youtubeID = getYouTubeID(testimonial.youtube_link);

  return (
    <div className='interns_info_outer'>
      
      
      <div className='testimonial_video_player'>
      <div className="interns_info">
        <p>Student Name: {testimonial.student_name}</p>
        <p>Course Name: {testimonial.course_name}</p>
        <p>Course Period: {testimonial.course_period}</p>
      </div>
      <div className="tesimonial_video_pannel">
      {youtubeID ? (
          <iframe
            id={`player-${currentIndex}`}
            src={`https://www.youtube.com/embed/${youtubeID}?enablejsapi=1`}
            height="400px"
            width="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div style={{height: '400px',display: 'flex', justifyContent: 'center', alignItems: 'center',border: '1px solid'}}> No video available.</div> 
        )}
      </div>
       
      </div>
      
      <div>
        <button onClick={handlePrevious} className={currentIndex === 0 ? "prev-btn inactive" : "prev-btn"}>Previous</button>
        <button onClick={handleNext} className={currentIndex === testimonials.acf.internship_testimonials.length - 1 ? "next-btn inactive" : "next-btn"}>Next</button>
      </div>
    </div>
  );
};

export default InternTestimonial;
