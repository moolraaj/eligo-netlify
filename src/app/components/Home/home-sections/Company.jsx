'use client'
import React, { useState } from 'react'

function CompanySection({ele}) {
    const [activeIndex, setActiveIndex] = useState(null);  
    const onTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };
  return (
     <>
     <div className="page_outer  company_section_outer scrolling">
            <div className="page_inner company_section_inner">
              <div className="home_company_wrapper">
                <div className="company_flex">
                  <div className="company_left_section">

                    <h1 
                      dangerouslySetInnerHTML={{
                        __html: ele.acf.our_company_heading,
                      }}></h1>


                    <p >{ele.acf.our_company_para}</p>
                  </div>

                  <div className="company_right_section">
                    {ele.acf.our_compnay_repeater.map((items, index) => (
                      <div className="company_scroll_wrapper" key={index}>
                        <div className="company_faq_wrapper">
                          <div
                            className="company_question"
                            onClick={() => onTitleClick(index)}>
                            <h4 >{items.faq_question}</h4>
                            <i
                              className={`fa ${activeIndex === index ? "fa-minus" : "fa-plus"
                                }`}> </i>
                          </div>
                          {activeIndex === index && (
                            <div className="company_answers">
                              <p >{items.faq_answer}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
     </>
  )
}

export default CompanySection
