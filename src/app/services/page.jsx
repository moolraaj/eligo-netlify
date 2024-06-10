
 
import { LoadscoData } from "../_metadata/metadata";
import ServicesPage from "./component/servicesPage";
import { ExportScoApiData } from "@/utils/apis/scoApi";
 
 

 

 

 
function Services() {

  
    return (
        <>
       
        <ServicesPage/>
       
        </>
    );
}

export default Services







// generate dynamic sco title and desriptions
export async function generateMetadata(){
    let api=ExportScoApiData() 
    const data = await api.fetchServiceScoData();
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


