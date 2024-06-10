import { ExportScoApiData } from "@/utils/apis/scoApi";
import { LoadscoData } from "@/app/_metadata/metadata";
import ServicesInnerSlug from "./component/ServiceSlug";

import { allExportedApi } from "@/utils/apis/Apis";

               




export default async function Page({ params }) {


    const { slug } = params;
    console.log(`this is [slug] page.js slug = ${slug}`)



    return (
        <>
            <ServicesInnerSlug slug={slug} />
        </>
    );
}









// export async function generateStaticParams() {
//     let api = allExportedApi();
//     let data = await api.fetchAllServices();
//      return data.map((ele)=>{
//         return{
//             slug:ele.slug
//         }
//      })
// }




export async function generateMetadata({ params }) {
    const { slug } = params;
    let api = ExportScoApiData();
    const data = await api.fetchdynamicServicesScoData(slug);
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
