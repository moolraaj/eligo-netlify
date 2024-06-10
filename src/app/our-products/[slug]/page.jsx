


import { allExportedApi } from "@/utils/apis/Apis";
import Productslug from './component/productslug'
import { ExportScoApiData } from "@/utils/apis/scoApi";
import { LoadscoData } from "@/app/_metadata/metadata";

 


export default async function Page({ params }) {
    
    const { slug } = params;
   
    return (
        <>
            <Productslug slug={slug} />
        </>
    );
}


// export async function generateStaticParams() {
//     let api = allExportedApi()
//     let data = await api.AllProducts();
//     return data.map((ele) => ({
//         slug: ele.slug
//     }));
// }


// generate dynamic sco title and desriptions
export async function generateMetadata({params}){
    let {slug}=params
    let api=ExportScoApiData() 
    let data=await api.fetchdynamicProductScoData(slug)
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





