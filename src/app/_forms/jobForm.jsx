'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import React, { useState } from 'react';
 import { toast } from 'sonner';
 import ReCAPTCHA from 'react-google-recaptcha';

function JobForm() {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const api = allExportedApi();
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        youremail: '',
        phone: '',
        companyname: '',  
        budget: '',  
        yourmessage: ''  
    });

    const [errors, setErrors] = useState({
        firstname: false,
        lastname: false,
        youremail: false,
        phone: false,
    });

    const getUserData = (e) => {
        const { name, value } = e.target;
        if (name === 'phone' && value.length > 10) {
            return;
          }
        setUser({
            ...user,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: false,
        });
    };
    const onReCAPTCHAChange = (token) => {
        setRecaptchaToken(token);
         
      };

    const submitUserData = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('_wpcf7_unit_tag', 902);
        formData.append('firstname', user.firstname);
        formData.append('lastname', user.lastname);
        formData.append('youremail', user.youremail);
        formData.append('phone', user.phone);
        formData.append('companyname', user.companyname);
        formData.append('budget', user.budget);
        formData.append('yourmessage', user.yourmessage);
        formData.append('g-recaptcha-response', recaptchaToken);


        let formValid = true;
        const requiredFields = Object.keys(errors);
        requiredFields.forEach(field => {
            if (!user[field]) {
                formValid = false;
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [field]: true,
                }));
            }
        });
        if (!recaptchaToken) {
            formValid = false;
            toast.error('Please complete the reCAPTCHA');
          }

        if (formValid) {
            try {
                let response = await api.fetchJobFormApi({
                    method: 'POST',
                    body: formData
                });
                
                toast.success(`<div style='font-size:16px'>Thank you, <span style="font-weight: bold; color: #EAAA00;">${user.firstname}</span> , for contacting us! Our team will be in touch with you soon.</div>`);
                console.log(response)

                setUser({
                    firstname: '',
                    lastname: '',
                    youremail: '',
                    phone: '',
                    companyname: '',
                    budget: '',
                    yourmessage: ''
                });
            } catch (error) {
                toast.error('Mail not send')
            }
        }
    };

    return (
        <>
            <form id='jobform'>
                <div className="job_form_flex_wrapper">
                    <div className="form_fields_wrapper">
                        <input type="text" name="firstname" placeholder='first name' value={user.firstname} onChange={getUserData} />
                        {errors.firstname && <span className='error_fields'>first name is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="text" name="lastname" placeholder='last name' value={user.lastname} onChange={getUserData} />
                        {errors.lastname && <span className='error_fields'>last name is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="email" name="youremail" placeholder='email address' value={user.youremail} onChange={getUserData} />
                        {errors.youremail && <span className='error_fields'>email is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="number" name="phone" placeholder='phone number' value={user.phone} onChange={getUserData} />
                        {errors.phone && <span className='error_fields'>phone number is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="text" name="companyname" placeholder='company name' value={user.companyname} onChange={getUserData} />
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="text" name="budget" placeholder='budget' value={user.budget} onChange={getUserData} />
                    </div>
                    <div className="form_fields_wrapper">
                        <textarea name="yourmessage" placeholder="Enter your message" value={user.yourmessage} onChange={getUserData} cols="30" rows="50"></textarea>
                    </div>
                    <div className="recaptcha_section">
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={onReCAPTCHAChange} />
                    </div>
                    <div className="form_fields_wrapper">
                    <div className="form_button">
                        <button onClick={submitUserData}>Submit</button>
                        </div>
                    </div>
                </div>  
            </form>
        </>
    );
}

export default JobForm;
