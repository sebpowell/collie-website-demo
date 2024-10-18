import { SiteConfig } from "@/packages/config/config";
import { PrivacyPage } from "@/packages/pages/privacy";
import { ContentService } from "@/packages/server/content/content.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const contentService = new ContentService();

export async function generateMetadata(): Promise<Metadata> {
  return await contentService.getPageMetaById(
    SiteConfig.contentful_page_ids.privacy_policy
  );
}

export default async function Privacy() {
  const page = await contentService.getPageById(
    SiteConfig.contentful_page_ids.privacy_policy
  );

  if (!page) return notFound();

  const content = page?.fields?.modules?.find(
    (module) => module?.sys.contentType.sys.id === "moduleRichText"
  );

  return (
    <PrivacyPage
      content={content?.fields.content}
      lastUpdated={content?.sys.updatedAt}
    />
  );
}
