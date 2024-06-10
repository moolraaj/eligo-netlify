'use client'
import React, { useEffect, useState } from 'react'
import Map from '../map'
import ContactUsForm from '@/app/_forms/contactusform'
import { allExportedApi } from '@/utils/apis/Apis'
import { emptyImage } from '../../../../public/assets/images'



function ContactUs() {

    let api = allExportedApi()
    const [data, setData] = useState([])

    const loadContactusPage = async () => {
        let response = await api.contactUsPageApi()
        setData(response)

    }

    useEffect(() => {
        loadContactusPage()
    }, [])

    return (
        <>
            {data && data.map((ele) => {
                return <div className="contact_wrapper" key={ele.id}>


                    <div className='contact_usform_top_section'>
                        <div className='contact_usform_inner_section'>

                            <div className='contact_us_l'>
                                <h1>Contact <span>Us Now</span></h1>
                            </div>
                            <div className='contact_us_r'>
                                <div className='right_c_form'>
                                    <h4>Contact Details</h4>
                                    {ele.acf.contact_details.map((mail, index) => {
                                        return <div className='user_c_contact' key={index}>

                                            <h5 className='title_heading_c'>
                                                {mail.contact_service_name}
                                            </h5>
                                            <h5 className='user_name_c'>{mail.contact_user_name}</h5>
                                            <h6 className='user_name_c'>
                                                <a href={`mailto:${mail.contact_email_address}`}>{mail.contact_email_address}</a>
                                            </h6>

                                        </div>
                                    })}

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='lower_sec_c'>

                        <div className='left_lower_s'>
                            <h3>Make an Enquiry</h3>
                            <ContactUsForm />
                        </div>

                        <div className='right_lowe_s'>
                            <div className='both_location'>
                            <h6>Give us a Call</h6>
                                <div className="contact_numbers_wrapper">
                                    
                                    {
                                        ele.acf.contact_number.map((number, index) => {
                                            return <div className='contact_number' key={index}>
                                                <label htmlFor={number.number_label}>{number.number_label}</label>
                                                <a href={`tel:${number.call_number}`}>+91 {number.call_number}</a>
                                            </div>

                                        })
                                    }
                                </div>
                            </div>
                            <div className='location_b_c'>
                                <Map />


                                <div className='contact_both_sec'>
                                    <div className='contact_twins_inner_l'>


                                        <div className='both_location'>
                                            <h6>Send us an Message</h6>
                                            <div className="contact_mail">
                                                <a href={`mailto:${ele.acf.contact_with_mail}`}>{ele.acf.contact_with_mail}</a>
                                            </div>
                                            <div className='social_icons'>
                                                {ele.acf.contact_services_social_icons.map((icons, index) => {
                                                    return <div className="contact_social_wrapper" key={index}>

                                                        <div className="contact_social_link">
                                                            <li>
                                                                <a href={icons.icon_link} target='_blank'>
                                                                    <img src={icons.social_media || emptyImage.src} alt="" srcset="" />
                                                                </a>
                                                            </li>
                                                        </div>

                                                    </div>
                                                })}

                                            </div>
                                        </div>
                                    </div>

                                    <div className='contact_twins_inner_r'>
                                        <div className='both_location'>
                                            <h6>we’re call the map</h6>
                                            <div className="our_location">
                                                <li>{ele.acf.services_address_location}</li>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            })}


        </>
    )
}

export default ContactUs
