import { Box } from "@/packages/components/box";
import { Container } from "@/packages/components/container";
import { Divider } from "@/packages/components/divider";
import {
  TypeFaqFields,
  TypeFaqSkeleton,
  TypeTestimonialSkeleton,
} from "@/packages/interfaces";
import { Entry } from "contentful";
import { HomepageMasthead } from "@/packages/pages/homepage/homepage-masthead";
import { HomepageFeatures } from "@/packages/pages/homepage/homepage-features";
import { HomepageReviews } from "@/packages/pages/homepage/homepage-reviews";
import { HomepagePricing } from "@/packages/pages/homepage/homepage-pricing";
import { HomepageFAQs } from "@/packages/pages/homepage/homepage-faqs";
import { HomepageCTA } from "@/packages/pages/homepage/homepage-cta";

export const Homepage = ({
  faqs,
  testimonials,
}: {
  faqs: Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
  testimonials: Entry<TypeTestimonialSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  return (
    <>
      <HomepageMasthead />
      <HomepageFeatures />

      <Box className="mb-24">
        <HomepageReviews testimonials={testimonials} />
        <Divider gradient="center" />
      </Box>
      <HomepagePricing />
      <HomepageFAQs faqs={faqs} />
      <HomepageCTA />
    </>
  );
};
