 
import { LoadscoData } from "../_metadata/metadata";
import OurProductPage from "./component/OurProductPage";
import { ExportScoApiData } from "@/utils/apis/scoApi";

 

 

export default async function page() {

 
  return (
    <>
      <OurProductPage />
    </>
  )
}


// generate dynamic sco title and desriptions
export async function generateMetadata(){
  let api=ExportScoApiData() 
  let data=await api.fetchProductsScoData()
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

