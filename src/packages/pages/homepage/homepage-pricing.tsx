import { Box } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Container } from "@/packages/components/container";
import { Divider } from "@/packages/components/divider";
import { LandingPageSectionTitle } from "@/packages/components/landing-page-section";
import { Paragraph } from "@/packages/components/paragraph";
import { Stack } from "@/packages/components/stack";
import { Text } from "@/packages/components/text";
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";
import { routes } from "@/packages/utils/routes";
import { SiteConfig } from "@/packages/config/config";
import Balancer from "react-wrap-balancer";
import { NavigationLinkIds } from "@/packages/components/navigation-link-ids.enum";

const HomepagePricing = () => {
  const usps = [
    "Unlimited team members",
    "Unlimited integrations",
    "Team insights dashboard",
    "1-to-1 meetings",
    "Mood and workload tracking",
    "24/7 Customer support",
    "Onboarding call",
  ];

  return (
    <Box id={NavigationLinkIds.PRICING}>
      <Container className="rounded-3xl py-24 bg-gradient-to-b from-primary-2 to-white ">
        <Stack spaceY={8}>
          <Stack spaceY={2} className="text-center">
            <Box
              className="text-black leading-none bg-white/70 border-white/90 inline-block px-5 py-2 rounded-full border shadow-sm"
              textSize={0}
            >
              Collie is in BETA and <strong>completely free</strong> until
              February 2024!
            </Box>
            <LandingPageSectionTitle>
              One price unlocks all
            </LandingPageSectionTitle>
            <Paragraph className="max-w-lg mx-auto">
              <Balancer>
                As a manager, you only pay for your account; everything else is
                unlimited and included.
              </Balancer>
            </Paragraph>
          </Stack>

          <Box className="flex items-center">
            <Divider gradient="right" className="flex-1" />
            <Stack className="max-w-md w-full mx-auto" spaceY={4}>
              <Stack
                className="p-10 mx-auto shadow-panel rounded-2xl bg-white/90 backdrop-blur-xl"
                spaceY={8}
              >
                <Stack spaceY={2}>
                  <Text
                    textSize={5}
                    className="leading-none"
                    textColor="primary"
                  >
                    <span className="line-through">$99</span>
                  </Text>
                  <Box className="leading-none">per manager, per month</Box>
                </Stack>

                <Stack spaceY={5}>
                  <Stack spaceY={3}>
                    {usps.map((item) => {
                      return (
                        <Stack
                          key={item}
                          spaceX={2}
                          className="flex items-center"
                        >
                          <Box className="w-6 h-6 flex items-center justify-center bg-primary-3 rounded-full text-white bg-gradient-to-br from-green-8 to-green-10">
                            <Check size={14} />
                          </Box>
                          <Text className="leading-none">{item}</Text>
                        </Stack>
                      );
                    })}
                  </Stack>
                  <Button variant="primary" isBlock size="lg" asChild>
                    <Box as="a" href={SiteConfig.app_url}>
                      Get started
                    </Box>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Divider gradient="left" className="flex-1" />
          </Box>
          <Stack className="text-center max-w-md  mx-auto" spaceY={4}>
            <Paragraph textSize={1}>
              Your data is handled securely. All data is encrypted at rest & in
              transit. We are CCPA & GDPR compliant, with hosting available in
              the US and other regions (EU is coming soon, please get in touch
              for access).
            </Paragraph>
            <Button asChild>
              <Box as="a" href={routes.getRoute("privacy")}>
                Learn more
              </Box>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export { HomepagePricing };
