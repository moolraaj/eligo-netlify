 
import React from 'react'
import ContactPage from './component/contactUs'
import { ExportScoApiData } from '@/utils/apis/scoApi'
import { LoadscoData } from '../_metadata/metadata'

async function page() {

  
  return (
    <>
    <ContactPage/>
    </>
  )
}

export default page


export async function generateMetadata(){
 
  let api=ExportScoApiData()    
  let data = await api.fetchContactUsScoData() 
  const metadata = await LoadscoData({ data });

  return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
          title: metadata.title,
          description: metadata.description,
          locale: metadata.locale,
          type: metadata.type,
          url: metadata.url,
          siteName: metadata.siteName,
          updatedTime: metadata.updatedTime,
          card: metadata.card,
          twitterTitle: metadata.twitterTitle,
          twitterDescription: metadata.twitterDescription
      }
  };
  
  
}

