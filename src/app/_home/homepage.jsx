
 
'use client'
import { allExportedApi } from '@/utils/apis/Apis'

 
 
import HomeCompo from '../components/Home/Home';
import { useEffect, useState } from 'react';
const api = allExportedApi()

 
export default function HomePage() {

    const [result,setResult]=useState([])


    const fetchHomePage=async()=>{
        const data = await api.HomeApi()
        setResult(data)
    }

    useEffect(()=>{
        fetchHomePage()
    },[])
    
        
 





    return (
        <HomeCompo result={result} />
    )
}

