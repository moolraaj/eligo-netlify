
'use client'
import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { emptyImage } from "../../../../public/assets/images";
function Footer({ response }) {
  let api = allExportedApi()

  const [result, setResult] = useState([])
  const [data, setData] = useState([])


  const fetchServices = async () => {

    let response = await api.fetchServicesPosts()
    setResult(response)
  }
   const allServicesLink = [...result].reverse();
  const fetchPortfolio = async () => {

    let response = await api.AllProducts()
    setData(response)
  }
  const allProductsLink = [...data].reverse();
  useEffect(() => {
    fetchServices()
    fetchPortfolio()
  }, [])



  const { copyrightText,
    copyrightTextSecond,
    footerEmail,
    footerHeading1,
    footerHeading2,
    footerPhoneNumberFirst,
    footerPhoneNumberSecond,
    socialLinks,
    footerHeading3,
    siteLogoUrl,
  } = response.footer




  return (
    <div className="footer_outer" style={{width: '100%', height: '100%', minHeight: '100px'}}>
      <div className="footer_inner">
        <div className="footer_wrapper">
          <div className='footer-left-section'></div>
          <div className="center-section-wrapper">
            <div className='footer-center-section'>
              <div className='center-section-first-inner-wrapper'>
                <div className='footer-top-headings'>
                  <Link href='/'>
                  <img src={siteLogoUrl || emptyImage.src} alt="footerLogo" style={{ width: '148px', height: '57px' }} />
                  </Link>
                  </div>
                <ul>
                  <li id='eligo-creative' className='common-btns'><span>{footerHeading1}</span></li>
                  <li id='app-web-design' className='common-btns'><span>{footerHeading2}</span></li>
                  <li id='dev-company' className='common-btns'><span>{footerHeading3}</span></li>
                </ul>
              </div>
              <div className='center-section-second-inner-wrapper'>
                <h1 className='footer-top-headings'>Our Services</h1>
                <div className="footer_ul_wrapper">
                  <menu className="footer_ul">
                  {allServicesLink && allServicesLink.map((ele) => (
                    <li key={ele.id}>
                      <Link href={`/services/${ele.slug}`}>{ele.acf.services_title}</Link>
                    </li>
                  ))}
                  </menu>
                </div>
              </div>
              <div className='center-section-third-inner-wrapper'>
                <h1 className='footer-top-headings'>Our Products</h1>
                <div className="footer_ul_wrapper">
                <menu className="footer_ul">
                  {allProductsLink && allProductsLink.map((ele) => (
                    <li key={ele.id}>
                      <Link href={`/our-products/${ele.slug}`}><p dangerouslySetInnerHTML={{ __html: ele.acf.product_name }}></p></Link>
                    </li>
                  ))}
                  </menu>
                </div>
              </div>
              <div className='center-section-fourth-inner-wrapper'>
                <h1 className='footer-top-headings'>Contacts</h1>
                  <menu className="footer_ul">

                  <li><Link className='footer_mail' href={`mailto:${footerEmail}`}>{footerEmail}</Link></li>
                  <div className="footer_contact_one">
                  <li>For General Queries:  </li>
                  <li><Link href={`tel:${footerPhoneNumberFirst}`}>+91 {footerPhoneNumberFirst}</Link></li>
                  </div>
                <div className="footer_contact_second">
                <li>For Human Resources:  </li>
                  <li><Link href={`tel:${footerPhoneNumberSecond}`}>+91 {footerPhoneNumberSecond}</Link></li>
                </div>
                  </menu>
                
                <div className="footer_social_links">
                  {
                   socialLinks && socialLinks.map((ele, index) => {
                      return <div className="footer_social_wrapper" key={index}>
                        <Link href={ele.iconUrl}>
                          <img src={ele.imageUrl || emptyImage.src} alt={ele.iconName} />
                        </Link>

                      </div>
                    })
                  }
                </div>
              </div>

            </div>
            <div className="footer-center-bottom-section">
              <div className="footer_pages_menu">
                <Link href={`/terms-and-conditions`}>T&C</Link>
                <Link href={`/privacy-policy`}>Privacy Policy</Link>
              </div>
              <p>{copyrightTextSecond}</p>
            </div>
          </div>

          <div className='footer-right-section'>
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
