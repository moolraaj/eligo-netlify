import React from 'react'
import Testimonial from '../Testimonial'

function TestimonialSection({ele}) {
  return (
     <>
              <div className="page_outer testimonial_section_outer scrolling">
                            <div className="page_inner testimonial_section_inner">
                                <div className="home_testimonial_wrapper">
                                    <div className="testimonial_flex">
                                        <div className="testimonial_left_section">
                                            <h1>Testimonials From Our Valued Clients</h1>
                                        </div>
                                        <div className="testimonial_right_section">
                                            <div className="testimonial_inner_flex">

                                             <Testimonial/>

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
     </>
  )
}

export default TestimonialSection
