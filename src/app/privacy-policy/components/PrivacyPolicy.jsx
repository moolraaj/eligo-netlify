'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import { useEffect, useState } from 'react';

function PrivacyPolicy() {
  const [data, setData] = useState([]);    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = allExportedApi();
                const responseData = await api.PrivacyPolicy();
                setData(responseData);
            } catch (error) {
                console.error("Error fetching Terms and Conditions:", error);
            }
        };

        fetchData();
    }, []);
  return (
    <>
    <div className="privacy_policy_outer page_top footer_pages">
        <div className="privacy_policy_inner">
            {data && data.map((ele,index)=>{
                return  <div className='privacy_policies_data' key={index} dangerouslySetInnerHTML={{__html: ele.acf.privacy_policies}}></div>;
            })}
           
        </div>
    </div>
    </>
  )
}

export default PrivacyPolicy;