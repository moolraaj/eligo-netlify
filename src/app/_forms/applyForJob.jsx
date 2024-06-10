'use client';
import { allExportedApi } from '@/utils/apis/Apis';  
import React, { useState } from 'react';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha';

function ApplyForJob() {
    let api = allExportedApi();
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [user, setUser] = useState({
        yourname: '',
        youremail: '',
        yourlocation: '',
        curruntstatus: '',
        applyingfor: '',
        uploadresume: null,
        yourmessage: '',
    });

    const [errors, setErrors] = useState({
        yourname: false,
        youremail: false,
        yourlocation: false,
        curruntstatus: false,
        applyingfor: false,
        uploadresume: false,
    });
    const onReCAPTCHAChange = (token) => {
        setRecaptchaToken(token);
      
      };

    const getUserData = (e) => {
        const { name, value, files } = e.target;
        setUser({
            ...user,
            [name]: name === 'uploadresume' ? files[0] : value,
        });

        setErrors({
            ...errors,
            [name]: false,
        });
    };

    const submitUserData = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('_wpcf7_unit_tag', 944);
        formData.append('yourname', user.yourname);
        formData.append('youremail', user.youremail);
        formData.append('yourlocation', user.yourlocation);
        formData.append('curruntstatus', user.curruntstatus);
        formData.append('applyingfor', user.applyingfor);
        formData.append('uploadresume', user.uploadresume);
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
                let response = await api.fetchApplyForJobApi({
                    method: 'POST',
                    body: formData,
                });
                console.log(response);

                toast.success(`<div style='font-size:16px'>Thank you, <span style="font-weight: bold; color: #EAAA00;">${user.yourname}</span> , for contacting us! Our team will be in touch with you soon.</div>`);

                setUser({
                    yourname: '',
                    youremail: '',
                    yourlocation: '',
                    curruntstatus: '',
                    applyingfor: '',
                    uploadresume: null,
                    yourmessage: '',
                });
            } catch (error) {
                toast.error('Mail not sent');
            }
        }
    };

    return (
        <>
            <form id='applyforjob'>
                <div className="job_form_flex_wrapper">
                    <div className="form_fields_wrapper">
                        <input type="text" name="yourname" placeholder='name' value={user.yourname} onChange={getUserData} />
                        {errors.yourname && <span className='error_fields'>name is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="email" name="youremail" placeholder='email address' value={user.youremail} onChange={getUserData} />
                        {errors.youremail && <span className='error_fields'>email is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="text" name="yourlocation" placeholder='current location' value={user.yourlocation} onChange={getUserData} />
                        {errors.yourlocation && <span className='error_fields'>current location is required</span>}
                    </div>
                    <div className="form_fields_wrapper_radio_select apply_job_select_box_wrapper">
                        <div className="form_fields_wrapper">
                            <div className="applyjob_select_box">
                                <select className='select_duration' name="curruntstatus" value={user.curruntstatus} onChange={getUserData}>
                                    <option value="">current status</option>
                                    <option value="fresher">Fresher</option>
                                    <option value="experienced">Experienced</option>
                                </select>
                                {errors.curruntstatus && <span className='error_fields'>current status is required</span>}
                            </div>
                        </div>
                    </div>
                    <div className="form_fields_wrapper_radio_select apply_job_select_box_wrapper">
                        <div className="form_fields_wrapper">
                            <div className="applyjob_select_box">
                                <select className='select_duration' name="applyingfor" value={user.applyingfor} onChange={getUserData}>
                                    <option value="">Applying For</option>
                                    <option value="Laravel-Vue.js Developer">Laravel-Vue.js Developer</option>
                                    <option value="Sr. WordPress Developer">Sr. WordPress Developer</option>
                                    <option value="Laravel Developer">Laravel Developer</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Web Designing">Web Designing</option>
                                    <option value="Sales Executive">Sales Executive</option>
                                    <option value="Trainer Web Development">Trainer Web Development</option>
                                </select>
                                {errors.applyingfor && <span className='error_fields'>This field is required</span>}
                            </div>
                        </div>
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="file" name="uploadresume" className="custom-file-upload" onChange={getUserData} />
                        {errors.uploadresume && <span className='error_fields'>This field is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <textarea name="yourmessage" placeholder="additional information" value={user.yourmessage} onChange={getUserData} cols="30" rows="10"></textarea>
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

export default ApplyForJob;

 
