import { allExportedApi } from '@/utils/apis/Apis';
import React, { useState } from 'react';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha';

function Internship() {
    let api = allExportedApi();
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [user, setUser] = useState({
        studentName: '',
        mobileNumber: '',
        emailAddress: '',
        collegeUniversity: '',
        stream: '',
        streamotheroption: '',
        duration: '',
    });

    const [errors, setErrors] = useState({
        studentName: false,
        mobileNumber: false,
        emailAddress: false,
        collegeUniversity: false,
        stream: false,
        streamotheroption: false,
        duration: false,
    });

    const getUserData = (e) => {
        const { name, value } = e.target;
        if (name === 'mobileNumber' && value.length > 10) {
            return;
        }
        setUser({
            ...user,
            [name]: value,
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

        formData.append('_wpcf7_unit_tag', 1376);
        formData.append('studentname', user.studentName);
        formData.append('mobilenumber', user.mobileNumber);
        formData.append('emailaddress', user.emailAddress);
        formData.append('collegeuniversity', user.collegeUniversity);
        formData.append('stream', user.stream);
        formData.append('streamotheroption', user.streamotheroption);
        formData.append('duration', user.duration);
        formData.append('g-recaptcha-response', recaptchaToken);

        let formValid = true;
        const requiredFields = Object.keys(errors);
        requiredFields.forEach(field => {
            if (field !== 'streamotheroption' && !user[field]) {
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
                let response = await api.fetchInternShipForApi({
                    method: 'POST',
                    body: formData,
                });

                console.log(response)

                toast.success(`<div style='font-size:16px'>Thank you, <span style="font-weight: bold; color: #EAAA00;">${user.studentName}</span>, for contacting us! Our team will be in touch with you soon.</div>`);

                setUser({
                    studentName: '',
                    mobileNumber: '',
                    emailAddress: '',
                    collegeUniversity: '',
                    stream: '',
                    streamotheroption: '',
                    duration: '',
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
                        <input type="text" name="studentName" placeholder='Student Name*' value={user.studentName} onChange={getUserData} />
                        {errors.studentName && <span className='error_fields'>Name is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="number" name="mobileNumber" placeholder='Mobile Number*' value={user.mobileNumber} onChange={getUserData} />
                        {errors.mobileNumber && <span className='error_fields'>Mobile number is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="email" name="emailAddress" placeholder='Email Address*' value={user.emailAddress} onChange={getUserData} />
                        {errors.emailAddress && <span className='error_fields'>Email address is required</span>}
                    </div>
                    <div className="form_fields_wrapper">
                        <input type="text" name="collegeUniversity" placeholder='College/University*' value={user.collegeUniversity} onChange={getUserData} />
                        {errors.collegeUniversity && <span className='error_fields'>Field is required</span>}
                    </div>


                </div>
                <div className="form_fields_wrapper_radio_select">
                    <label htmlFor="stream" className='stream_label'>Stream</label>
                    <div className="form_fields_wrapper radio_select_box">

                        <div className="internship_radio">
                            <label htmlFor="BSc">BSc</label>
                            <input type="radio" name="stream" value='BSc' checked={user.stream === 'BSc'} onChange={getUserData} />
                        </div>
                        <div className="internship_radio">
                            <label htmlFor="b.com">B.Com</label>
                            <input type="radio" name="stream" value='b.com' checked={user.stream === 'b.com'} onChange={getUserData} />
                        </div>
                        <div className="internship_radio">
                            <label htmlFor="b.tech">B.Tech</label>
                            <input type="radio" name="stream" value='b.tech' checked={user.stream === 'b.tech'} onChange={getUserData} />
                        </div>
                        <div className="internship_radio">
                            <label htmlFor="m.tech">M.Tech</label>
                            <input type="radio" name="stream" value='m.tech' checked={user.stream === 'm.tech'} onChange={getUserData} />
                        </div>
                        <div className="internship_radio">
                            <label htmlFor="bCA">BCA</label>
                            <input type="radio" name="stream" value='bCA' checked={user.stream === 'bCA'} onChange={getUserData} />
                        </div>
                        <div className="internship_radio">
                            <label htmlFor="MCA">MCA</label>
                            <input type="radio" name="stream" value='MCA' checked={user.stream === 'MCA'} onChange={getUserData} />
                        </div>
                        <div className="internship_radio">
                            <label htmlFor="Others">Others</label>
                            <input type="radio" name="stream" value='Others' checked={user.stream === 'Others'} onChange={getUserData} />
                        </div>
                        {errors.stream && <span className='error_fields'>This field is required</span>}
                    </div>
                    {user.stream === 'Others' && (
                        <div className="form_fields_wrapper">
                            <input type="text" name="streamotheroption" placeholder='Other' value={user.streamotheroption} onChange={getUserData} />

                        </div>
                    )}
                    <div></div>
                    <div className="form_fields_wrapper">
                        <div className="internship_select_box">
                            <select className='select_duration' name="duration" value={user.duration} onChange={getUserData}>
                                <option value="4 Weeks">4 Weeks</option>
                                <option value="3 Months">3 Months</option>
                                <option value="6 Months">6 Months</option>
                                <option value="12 Months">12 Months</option>
                            </select>
                            {errors.duration && <span className='error_fields'>This field is required</span>}
                        </div>
                    </div>
                </div>
                <div className="recaptcha_section">
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={onReCAPTCHAChange} />
                </div>
                <div className="form_button">
                    <button onClick={submitUserData}>Register Now</button>
                </div>
            </form>
        </>
    );
}

export default Internship;
