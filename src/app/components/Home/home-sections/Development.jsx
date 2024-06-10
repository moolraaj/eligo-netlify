'use client'
import React, { useEffect, useState } from 'react'

function DevelopmentSection({ele,result}) {  
    const [scrolling, setScrolling] = useState([]);
    useEffect(() => {
        const scrollHandler = () => {
          let posY = window.scrollY;
          let positions = result.map(
            (_, index) => posY + index * window.innerHeight
          );
          setScrolling(positions);
        };
    
        window.addEventListener("scroll", scrollHandler);
        return () => {
          window.removeEventListener("scroll", scrollHandler);
        };
      }, []);
  return (
   
   <>
<div className="page_outer development_section_outer scrolling">
    <div className="page_inner development_section_inner">
        <div className="home_development_wrapper">
            <div className="development_flex">
                <div className={`development_left_section ${window.scrollY <= scrolling[0] ? "sticky" : ""}`}>
                    <h1>{ele.acf.our_development_heading}</h1>
                </div>
                <div className="development_right_section">
                    {ele.acf.our_development_repeater.map((items, index) => {
                        return (
                            <div className={`development_scroll ${window.screenY <= scrolling[index] ? "sticky" : ""}`} style={{ top: index * 100 + " vh" }} key={index}>
                                <div className="develop_number">
                                    <h4  id={`heading-${index + 1}`}> 
                                        <span aria-hidden="true">{index + 1}</span> 
                                    </h4>
                                </div>
                                <div className="develop_heading">
                                    <h4 >{items.development_heading}</h4>
                                </div>
                                <div className="develop_para">
                                    <p >{items.development_paragraph}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
</div>

   </>
  )
}

export default DevelopmentSection
