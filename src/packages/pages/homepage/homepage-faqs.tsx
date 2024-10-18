"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/packages/components/accordion";
import { Box } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Container } from "@/packages/components/container";
import {
  LandingPageSection,
  LandingPageSectionTitle,
} from "@/packages/components/landing-page-section";
import { Markdown } from "@/packages/components/markdown";
import { NavigationLinkIds } from "@/packages/components/navigation-link-ids.enum";
import { Stack } from "@/packages/components/stack";
import { SiteConfig } from "@/packages/config/config";
import { TypeFaqSkeleton } from "@/packages/interfaces";
import { Entry } from "contentful";

const HomepageFAQs = ({
  faqs,
}: {
  faqs: Entry<TypeFaqSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  const contactOnClick = (ev: any) => {
    // @ts-ignore
    if (window.Beacon) {
      ev.preventDefault();
      // @ts-ignore
      window.Beacon("open");
      return false;
    }
    return ev;
  };

  return (
    <LandingPageSection id={NavigationLinkIds.FAQS}>
      <Container>
        <Stack spaceY={6}>
          <Stack spaceY={4}>
            <LandingPageSectionTitle className="text-center">
              FAQ
            </LandingPageSectionTitle>

            <Box className="max-w-2xl mx-auto">
              <Accordion type="multiple">
                <Stack spaceY={4}>
                  {faqs.map((item) => {
                    return (
                      <AccordionItem
                        value={item.fields.title}
                        key={item.sys.id}
                      >
                        <Box className="bg-white shadow-card rounded-lg px-5">
                          <AccordionTrigger>
                            {item.fields.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <Markdown content={item.fields.content || ""} />
                          </AccordionContent>
                        </Box>
                      </AccordionItem>
                    );
                  })}
                </Stack>
              </Accordion>
            </Box>
          </Stack>
          <Box className="text-center">
            Something else?{" "}
            <Button asChild size="sm">
              <Box
                as="a"
                href={`mailto:${SiteConfig.cs_email}`}
                onClick={contactOnClick}
                className="cursor-pointer"
              >
                Contact us
              </Box>
            </Button>
          </Box>
        </Stack>
      </Container>
    </LandingPageSection>
  );
};

export { HomepageFAQs };
