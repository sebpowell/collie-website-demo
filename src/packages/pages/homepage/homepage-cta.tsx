"use client";

import { Box } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Container } from "@/packages/components/container";
import { LandingPageSectionTitle } from "@/packages/components/landing-page-section";
import { Stack } from "@/packages/components/stack";
import { Text } from "@/packages/components/text";
import { SiteConfig } from "@/packages/config/config";
import Image from "next/image";

const HomepageCTA = () => {
  return (
    <Container className="text-center overflow-hidden">
      <Stack spaceY={12}>
        <Stack spaceY={4}>
          <Stack spaceY={2}>
            <Text className="leading-none text-primary-6" textSize={1}>
              Less admin, more progress
            </Text>
            <LandingPageSectionTitle>
              It’s time for better
            </LandingPageSectionTitle>
          </Stack>

          <Stack spaceY={4}>
            <Button
              size="lg"
              variant="primary"
              isBlock
              style={{ maxWidth: 300 }}
              asChild
            >
              <Box as="a" href={SiteConfig.app_url}>
                Get started
              </Box>
            </Button>
            <Box>Free 30-day trial, no credit card required</Box>
          </Stack>
        </Stack>
      </Stack>

      <Image src="hero.png" alt="" width={1200} height={1200} className="rounded-b-2xl" layout="responsive" />
    </Container>
  );
};

export { HomepageCTA };
