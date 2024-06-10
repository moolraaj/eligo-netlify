'use client'
import ApplyForJob from '@/app/_forms/applyForJob';
import Link from 'next/link';
import React, { useState } from 'react';
import { emptyImage, formClose } from '../../../../public/assets/images';



function CareerPage({data}) {
  
  const [isApplyJobVisible, setIsApplyJobVisible] = useState(false);
  const toggleFormVisibility = () => {
    setIsApplyJobVisible(!isApplyJobVisible);
  };
  const closeApplyJob = () => {
    setIsApplyJobVisible(false);
  };

  return (
   <>

{isApplyJobVisible && (
        <div className="cf7_form_outer" style={{ animation: isApplyJobVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">

              <div className="cf7_left_section">
                <div className="form_banner_heading">

                  <h1>apply now</h1>
                </div>

                <div className="form_slider_wrapper">
                  <div className="_form_paragraph">
                    <p>
                      apply for job
                    </p>
                  </div>
                </div>


              </div>

              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={closeApplyJob} className="close_button" aria-label='close poup form'>
                    <img src={formClose.src || emptyImage.src} alt="formClose"/>
                  </button>
                </div>
              </div>

            </div>
            <div className="cf7_form_wrapper">
              <ApplyForJob/>
            </div>
          </div>
        </div>
      )}


   <div className="page_top">
    <div id="career_section" className="career_page_outer">
        <div className="career_page_inner">
            {data && data.map((ele,index)=>{
                return  <div key={index} className="product-page-top-section">
                <div className="product-top-image-section">
                  <div className="product_heading_left"><h3>{ele.acf.career_page_tittle}</h3></div>
                  <div className="product_image_right">
                    <img src={ele.acf.career_page_header_image || emptyImage.src} alt="product_page_image" />
                    <span>
                      <p>
                        <marquee direction="left" scrollamount="12">
                        <h3>{ele.acf.divider_heading}</h3>
                        </marquee>
                      </p>
                    </span>
                  </div>
                </div>
                <div className="product-top-info-section">
                  <div className="product-page-left-info">
                    <h1>{ele.acf.career_page_tittle}</h1>
                    <p dangerouslySetInnerHTML={{__html: ele.acf.career_page_description}}></p>
                  </div>
                  <div className="product-page-right-info">
                    <div className="product_right_info_inner">
                      <p>{ele.acf.button_heading}</p>
                      <button className='apply_now_career_btn' onClick={toggleFormVisibility} >{ele.acf.button_name}</button>
                    </div>
                  </div>
                </div>
                <div className="current_opening_section_wrapper">
                    <h2>{ele.acf.current_openings_points_heading}</h2>
                    <div className='covering_both'>
                    <div className="current_opening_left">
                        <p dangerouslySetInnerHTML={{__html: ele.acf.current_openings_points}}></p>

                        <button className='apply_now_career' onClick={toggleFormVisibility} >{ele.acf.button_name}</button>
                    </div>
                    <div className="current_opening_right">
                        <img src={ele.acf.current_openings_image || emptyImage.src} alt="current_openings_image" />
                    </div>
                    </div>
                 
                </div>
                <div className="experience_section_wrapper">
                    <h2>{ele.acf.require_experience_skills_heading}</h2>
                    <div className="experience_skill_left">
                        <p dangerouslySetInnerHTML={{__html: ele.acf.require_experience_skills_points}}></p>
                    </div>
                </div>
                <div className="duties_section_wrapper">
                    <h2>{ele.acf.responsibilities_and_duties_heading}</h2>
                    <div className="duties_left">
                        <p dangerouslySetInnerHTML={{__html: ele.acf.responsibilities_and_duties_points}}></p>
                    </div>
                </div>
                <div className="how_to_apply_section_wrapper">
                    <h3>{ele.acf.how_to_apply_heading}</h3>
                    <div className="apply_left">
                        <p>{ele.acf.how_to_apply_description}</p>
                    </div>
                    <button className='apply_now_career' onClick={toggleFormVisibility} >{ele.acf.button_name}</button>
                </div>
              </div>
            }) 
            }
        </div>
    </div>
   </div>
   </>
  )
}

export default CareerPage