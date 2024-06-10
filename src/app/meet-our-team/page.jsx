 
 
import { LoadscoData } from "../_metadata/metadata"
import TeamPageComponent from "./component/teamPageComponent"
import { ExportScoApiData } from "@/utils/apis/scoApi"
async function MeetOurTeam() {
  
   
 
   
    

  return (
    
     <>
     
     <TeamPageComponent />
   
    
     
     </>
  )
}

export default MeetOurTeam


export async function generateMetadata(){
  let api=ExportScoApiData() 
  let data=await api.fetchMeetOurteamScoData()
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

 
