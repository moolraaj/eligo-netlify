import { allExportedApi } from "@/utils/apis/Apis";
import OurInternshipsPage from "./component/OurInternshipsPage";
import { ExportScoApiData } from "@/utils/apis/scoApi";
import { LoadscoData } from "../_metadata/metadata";

 

 

export default async function page() {

 
  return (
    <>
      <OurInternshipsPage/>
    </>
  )
}


// generate dynamic sco title and desriptions
export async function generateMetadata(){
  let api=ExportScoApiData()  
  let data=await  api.fetchInternshipScoData()
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

