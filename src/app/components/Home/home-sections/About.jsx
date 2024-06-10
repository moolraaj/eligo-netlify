'use client'
import React from 'react'
import Link from 'next/link'

function AboutSection({ ele }) {
  // Fallback content while data is loading
  const fallbackData = {
    acf: {
      about_heading: "Loading...",
      about_para_first: "Loading...",
      about_para_second: "Loading..."
    }
  };

  // Extract dynamic data or use fallback data
  const data = ele || fallbackData;

  return (
    <div className="page_outer about_section_outer scrolling">
      <div className="page_inner about_section_inner">
        <div className="home_about_wrapper">
          <div className="home_about_left">
            <h1>{data.acf.about_heading}</h1>
          </div>
          <div className="home_about_right">
            <p dangerouslySetInnerHTML={{ __html: data.acf.about_para_first }}></p>
            <p  dangerouslySetInnerHTML={{ __html: data.acf.about_para_second }}></p>

            <Link href={`/meet-our-team`} className="meet_our_team">
            Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
