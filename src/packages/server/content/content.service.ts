import { contentfulClient } from "@/packages/server/clients/contentful";
import { Metadata } from "next";
import {
  TypePageFields,
  TypePageSkeleton,
} from "@/packages/interfaces/TypePage";
import {
  TypeFaqFields,
  TypeFaqSkeleton,
  TypeTestimonialFields,
  TypeTestimonialSkeleton,
} from "@/packages/interfaces";
import { Entry, EntryCollection } from "contentful";

class ContentService {
  async getPageMetaById(id: string): Promise<Metadata> {
    const page = await this.getPageById(id);

    const title = page?.fields.metaProps?.fields.title || "";

    const description = page?.fields.metaProps?.fields.description || "";

    const image = page?.fields.metaProps?.fields.image?.fields.file?.url || "";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: image, width: 1200, height: 627 }],
      },
      twitter: {
        title,
        description,
        images: [{ url: image, width: 1200, height: 627 }],
      },
    };
  }

  async getPageById(
    id: string
  ): Promise<Entry<TypePageSkeleton, "WITHOUT_UNRESOLVABLE_LINKS"> | null> {
    return await contentfulClient.withoutUnresolvableLinks.getEntry<{
      fields: TypePageFields;
      contentTypeId: "page";
    }>(id, { include: 3 });
  }

  async getFAQs(): Promise<
    EntryCollection<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
  > {
    return await contentfulClient.withoutUnresolvableLinks.getEntries<{
      fields: TypeFaqFields;
      contentTypeId: "faq";
    }>({ content_type: "faq" });
  }

  async getTestimonials(): Promise<
    EntryCollection<TypeTestimonialSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
  > {
    return await contentfulClient.withoutUnresolvableLinks.getEntries<{
      fields: TypeTestimonialFields;
      contentTypeId: "testimonial";
    }>({ content_type: "testimonial" });
  }
}

type IFAQ = Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;

export type { IFAQ };

export { ContentService };
