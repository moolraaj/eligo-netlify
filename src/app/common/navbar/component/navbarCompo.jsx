'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioComponent from '@/app/portfolio/component/portfolioComponent';
import JobForm from '@/app/_forms/jobForm';
import RerenderCompo from './formAnimationCompo';
import ApplyForJob from '@/app/_forms/applyForJob';
import MultistepForm from '@/app/_forms/multistepForm';
import { emptyImage,closeMenuIcon,FormLogo,formClose,arrow} from '../../../../../public/assets/images';



function NavbarCompo({ data }) {

  const { siteLogoUrl, siteTitle, headerMenuItems, socialLinks, footerPhoneNumberFirst, footerPhoneNumberSecond, footerEmail } = data.header

  const [isOpen, setIsOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [ismultisepPopupForm, setIsMultisepPopupForm] = useState(false);
  const [isApplyJobVisible, setIsApplyJobVisible] = useState(false);
  

  const showApplyJob = () => {
    setIsApplyJobVisible(true);
  };

  const closeApplyJob = () => {
    setIsApplyJobVisible(false);
  };

  const multisepPopupForm = () => {
    setIsMultisepPopupForm(!ismultisepPopupForm);
  }
 

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };



  const NavigationLink = ({ href, children }) => (

    <Link href={href} className="nav-link" onClick={closeMenu}>
      {children}
    </Link>


  );

 
  


  return (
    <>


      {isFormVisible && (

        <div className="cf7_form_outer" style={{ animation: isFormVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">
              <div className="cf7_left_section">
                <div className="form_banner_heading">

                  <h1>hello</h1>
                </div>

                <div className="form_slider_wrapper apply_for_job">
                  <div className="_form_paragraph">
                    <p>
                      Let's work on
                    </p>
                  </div>
                  <div className="form_slides">
                    <RerenderCompo />
                  </div>
                </div>


              </div>

              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={toggleFormVisibility} className="close_button">
                    <img src={formClose.src || emptyImage.src} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="cf7_form_wrapper">
              <JobForm />
            </div>

          </div>
        </div >
      )
      }



      {isApplyJobVisible && (
        <div className="cf7_form_outer" style={{ animation: isApplyJobVisible ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
          <div className="cf7_form_inner">
            <div className="cf7_top_banner">

              <div className="cf7_left_section">
                <div className="form_banner_heading">

                  <h1>apply now</h1>
                </div>

                <div className="form_slider_wrapper">
                  <div className="_form_paragraph">
                    <p>
                      apply for job
                    </p>
                  </div>
                </div>


              </div>

              <div className="cf7_right_section">
                <div className="close_button">
                  <button onClick={closeApplyJob} className="close_button" aria-label='close poup form'>
                    <img src={formClose.src || emptyImage.src} alt="" srcset="" />
                  </button>
                </div>
              </div>

            </div>
            <div className="cf7_form_wrapper">
              <ApplyForJob />
            </div>
          </div>
        </div>
      )}

      {ismultisepPopupForm && (
        <div className="multistep_popup_form">
          <div className="cf7_form_outer" style={{ animation: ismultisepPopupForm ? 'slide-down 0.5s' : 'slide-up 0.5s' }}>
            <div className="cf7_form_inner">
              <div className="cf7_form_wrapper">
                <MultistepForm onHideForm={multisepPopupForm} onCompleteForm={multisepPopupForm} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className='top_bar_black'>
<div className="contacts_top_header">
                <div className='righ-top_black'>
              <div className="header_contact_one">
                  <li><img src={callIconOne.src || emptyImage.src} alt="callIconOne" /><span>For General Queries</span> </li>
                  <li><a href={`tel:${footerPhoneNumberFirst}`}>+91 {footerPhoneNumberFirst}</a></li>
                  </div>
                <div className="header_contact_second">
                <li><img src={callIconTwo.src || emptyImage.src} alt="callIconTwo" /><span>For Human Resources:</span></li>
                  <li><a href={`tel:${footerPhoneNumberSecond}`}>+91 {footerPhoneNumberSecond}</a></li>
                </div>
              </div>

             
              <div className="mail_header">
                <li><img src={mailIcon.src || emptyImage.src}  alt="mailIcon" /></li>
                <li><a  href={`mailto:${footerEmail}`}>{footerEmail}</a></li>
                </div>
  


</div>
</div> */}

      <div className="nav_outer">
        <div className="nav_inner">
          <div className="nav_flex">
            <div className="nav_left_section">

              <Link className="navbar-brand" href="/">
                <img src={siteLogoUrl || emptyImage.src} alt={siteTitle} style={{ width: '9.25rem', height: '3.5625rem', objectFit: 'cover' }} />
              </Link>

            </div>

            <div className="nav_right_section">
              <button onClick={multisepPopupForm} id='go_to_internship_page' aria-label="internship_page">Enquire Now</button>
              <button onClick={toggleFormVisibility} aria-label="show form">
                <img src={FormLogo.src || emptyImage.src} alt="formLogo" />
              </button>
              <button className="nav-toggler" onClick={toggleMenu} aria-label="toggle_navigation_menu">
                <span className="nav-toggler-icon"></span>
                <span className="nav-toggler-icon"></span>
                <span className="nav-toggler-icon"></span>
              </button>
            </div>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <div className="nav-left">
                <div className="header-menu-seperate-container-left">
                  <h1 className="blog_section_menu">Explore Our Work</h1>
                  <div className="header-portfolio-section">
                    <NavigationLink href={'/'}><PortfolioComponent /></NavigationLink>
                  </div>

                </div>
              </div>
              <div className="nav-right">
                <div className="header-menu-seperate-container-right">
                  <div className="menu-right-container-top">

                    <img src={closeMenuIcon.src || emptyImage.src} alt="closeMenuIcon" style={{ float: 'right' }} onClick={closeMenu} />
                  </div>
                  <div className="menu-right-container-bottom">
                    {/* {
                    headerMenuItems.map((ele)=>{
                      return <ul key={ele.ID}>
                        <NavigationLink href={`${ele.pageSlug}`}>{ele.pageSlug}</NavigationLink>
                      </ul>
                    })
                  } */}

                    <NavigationLink href={'/'}>home</NavigationLink>
                    <div className="navbar_toggle_navigation">
                      <NavigationLink href={'/about'}>about us</NavigationLink>
                      <div className="hide_seek_wrapper">

                        <button aria-label='toggle_navlinks'>
                          <img src={arrow.src || emptyImage.src} alt="arrow" />
                        </button>
                        <div></div>
                        <div className="hide_seek blogs" >
                          <NavigationLink href={'/meet-our-team'}>our team</NavigationLink>


                        </div>
                      </div>

                    </div>
                    <NavigationLink href={'/career'}>career</NavigationLink>
                    <NavigationLink href={'/blogs'}>blog</NavigationLink>
                    <NavigationLink href={'/services'}>services</NavigationLink>
                




                    <div className="navbar_toggle_navigation">
                      <NavigationLink href={'/courses'}>courses</NavigationLink>
                      <div className="hide_seek_wrapper course_hide_seek_wrapper">

                        <button aria-label='toggle_navlinks'>
                          <img src={arrow.src || emptyImage.src} alt="arrow" />
                        </button>

                        <div className="hide_seek blogs course_toggle " >

                          <NavigationLink href={'/our-internship'} >our internship</NavigationLink>



                        </div>
                      </div>

                    </div>






                    <NavigationLink href={'/portfolio'}>portfolio</NavigationLink>
                    <NavigationLink href={'/our-products'}>our products</NavigationLink>


                    <div className='apply_now_navgation'>
                      <NavigationLink href={'/contact'}>contact us</NavigationLink>
                      <span className="form_button">
                        <button onClick={showApplyJob}>apply now</button>
                      </span>
                    </div>
                    <div className="header_contact_section">
                      <h2>Connect here with us :</h2>

                      <div className="header_bottom_social_icons">
                        <div className="contacts_infos">
                          <div className="footer_contact_one">
                            <li>For General Queries:  </li>
                            <li><Link href={`tel:${footerPhoneNumberFirst}`}>+91 {footerPhoneNumberFirst}</Link></li>
                          </div>
                          <div className="footer_contact_second">
                            <li>For Human Resources:  </li>
                            <li><Link href={`tel:${footerPhoneNumberSecond}`}>+91 {footerPhoneNumberSecond}</Link></li>
                          </div>

                        </div>
                        <div className='navbar_social_media'>
                          {
                           socialLinks && socialLinks.map((ele, index) => {
                              return <div key={index} className='header_media_icons'>
                                <Link href={ele.iconUrl} target='_blank'><img src={ele.imageUrl || emptyImage.src} alt='spcial-icons' /></Link>
                              </div>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>





          </div>

        </div>
      </div>


    </>


  );
}

export default NavbarCompo;