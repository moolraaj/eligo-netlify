'use client';
import React, { useState } from 'react';

const ServicesFaq = ({ faqs, outerHeading }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="services_faqs_wrapper">
            <div className="services_faq_left_section">
                <h1>{outerHeading}</h1>
            </div>
            <div className="services_faq_right_section">
                {faqs && faqs.map((faq, index) => (
                    <div className="services_faq_outer" key={index}>
                        <div className="servies_question" >
                            <div className="services_faq_heading"><h1>{faq.faq__tittle}</h1></div>
                            <div className="faq_toggle_btn-wrapper">
                            <div onClick={() => toggleAccordion(index)} className={`arrow-icon ${activeIndex === index ? 'active' : ''}`}></div>
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className="services_answer">
                                <p>{faq.faq_response}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesFaq;
