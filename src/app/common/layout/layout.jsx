'use client'
import { useState, useEffect } from 'react';
import { allExportedApi } from '@/utils/apis/Apis';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import Loader from './component/loader';
 

export default function Layout({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = allExportedApi();
                const response = await api.fetchHeaderFooter();
                const data = await response.data;
                setData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader/>
            ) : (
                <>
                
                    <Navbar data={data} />
                    {children}
                    <Footer response={data}/>
                </>
            )}
        </>
    );
}
