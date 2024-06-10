
import React, { useRef, useState } from 'react';
import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';
import arrow from '../../../../../public/assets/headerAssets/arrow.png'
import { emptyImage } from '../../../../../public/assets/images';

function PortfolioSection() {
    const itemRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleScrollLeft = () => {
        itemRef.current.scrollLeft -= 350; // Adjust the scrolling speed as needed
        
    };
    

    const handleScrollRight = () => {
        itemRef.current.scrollLeft += 350; // Adjust the scrolling speed as needed
       
    };

    return (
        <div className='page_outer portfolio_section_outer scrolling'>
            <div className='portfolio_wrapper'>
                <div className='portfolio_left_section'>
                    <h1>Explore Our Work</h1>
                </div>
                <div className='scrolling_portfolio_section' ref={itemRef}>
                    <div className='portfolio_inner'>
                        <PortfolioComponent />
                    </div>
                </div>
                {/* Left Scroll Button */}
                <img src={arrow.src || emptyImage.src} alt="arrow" className="scroll-button left"
                    onClick={handleScrollLeft}
                    style={{
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%) rotate(180deg)',
                    }} />
               
                {/* Right Scroll Button */}
                
                    <img src={arrow.src || emptyImage.src} alt="arrow"  className="scroll-button right"
                    onClick={handleScrollRight}
                    style={{
                       
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)', 
                    }} />
            </div>
        </div>
    );
}

export default PortfolioSection;
