import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTestimonialFields {
    name: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Text;
    company: EntryFieldTypes.Symbol;
    jobTitle: EntryFieldTypes.Symbol;
    avatar: EntryFieldTypes.AssetLink;
}

export type TypeTestimonialSkeleton = EntrySkeletonType<TypeTestimonialFields, "testimonial">;
export type TypeTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTestimonialSkeleton, Modifiers, Locales>;

export function isTypeTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeTestimonial<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'testimonial'
}
