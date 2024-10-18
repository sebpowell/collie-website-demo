import { Box } from "@/packages/components/box";
import { Container } from "@/packages/components/container";
import { Column, Grid } from "@/packages/components/grid";
import { LandingPageSectionTitle } from "@/packages/components/landing-page-section";
import { NavigationLinkIds } from "@/packages/components/navigation-link-ids.enum";
import { Paragraph } from "@/packages/components/paragraph";
import { Stack } from "@/packages/components/stack";
import { Text } from "@/packages/components/text";
import { TypeTestimonialSkeleton } from "@/packages/interfaces";
import { Entry } from "contentful";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const HomepageReviews = ({
  testimonials,
}: {
  testimonials: Entry<TypeTestimonialSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[];
}) => {
  return (
    <Container className="py-24" id={NavigationLinkIds.REVIEWS}>
      <Stack spaceY={12}>
        <Box>
          <Image
            src="heart.png"
            width={100}
            height={100}
            alt=""
            className="mx-auto"
          />
          <LandingPageSectionTitle className="text-center">
            Remote teams love Collie
          </LandingPageSectionTitle>
        </Box>
        <Grid gap={{ initial: 2, lg: 8 }}>
          {testimonials.map((testimonial) => {
            return (
              <Column colSpan={{ initial: 12, lg: 6 }} key={testimonial.sys.id}>
                <Box className="shadow-panel rounded-2xl p-12">
                  <Stack spaceY={6}>
                    <Paragraph textSize={1} textColor="primary">
                      <Balancer>{testimonial.fields.content}</Balancer>
                    </Paragraph>

                    <Stack className="flex items-center" spaceX={4}>
                      {testimonial.fields.avatar?.fields.file && (
                        <Image
                          width={48}
                          height={48}
                          alt={testimonial.fields.name}
                          className="rounded-full"
                          src={testimonial.fields.avatar?.fields.file?.url}
                        />
                      )}
                      <Stack spaceY={2}>
                        <Text
                          className="leading-none"
                          textColor="primary"
                          fontWeight="medium"
                        >
                          {testimonial.fields.name}
                        </Text>
                        <Text className="leading-none">
                          {testimonial.fields.jobTitle}
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Column>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
};

export { HomepageReviews };
