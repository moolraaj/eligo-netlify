

export async function LoadscoData({data}) {
    
    const metadata = {
        title: data.head.match(/<meta property="og:title" content="([^"]+)"/)?.[1] || '',
        description: data.head.match(/<meta property="og:description" content="([^"]+)"/)?.[1] || '',
        locale: data.head.match(/<meta property="og:locale" content="([^"]+)"/)?.[1] || '',
        type: data.head.match(/<meta property="og:type" content="([^"]+)"/)?.[1] || '',
        url: data.head.match(/<meta property="og:url" content="([^"]+)"/)?.[1] || '',
        siteName: data.head.match(/<meta property="og:site_name" content="([^"]+)"/)?.[1] || '',
        updatedTime: data.head.match(/<meta property="og:updated_time" content="([^"]+)"/)?.[1] || '',
        card: data.head.match(/<meta name="twitter:card" content="([^"]+)"/)?.[1] || '',
        twitterTitle: data.head.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] || '',
        twitterDescription: data.head.match(/<meta name="twitter:description" content="([^"]+)"/)?.[1] || ''
    };

    return metadata;
}
