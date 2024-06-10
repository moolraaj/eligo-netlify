'use client'
import { useEffect, useState } from 'react';
 
 
import { allExportedApi } from '@/utils/apis/Apis.jsx';
import ServiceChild from './ServiceChild';

export default function ServicesComponent() {
    let api=allExportedApi()
    const [services, setServices] = useState([]);

    const loadServices = async () => {
        let url = await api.fetchAllServices()
        setServices(url)
        
    };

    useEffect(() => {
        loadServices()
    }, []);

    return (
        <>
         
            <ServiceChild services={services} />
        </>
    );
}

 





