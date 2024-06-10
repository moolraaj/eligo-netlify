'use client'
import { allExportedApi } from "@/utils/apis/Apis.jsx";
import PortfolioChild from "./portfolioChild";
import { useEffect, useState } from "react";

export default  function PortfolioComponent() {
    let api=allExportedApi()

   const[data,setData]=useState() 
   
   const loadPortfolio=async()=>{
    let result=await api.fetchAllportFolio()
    setData(result)

   }
    
    
    useEffect(()=>{
        loadPortfolio()
    },[])

  

    return (
       <>

       <PortfolioChild data={data}/>
       </>
    );
}

 



