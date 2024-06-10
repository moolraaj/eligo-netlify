



import HomePage from "./_home/homepage";
import { LoadscoData } from "./_metadata/metadata";
import './globals.css'
import { ExportScoApiData } from "@/utils/apis/scoApi";
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

export async function generateMetadata() {
  const api = ExportScoApiData();
  const data = await api.fetchHomeScoData();
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

