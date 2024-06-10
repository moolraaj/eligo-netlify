 

import { ExportScoApiData } from "@/utils/apis/scoApi";
import CoursesPage from "./component/CoursesPage";
import { LoadscoData } from "../_metadata/metadata";
 


export default async function page() {


  return (
   <>
   <CoursesPage />
   </>
  )
}

export async function generateMetadata(){
  let api=ExportScoApiData()
  let data=await api.fetchCourseScoData()
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

