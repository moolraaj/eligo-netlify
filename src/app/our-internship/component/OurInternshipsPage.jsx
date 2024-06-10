'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { INTERNSHIP_PAGE_SIZE, allExportedApi } from '@/utils/apis/Apis';
import { useRouter } from 'next/navigation';
import Internship from '@/app/_forms/internship';
import RerenderCompo from '@/app/common/navbar/component/formAnimationCompo';
import TestimonialSlides from './testimonialSlides';
import InternTestimonial from './testimonials';
import { emptyImage, formClose } from '../../../../public/assets/images';
 
 
 

function OurInternshipsPage() {
  let api = allExportedApi();
  const [InternshipPageApiData, setInternshipPageApiData] = useState([]);
  const [internship, setInternship] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  const toggleFormVisibility = () => {
    setIsMounted(!isMounted);
  };
  

  const loadInternshipData = async () => {
    let data = await api.internshipPageApi();
    setInternshipPageApiData(data);
  };

  const loadInternships = async () => {
    let data = await api.ourInternships();
    setInternship(data);
  };

  useEffect(() => {
    loadInternshipData();
    loadInternships();

    const formShown = sessionStorage.getItem('formShown');
    if (!formShown) {
      setIsMounted(true);
      sessionStorage.setItem('formShown', 'true');
    }

    const timer = setTimeout(() => {
      if (!formShown) {
        setIsMounted(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  

  const totalPages = Math.ceil(internship.length / INTERNSHIP_PAGE_SIZE);

  const renderInternships = () => {
    const startIndex = (currentPage - 1) * INTERNSHIP_PAGE_SIZE;
    const endIndex = startIndex + INTERNSHIP_PAGE_SIZE;
    return internship.slice(startIndex, endIndex).map((internship, index) => (
      <ul key={index} className={`product${index % 2 === 0 ? " even" : " odd"} our_product`}>
        <li>
          <span className="wrap_nmae_btn">
            <span><h1>{internship.acf.internship_tittle}</h1></span>
            <span><Link href={internship.acf.internship_form_link} target='_blank'>Start Your Task</Link></span>
          </span>
        </li>
        <li><img src={internship.acf.internship_image || emptyImage.src} alt="portfolio_image" /></li>
      </ul>
    ));
  };

  const renderPaginationButtons = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };





    return (
      <div className="pagination-buttons">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={pageNumber === currentPage ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="internship-page-outer page_top">
        <div className="internship-page-inner">
          {InternshipPageApiData.map((ele, index) => (
            <div key={index} className="product-page-top-section">
              <div className="product-top-image-section">
                <div className="product_heading_left"><h3>{ele.acf.internship_page_tittle}</h3></div>
                <div className="product_image_right">
                  <img src={ele.acf.internship_page_banner_image || emptyImage.src} alt="product_page_image" />
                  <span></span>
                </div>
              </div>
              <div className="product-top-info-section">
                <div className="product-page-left-info">
                  <h1>{ele.acf.internship_page_tittle}</h1>
                  <p dangerouslySetInnerHTML={{ __html: ele.acf.internship_page_description }}></p>
                </div>
                <div className="internship-page-right-info">
                  <img src={ele.acf.internship_description_image || emptyImage.src} alt="internship_description_image" />
                </div>
              </div>
            </div>
          ))}
          <div className="our_products_wrapper">
            {renderInternships()}
          </div>
          {totalPages > 1 && renderPaginationButtons()}
        </div>
        <div className="internship_training_points">
          {InternshipPageApiData.map((ele, index) => {
            return (
              <div key={index} className="internship_points_inner">
                <h1>{ele.acf.internship_training_heading}</h1>
                <p>{ele.acf.internship_training_short_description}</p>
                {ele.acf.internship_training_points.map((point, pointIndex) => (
                  <ul key={pointIndex} className="internship_bullet_points">
                    <h2>{point.training_tittle}</h2>
                    <li>
                      <p dangerouslySetInnerHTML={{ __html: point.training_description }}></p>
                    </li>
                  </ul>
                ))}
                  <div className="intrns_testimonials_outer">
                <h2> Our Testimonials</h2>
                <div className="inter_testi_wrapper">
                  <div className="inter_left">
                  <TestimonialSlides slides={ele}/>
                  </div>
                  <div className="inter_testi_right">
                    <InternTestimonial testimonials={ele} />
                  </div>

                </div>
                </div>
                

              </div>
              
            );
          })}
        </div>
        {isMounted && (
          <>
            <div className="internship_popup_form">
              <div className="cf7_form_outer" style={{ animation: isMounted ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
                <div className="cf7_form_inner">
                  <div className="cf7_top_banner">
                    <div className="cf7_left_section">
                      <div className="form_banner_heading">
                        <h1>Industrial Training</h1>
                      </div>
                      <div className="form_slider_wrapper apply_for_job">
                        <div className="_form_paragraph">
                          <p>
                            Let's work on
                          </p>
                        </div>
                        <div className="form_slides">
                          <RerenderCompo />
                        </div>
                      </div>
                    </div>
                    <div className="cf7_right_section">
                      <div className="close_button">
                        <button onClick={toggleFormVisibility} className="close_button">
                          <img src={formClose.src || emptyImage.src} alt="formClose" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cf7_form_wrapper">
                    <Internship />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default OurInternshipsPage;
