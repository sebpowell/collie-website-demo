import { Box } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Container } from "@/packages/components/container";
import { Column, Grid } from "@/packages/components/grid";
import { Heading } from "@/packages/components/heading";
import { Paragraph } from "@/packages/components/paragraph";
import { Section } from "@/packages/components/section";
import { Stack } from "@/packages/components/stack";
import Balancer from "react-wrap-balancer";
import { SiteConfig } from "@/packages/config/config";
import Image from "next/image";

const HomepageMasthead = () => {
  return (
    <Section
      className=" from-primary-1 to-primary-2 bg-gradient-to-b overflow-hidden border-b"
      borderColor="primary"
    >
      <Container className="pt-32">
        <Stack spaceY={12}>
          <Stack className="max-w-2xl mx-auto text-center" spaceY={8}>
            <Stack spaceY={4}>
              <Heading
                as="h1"
                textSize={{ initial: 5, lg: 7 }}
                style={{ lineHeight: 1.1 }}
                textColor="primary"
                fontWeight="bold"
              >
                <Balancer>The accountability tool for remote teams</Balancer>
              </Heading>
              <Paragraph textSize={2}>
                <Balancer>
                  Track what your team is working on and how they feel about it
                  in one simple tool.
                </Balancer>
              </Paragraph>
            </Stack>
            <Grid gap={4}>
              <Column colSpan={{ initial: 12, lg: 6 }}>
                <Button variant="primary" size="lg" isBlock asChild>
                  <Box as="a" href={SiteConfig.app_url} target="_blank">
                    Get started
                  </Box>
                </Button>
              </Column>
              <Column colSpan={{ initial: 12, lg: 6 }}>
                <Button isBlock size="lg" asChild>
                  <Box as="a" href={SiteConfig.demo_url} target="_blank">
                    Schedule a demo
                  </Box>
                </Button>
              </Column>
            </Grid>
          </Stack>

          <Box className="relative shadow-2xl overflow-hidden aspect-[12/11]">
            <Image src="/screen-1.png" alt="" fill sizes="100vw" priority className="object-contain object-top" />
          </Box>
        </Stack>
      </Container>
    </Section>
  );
};

export { HomepageMasthead };
