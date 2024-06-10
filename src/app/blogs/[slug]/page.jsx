import { allExportedApi } from "@/utils/apis/Apis";
import BlogSlug from "./component/blogSlug";
import { ExportScoApiData } from "@/utils/apis/scoApi";
import { LoadscoData } from "@/app/_metadata/metadata";




export default async function Page({ params }) {
 
    const { slug } = params;

     


    


    return (
        <>
            <BlogSlug slug={slug} />
        </>
    );
}


export async function generateStaticParams() {
    let api=allExportedApi()
    let data = await api.AllBlogPOsts();
    let {blogs}=data
    return blogs.map((ele) => ({
        slug: ele.slug
    }));
}


export async function generateMetadata({params}){
 let {slug}=params
  let api=ExportScoApiData()     
  let data = await api.fetchdynamicBlogsScoData(slug)   
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