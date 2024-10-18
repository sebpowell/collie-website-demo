import { Box, BoxProps } from "@/packages/components/box";
import { Divider } from "@/packages/components/divider";
import { Heading } from "@/packages/components/heading";
import { ISectionProps, Section } from "@/packages/components/section";
import { cn } from "@/packages/utils/cn";
import Balancer from "react-wrap-balancer";

const LandingPageSectionTitle = (props: BoxProps<"div">) => {
  const { children, className } = props;

  return (
    <Heading as="h2" textSize={5} textColor="primary" className={cn(className)}>
      <Balancer>{children}</Balancer>
    </Heading>
  );
};

const LandingPageSection = (props: ISectionProps) => {
  const { className, ref, ...rest } = props;

  return <Section className={cn("py-24", className)} {...rest} />;
};

export { LandingPageSection, LandingPageSectionTitle };
