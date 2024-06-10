'use client'
import MultistepForm from '@/app/_forms/multistepForm';
import React,{useState,useEffect} from 'react';


function PopupForm() {
    const [isMounted, setIsMounted] = useState(false);

      const toggleFormVisibility = () => {
        setIsMounted(!isMounted);
      };
    
      useEffect(() => {                 
        // Check if the popup has been shown before in this session
        const hasShownPopup = sessionStorage.getItem('hasShownPopup');
    
        if (!hasShownPopup) {
          const timer = setTimeout(() => {
            setIsMounted(true); 
            // Set the flag to indicate that the popup has been shown
            sessionStorage.setItem('hasShownPopup', 'true');
          }, 1000);
    
          return () => clearTimeout(timer);
        }
      }, []);
      
  return (
    <>
    {isMounted && (
          <>
           <h1>this is popup form</h1>
          </>
        )}
    </>
  )
}

export default PopupForm
