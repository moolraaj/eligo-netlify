
import { allExportedApi } from "@/utils/apis/Apis";
import Portfolioslug from "./component/portfolioslug";



export default async function Page({ params }) {
   
    const { slug } = params;

  


     

    return (
        <>
            <Portfolioslug slug={slug}/>
        </>
    );
}


// export async function generateStaticParams() {
//     let api=allExportedApi()
//     let data = await api.fetchAllportFolio();
//     return data.map((ele) => ({
//         slug: ele.slug
//     }));
// }


export async function generateMetadata({params}){
    let {slug}=params
    let api=allExportedApi() 
    const data = await api.fetchSingleportFolio(slug);
     
    
    const result=data.map((ele)=>{
        let description=ele.acf.portfolio_description.replace(/<[^>]+>|&[^;]+;/g, '');
        return{
            title:ele.title.rendered,
            description
             
        }
    })
    
    return{
        title:result[0].title,
        description:result[0].description,
        openGraph:{

        }
        
    }
}





