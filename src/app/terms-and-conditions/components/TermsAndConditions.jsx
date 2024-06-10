'use client'
import { allExportedApi } from '@/utils/apis/Apis';
import  { useState,useEffect  } from 'react';

function TermsAndConditions() {
  const [data, setData] = useState([]);  


  useEffect(() => {  
      const fetchData = async () => {
          try {
              const api = allExportedApi();
              const responseData = await api.TermsandConditions();
              setData(responseData);
          } catch (error) {
              console.error("Error fetching Terms and Conditions:", error);
          }
      };

      fetchData();
  }, []);
  return (
    <>
    <div className="terms_and_conditions_outer page_top footer_pages">
        <div className="terms_and_conditions_inner">
            {data && data.map((ele,index)=>{
                return  <div className='t_c_data' key={index} dangerouslySetInnerHTML={{__html: ele.acf.terms_and_conditions}}></div>;
            })}
           
        </div>
    </div>
    </>
  )
}

export default TermsAndConditions