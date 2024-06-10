


import { ExportScoApiData } from "@/utils/apis/scoApi";
import AboutUs from "../components/About/AboutUs";


import './AboutPage.scss'
import { LoadscoData } from "../_metadata/metadata";
 

async function AboutPage() {
 
  return (
    <>
      
        <AboutUs/>

     





    </>
  )
}

export default AboutPage


export async function generateMetadata(){
  let api=ExportScoApiData()
 let data=await api.fetchAboutScoData()
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