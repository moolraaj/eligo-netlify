
 
import TermsAndConditions from "./components/TermsAndConditions";
import { ExportScoApiData } from '@/utils/apis/scoApi';
import { LoadscoData } from '../_metadata/metadata';

function Terms() {
   

    return (
        <TermsAndConditions/>
    );
}

export default Terms;



// generate dynamic sco title and desriptions
export async function generateMetadata(){
    let api=ExportScoApiData()  
    let data=await api.fetchTermAndConditionScoData()
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