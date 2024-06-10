'use client'
import React from 'react';
import Link from 'next/link';
import { emptyImage } from '../../../../public/assets/images';

const PortfolioChild = ({ data = [] }) => {
    // Ensure data is an array
    const allportfolioData = Array.isArray(data) ? [...data].reverse() : [];

    return (
        <>
            <div className="portfolio_right_section">
                {allportfolioData.length > 0 ? (
                    allportfolioData.map((ele) => (
                        <div className="portfolio" key={ele.id}>
                            <Link href={`/portfolio/${ele.slug}`} className='portfolio-post'>
                                <div className="portfolio_image">
                                    <img src={ele.acf.portfolio_image || emptyImage.src} alt="" />
                                </div>
                                <div className="portfolio_flex">
                                    <div className="portfolio_inner_left_section">
                                        <div className="portfolio_title">
                                            <h4>{ele.acf.portfolio_title}</h4>
                                        </div>
                                        <div className="portfolio_short_description">
                                            <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_short_description }}></p>
                                        </div>
                                        <div className="portfolio_technology">
                                            <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_technology }}></p>
                                        </div>
                                    </div>
                                    <div className="portfolio_inner_right_section">
                                        <div className="port_showcase_category">
                                            {ele.category.map((cat, index) => (
                                                <p key={index}>{cat}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No Portfolio items available.</p>
                )}
            </div>
        </>
    );
};

export default PortfolioChild;

