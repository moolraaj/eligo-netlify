'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { allExportedApi } from '@/utils/apis/Apis';
import PortfolioSlider from './portfolioSlider';
import { arrow, emptyImage } from '../../../../../public/assets/images';


export default function Portfolioslug({ slug }) {
    let api = allExportedApi();

 
    const [data, setData] = useState([]);
    const [relatedPortfolio, setRelatedPortfolio] = useState([]);

    const loadSinglePortfolio = async () => {
        let response = await api.fetchSingleportFolio(slug);
        setData(response);
    };

    const loadAllPortfolio = async () => {
        let response = await api.fetchAllportFolio();
        setRelatedPortfolio(response);
    };

    useEffect(() => {
        loadSinglePortfolio();
        loadAllPortfolio();
    }, []);

    
  

  

     
    const itemRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [backButtonOpacity, setBackButtonOpacity] = useState(1);

    const handleScrollLeft = () => {
        itemRef.current.scrollLeft -= 350;
        const containerWidth = itemRef.current.offsetWidth;
        const scrollPercentage = ((scrollLeft - itemRef.current.scrollLeft) / containerWidth) * 100;
        if (scrollPercentage >= 0) {
            setBackButtonOpacity(1);
        } else {
            setBackButtonOpacity(0);
        }
    };

    const handleScrollRight = () => {
        itemRef.current.scrollLeft += 350;
        setBackButtonOpacity(0);
    };

    let relatedReversedPortfolio = [...relatedPortfolio].reverse();

    return (
        <>
            {data && data.map((ele) => {
                const Portfolio = relatedReversedPortfolio.filter(p => p.slug !== ele.slug);
                return (
                    <div className="portfolio_inner_template" key={ele.id}>
                        <div className="portfolio_inner_section">
                            <div className="portfolio_top_section">
                                <div className="portfolio_top_flex">
                                    <div className="portfolio_top_left_section">
                                        <div className="portfolio_inner_page_image_heading_section">
                                            <div className="portfolio_top_left_heading">
                                                <h3>{ele.acf.portfolio_title}</h3>
                                            </div>
                                            <div className="portfolio_top_image">
                                                <img src={ele.acf.portfolio_inner_image || emptyImage.src} alt="Portfolio Image" />
                                                <span></span>
                                            </div>
                                        </div>

                                        <div className="portfolio_top_right_section">
                                            <h1>{ele.acf.portfolio_title}</h1>
                                            <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_inner_page_top__description }}></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="top_bottom_bar"></div>
                            </div>

                            <div className='portfolio_inner_intenary_related_posts'>
                                <div className="portfolio_relative_description">
                                    <div className="port_description">
                                        <p dangerouslySetInnerHTML={{ __html: ele.acf.portfolio_description }}></p>
                                    </div>
                                </div>
                                <div className="portfolio_inner_related_posts">
                                    <div className="portfolio_related_posts_inner">
                                        <h3>Related Posts</h3>
                                        {Portfolio && Portfolio.map((e, index) => (
                                            <Link key={index} href={`/portfolio/${e.slug}`}>{e.acf.portfolio_title}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio_project">
                            <div className="portfolio_projects_flex">
                                <div className="portfolio_project_heading">
                                    <h1>{ele.acf.portfolio_title}</h1>
                                    <Link
                                        className='back-to-projects'
                                        href={`/portfolio`}
                                        style={{ opacity: backButtonOpacity, position: 'absolute', padding: '15px 20px', background: '#EAAA00', borderRadius: "20px", display: 'inline-flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }}
                                    >
                                        Back To All Project
                                    </Link>
                                </div>

                        
                                <img src={arrow.src || emptyImage.src} alt="arrow" className="scroll-button left"
                                    onClick={handleScrollLeft}
                                    style={{
                                        top: '50%',
                                        left: '10px',
                                        transform: 'translateY(-50%) rotate(180deg)',
                                    }} />

                          
                                <img src={arrow.src || emptyImage.src} alt="arrow" className="scroll-button right"
                                    onClick={handleScrollRight}
                                    style={{
                                        top: '50%',
                                        right: '10px',
                                        transform: 'translateY(-50%)',
                                    }} />

                                <div className='scrolling_portfolio_section' ref={itemRef}>
                                    <div className='portfolio_inner'>
                                        <div className="portfolio_right_section">
                                            {Portfolio && Portfolio.map((ele) => (
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
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="port_slider_outer">
                            <div className="port_slider_inner">

                        <PortfolioSlider data={ele.acf.portfolio_gallery}/>
                            </div>
                        </div>


                       
                    </div>
                );
            })}
        </>
    );
}

 
