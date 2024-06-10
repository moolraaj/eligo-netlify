
'use client'
import WorkingProcess from "./WorkingProcess";
import CallToAction from "@/app/call-to-action/callToAction";
import { useRouter } from "next/navigation";
import TestimonialSection from "../Home/home-sections/Testimonial";
import { allExportedApi } from "@/utils/apis/Apis";
import { useEffect, useState } from "react";
import { emptyImage } from "../../../../public/assets/images";




const AboutUs = () => {
  const [result, setResult] = useState([])
  const api = allExportedApi()

  const loadAboutPage = async () => {

    let data = await api.AboutApi();
    setResult(data)
  }

  useEffect(() => {
    loadAboutPage()
  }, [])
  let router = useRouter()


  return (
    <>

      {result && result.map((ele, index) => (
        <div id="about_us_cust" className="aboutpage-outer" key={index}>
          <div className="pages-inner about-inner">
            <div className="parallax-container">
              <div className="container-1">
                <div className="contents">
                  <div className="img-slider-container">
                    <div className="slider-inner">
                      <div className="marquee-container">
                        <div className="marquee">
                          {ele.acf.about_top_slider.map((slider, index) => (
                            <span key={index} style={{ display: "inline-block" }}>
                              <div className="slider">
                                <div style={{ display: "flex", }}>
                                  <img
                                    src={slider.top_slider_image_first.url || emptyImage.src}
                                    alt={`img${index + 1}`}
                                  />
                                  <div className="images-outer">
                                    <div></div>
                                    <div>
                                      <img
                                        src={slider.top_slider_image_second.url || emptyImage.src}
                                        alt={`img${index + 2}`}
                                      />
                                    </div>
                                    <div>
                                      <img
                                        src={slider.top_slider_image_third.url || emptyImage.src}
                                        alt={`img${index + 3}`}
                                      />
                                    </div>
                                    <div></div>
                                  </div>
                                  <img
                                    src={slider.top_slider_image_fourth.url || emptyImage.src}
                                    alt={`img${index + 4}`}
                                  />
                                </div>
                              </div>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="about-top-content">
                        <h1 className="uderline-text">
                          {ele.acf.top_heading_first}
                        </h1>
                        <h3>{ele.acf.top_heading_second}</h3>
                        <p>{ele.acf.top_para_first}</p>
                        <button id="get-in-tch" onClick={() => router.push('/contact')}>Get In Touch</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container" style={{ background: '#EAAA00' }}>
              <div className="container-2 about_vs" >
                <div className="content">
                  <div className="about-working-process">
                    <h3>
                      <strong>{ele.acf.working_process_heading}</strong>
                    </h3>
                    <WorkingProcess result={ele} />
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container" style={{ background: "#fff" }}>
              <div className="container-3 about_vs" >
                <div className="content_mission_our content">
                  <h1 className="uderline-text our-misson">
                    {ele.acf.our_mission_heading}
                  </h1>
                  <div className="our-mission-outer">
                    <div className="mission-left">
                      <p>
                        As a company offering{" "}
                        <span className="uderline-para">
                          professional web development
                        </span>{" "}
                        and{" "}
                        <span className="uderline-para">
                          web hostingservices,
                        </span>{" "}
                        <span className="uderline-para">
                          Eligo Creative Services
                        </span>{" "}
                        mission is to design unique, creative and innovative
                        products, as well as{" "}
                        <span className="uderline-para">
                          technological solutions
                        </span>
                        , for our clients. Our dedication to quality and{" "}
                        <span className="uderline-para">
                          customer satisfaction
                        </span>{" "}
                        ensures that we strive to meet tha needs and expectations
                        of our clients to nurture strong, long-term relationships
                        while adding more value to our business
                      </p>
                    </div>
                    <div className="mission-right">
                      <img src={ele.acf.our_mission_image.url || emptyImage.src} alt="ourMissionImg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container about_call_to_action" style={{ background: "#191C1B" }}>
              <div className="container-4 about_vs">
                <div className="content call_action_wrapper">
                  <div className="about_call_action">
                    <div className="inner_call">
                      <CallToAction />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parallax-container" style={{ background: "#fff" }}>
              <div className="container-5">
                <div className="content about_page_testimonial">
                  <TestimonialSection ele={ele} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutUs;
