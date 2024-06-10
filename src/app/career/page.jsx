import { allExportedApi } from "@/utils/apis/Apis";
import CareerPage from "./components/CareerPage";
import { ExportScoApiData } from "@/utils/apis/scoApi";
import { LoadscoData } from "../_metadata/metadata";


async function Career() {
    const api = allExportedApi();
    let data = await api.careerPageApi();

    return (
        <>
           <CareerPage data={data} />
            
        </>
    );
}

export default Career


export async function generateMetadata(){
    let api=ExportScoApiData()  
    let data=await  api.fetchCareerScoData() 
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
