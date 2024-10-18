import { SiteConfig } from "@/packages/config/config";
import { Homepage } from "@/packages/pages/homepage";
import { ContentService } from "@/packages/server/content/content.service";
import { Metadata } from "next";

const contentService = new ContentService();

export async function generateMetadata(): Promise<Metadata> {
  return await contentService.getPageMetaById(
    SiteConfig.contentful_page_ids.home
  );
}

export default async function Home() {
  const faqs = await contentService.getFAQs();

  const testimonials = await contentService.getTestimonials();

  return <Homepage faqs={faqs.items} testimonials={testimonials.items} />;
}
