import { ExportScoApiData } from "@/utils/apis/scoApi";


export async function CourseScoData() {
    let api=ExportScoApiData()
    let scoData = await api.fetchCourseScoData();
   

    const metadata = {
        title: scoData.head.match(/<meta property="og:title" content="([^"]+)"/)?.[1] || '',
        description: scoData.head.match(/<meta property="og:description" content="([^"]+)"/)?.[1] || '',
        locale: scoData.head.match(/<meta property="og:locale" content="([^"]+)"/)?.[1] || '',
        type: scoData.head.match(/<meta property="og:type" content="([^"]+)"/)?.[1] || '',
        url: scoData.head.match(/<meta property="og:url" content="([^"]+)"/)?.[1] || '',
        siteName: scoData.head.match(/<meta property="og:site_name" content="([^"]+)"/)?.[1] || '',
        updatedTime: scoData.head.match(/<meta property="og:updated_time" content="([^"]+)"/)?.[1] || '',
        card: scoData.head.match(/<meta name="twitter:card" content="([^"]+)"/)?.[1] || '',
        twitterTitle: scoData.head.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] || '',
        twitterDescription: scoData.head.match(/<meta name="twitter:description" content="([^"]+)"/)?.[1] || ''
    };


    return metadata;
}
