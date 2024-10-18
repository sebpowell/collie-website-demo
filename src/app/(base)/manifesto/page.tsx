import { SiteConfig } from "@/packages/config/config";
import { ManifestoPage } from "@/packages/pages/manifesto";
import { ContentService } from "@/packages/server/content/content.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const contentService = new ContentService();

export async function generateMetadata(): Promise<Metadata> {
  return await contentService.getPageMetaById(
    SiteConfig.contentful_page_ids.manifesto
  );
}

export default async function Manifesto() {
  const page = await contentService.getPageById(
    SiteConfig.contentful_page_ids.manifesto
  );

  if (!page) return notFound();

  const content = page?.fields?.modules?.find(
    (module) => module?.sys.contentType.sys.id === "moduleRichText"
  );

  return <ManifestoPage content={content?.fields.content} />;
}
