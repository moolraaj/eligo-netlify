'use client'
import React from "react";
import Link from "next/link";
import { emptyImage } from "../../../../../public/assets/images";

export default function Internshipslug({ data, allInternship }) {

  return (

    <>
      <div className="page_top">

        {
         data && data.map((internship, index) => {
            const relatedInterms = allInternship.filter(relInternship => relInternship.slug !== internship.slug);
            return (
              <div key={index} className="blog-header-section">
                <div className="blog-header-image-heading">
                  <div className="blog_img_heading_wrapper">
                    <h2>{internship.acf.internship_tittle}</h2>
                    <img src={internship.acf.internship_image || emptyImage.src} alt="internship_image" />
                    <span></span>
                  </div>
                  <div className="blog_page_heading_wrapper">
                    <h1>{internship.acf.internship_tittle}</h1>
                    <p >{internship.acf.internship_inner_page_top_description_}</p>
                  </div>
                </div>
                <div className="course_intro_join_section">
                  <div className="products_inner_description">
                    <p dangerouslySetInnerHTML={{ __html: internship.acf.internship_description }}></p>
                  </div>
                  <div className="related_product_wrapper">
                    <h2>Related interms</h2>
                    <div className="related_product_inner">
                      {relatedInterms && relatedInterms.map((relinterms, index) => {
                        return <div key={index} className="related_product">

                          <Link href={`/our-internship/${relinterms.slug}`}>{relinterms.acf.internship_tittle}</Link>
                        </div>

                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
     

     

    </>
  );
}








