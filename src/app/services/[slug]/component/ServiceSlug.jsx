'use client'
import CallToAction from "@/app/call-to-action/callToAction";
import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { emptyImage } from "../../../../../public/assets/images";
import ServicesSlugFaq from "./ServicesSlugFaq";


function ServicesInnerSlug({ slug }) {
   let api = allExportedApi()

   const [data, setData] = useState([]);
   let [services, setServices] = useState([])

   const funcLoadSingleSrvices = async () => {
      const response = await api.fetchParentandChildPosts(slug);
      setData(response)
   }
   const funcLoadAllSrvices = async () => {
      let response = await api.fetchServicesPosts()
      setServices(response)
   }
   useEffect(() => {
      funcLoadSingleSrvices()
      funcLoadAllSrvices()
   }, [])


    let{parent_posts,child_posts}=data

    

     
    
    

   return (
      <>
      <div className="services_inner_template">
         <div className="page_top">
            {parent_posts && parent_posts.map((ele) => {
               const relatedServices = services.filter(relServices => relServices.slug !== ele.slug);
               return <div className="services_inner_template_wrapper" key={ele.id}>

                  <div className="portfolio_page_top_section career_inner_page_top">
                     <div className="portfolio_heading_image_wrapper">
                        <div className="portfolio_page_top_heading">
                           <h1>{ele.acf.services_title || ""}</h1>
                        </div>
                        <div className="portfolio_page_top_image">
                           <img src={ele.acf.banner_image || emptyImage.src} alt={ele.acf.services_title || ""} />
                           <div className="divider-yellow"></div>
                           <div className="portfolio_inner_top_right_section">
                     <div className="services_inner_heading">
                     <h1>{ele.acf.services_title || ""}</h1>
                     </div>
                        <p>{ele.acf.service_inner_page_top_description || ""}</p>
                     </div>
                        </div>
                     </div>
                     
                  </div>

                  <div className="serices_flex_template">
                     <div className="services_left_sec">
                        <div className="services_inner_heading">
                           <h1>{ele.acf.services_inner_heading || ""}</h1>
                        </div>
                        <div className="services_inner_description">
                           <span dangerouslySetInnerHTML={{ __html: ele.acf.services_description || ""}}></span>
                        </div>
                     </div>
                     <div className="services_right_sec">
                        <h1>Related Services</h1>
                        <div className="related-services">
                           {
                             relatedServices && relatedServices.map((items) => {
                                 return <div key={items.id}>

                                    <ul>
                                       <li>
                                          <Link href={`/services/${items.slug}`}>{items.acf.services_title || ""}</Link>
                                       </li>
                                    </ul>
                                 </div>

                              })
                           }
                        </div>
                     </div>
                  </div>

                  <div className="services_development_process_wrapper">
                  {Array.isArray(ele.acf?.inner_development_process) ? (
                           ele.acf.inner_development_process.map((process, index) => (
                              <div className={`process_flex_template process_template-${index % 2 === 0 ? "even" : "odd"}`} key={index}>
                                 <div className="process_left_section">
                                    <div className="inner_process_heading">
                                       <h1>{process.services_process_heading || "Process Heading"}</h1>
                                    </div>
                                    <div className="process_description">
                                       <p dangerouslySetInnerHTML={{ __html: process.services_process_description || "" }}></p>
                                    </div>
                                 </div>
                                 <div className="process_right_section">
                                    <div className="process_image">
                                       <img src={process.services_process_image || emptyImage.src} alt='services_process_image' />
                                    </div>
                                 </div>
                              </div>
                           ))
                        ) : (
                           ""
                        )}
                  </div>
                  <div className="services_dont_miss_out">
                  <div className="services_development_process_wrapper">
                  {Array.isArray(ele.acf?.dont_miss_out_section) ? (
                           ele.acf.dont_miss_out_section.map((missout, index) => (
                              <>
                              <div className="services_missout_heading">
                              <h1>Don't Miss Out</h1>
                           </div>
                              <div className={`process_flex_template process_template-${index % 2 === 0 ? "odd" : "even"}`} key={index}>
                                 <div className="process_left_section">
                                    <div className="inner_process_heading">
                                       <h1>{missout.dont_miss_out_tittle || ""}</h1>
                                    </div>
                                    <div className=" servives_missout_description">
                                       <div dangerouslySetInnerHTML={{ __html: missout.dont_miss_out_description || " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available" }}></div>
                                    </div>
                                 </div>
                                 <div className="process_right_section">
                                    <div className="process_image">
                                       <img src={missout.dont_miss_out_image || emptyImage.src} alt='services_process_image' />
                                    </div>
                                 </div>
                              </div>
                              </>
                           ))
                        ) : (
                           ""
                        )}
                  </div>
                  </div>
                 

                  <div className="services_inner_page_faq">
                     <ServicesSlugFaq ele={ele}/>
                  </div>

                  <div className="services_inner_packages_serction">
                    
                        {Array.isArray(ele.acf?.services_inner_packages_section) ? (
                ele.acf.services_inner_packages_section.map((packages, index) => (
                  <>
                   <h2 id="packgae_for">{ele.acf.package_heading || ""}</h2>
                     <h3>Select Plan</h3>
                     <div class="package-divider-separator">
                        <span></span>
                        <div class="package_divide_icon"> 
                        <svg  style={{width: '30px',height: '30px'}} aria-hidden="true" class="e-font-icon-svg e-fas-ellipsis-h" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                           <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
                           </svg>
                           </div>
                           <span></span>
                           </div>
                           <div className="services_package" key={index}>
                        {Object.entries(packages).map(([key, pkg], idx) => {
                           const firstWord = key.split('_')[0];
                           return(
                              <div className="package" key={idx}>
                              <h3 id="package_type">{firstWord.charAt(0).toUpperCase() + firstWord.slice(1) || ""}</h3>
                                <div className="package_info">
                                <img id="service_package_image" src={pkg.package_image || emptyImage.src} alt={`${key} image`} />
                                <h2>{pkg.package_price || ""}</h2>
                                <b>{pkg.package_period || ""}</b>
                                <div className="package_divider_bottom"><span></span></div>
                                <div dangerouslySetInnerHTML={{ __html: pkg.package__description || ""}}></div>
                                </div>
                                <div className="view_more">
                                <Link href={`/`}>View More</Link>
                                </div>
                               
                            </div>
                           )
                        })}
                    </div>
                  </>
                    
                ))
            ) : (
                ""
            )}
                  </div>
               </div>
            })}






            
         </div>


         {
            child_posts?.map((ele)=>{
               return <div key={ele.id}>

                  <h1>{ele.title.rendered}</h1>
                  <Link href={`/services/${slug}/${ele?.slug}`}>{ele.slug}</Link>

               </div>
            })
         }




         <div className="call_outer inner_services">
            <div className="inner_call">
               <CallToAction />
            </div>

         </div>
         </div>
      </>
   );
}

export default ServicesInnerSlug;