'use client'
import { allExportedApi } from '@/utils/apis/Apis'
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation';
import CallSlider from './callSlider';

 


function CallToAction() {
   

    let router = useRouter()
    const [data, setData] = useState([])
    let api = allExportedApi()
    const fetchCallToAction = async () => {
        let response = await api.fetchCallToAction()
        setData(response)
       

    }
    useEffect(() => {
        fetchCallToAction()
    }, [])
    
    return (
        <>
            {
             data &&   data.map((ele) => {
                    return   <div className="call_wrapper" key={ele.id}>
                    <div className="call_left_section">
                        <h1>{ele.acf.action_heading}</h1>
                        <h1>{ele.acf.action_sub_heading}</h1>
                        <p dangerouslySetInnerHTML={{__html:ele.acf.action_description}}></p>
                        <div className="call_button">
                        <button id='sucess-journy-btn' onClick={() => router.push('/contact')}>call us now</button>
                        </div>
                    </div>
                    <div className="call_right_section" style={{position:'relative'}}>
                        <CallSlider slider={ele.acf.action_image}/>
                    </div>
                </div> 
                           
                        
                })
            }
        </>
    )
}

export default CallToAction


 
