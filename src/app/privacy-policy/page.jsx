 
 
import { ExportScoApiData } from '@/utils/apis/scoApi';
import PrivacyPolicy from './components/PrivacyPolicy';
import { LoadscoData } from '../_metadata/metadata';
 

export default async function Privacy() {
   

    return (
        <PrivacyPolicy/>
    );
}

 


export async function generateMetadata() {
    const api = ExportScoApiData();
    const data = await api.fetchPrivacyPolicyScoData();
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
